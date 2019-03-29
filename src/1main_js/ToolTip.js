<!-- Enter your HTML code here -->
<div id="myDiv">My div</div>

<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li id="item-5">Item 5</li>
</ul>
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>

  
/* Add your css styles here */

#myDiv {
    margin-bottom: 200px;
}

#myDiv, #item-5 {
    position: relative;
    display: inline-block;
}

.toolTip {
    width: 200px;
    height:200px;
    text-align:center;
    position:absolute;
    z-index:1;
    border-radius:5px;
    border: 1px solid black;
    left:0;
    bottom: 10px;
    transform: translateY(-100%);
  
}

.hide {
    display:none;
}


// Add your javascript here
$.fn.showToolTip = function (config) {
   console.log('here');
   
   const tooltip = document.createElement('div');
   
   const title = document.createElement('h2');
   title.textContent = config.Title;
   tooltip.appendChild(title);
   
   const content = document.createElement('div');
   content.textContent = config.Content;
   tooltip.appendChild(content);
   
   const button = document.createElement('Button');
   button.innerHTML = "Okey";
   button.addEventListener("click", function(){
       config.onApprove()
       tooltip.style.display="none";
   })
   tooltip.appendChild(button);
   
   tooltip.classList.add('toolTip');
   
   const target = this[0];
   target.appendChild(tooltip);
}

$('#myDiv').showToolTip({
    Title: 'This is a title',
    Content: 'This is the content',
    onApprove: () => { alert('clicked!'); },
});

$('#item-5').showToolTip({
    Title: 'This is another title',
    Content: 'This is more content',
    onApprove: () => { alert('clicked a different one!'); },
});
