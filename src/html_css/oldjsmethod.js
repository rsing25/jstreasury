document.getElementById(id)]
document.getElementsByTagName(name)
document.getElementsByClassName(name)


Get the first element in the document with class="example":
document.querySelector(".example");

document.querySelectorAll(".example")



var c = document.body.childNodes;
c[0].nodeName;
c[0].textContent; // content inside the elemnt.

  var txt = "";
  var i;
  for (i = 0; i < c.length; i++) {
    txt = txt + c[i].nodeName + "<br>";

    txt = txt + c[i].textContent + "<br>";

  }



function myFunction() {
  var c = document.getElementById("mySelect").childNodes;
  document.getElementById("demo").innerHTML = c[2].text;
}


Get the node name of a <p> element:

var x = document.getElementById("myP").nodeName;

Get the text content of an element:

var x = document.getElementById("myBtn").textContent;

et the inner text of an element:

var x = document.getElementById("myBtn").innerText;

  <div>lions,tigers</div>
  innerText "lions, tigers"
  
  textContent "lions,\ntigersand bears"

Get the HTML content of the first child node of an <ul> element:

var x = document.getElementById("myList").firstChild.innerHTML;

Get the HTML content of the last child node of an <ul> element:

var x = document.getElementById("myList").lastChild.innerHTML;

Get the node name of the parent node of a <li> element:

var x = document.getElementById("myLI").parentNode.nodeName;

Get the HTML content of the next sibling of a list item:

var x = document.getElementById("item1").nextSibling.innerHTML;
Get the HTML content of the previous sibling of a list item:

var x = document.getElementById("item2").previousSibling.innerHTML;


