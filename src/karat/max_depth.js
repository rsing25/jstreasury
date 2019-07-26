// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
    var len = Math.max.apply(null, $('ul, ol').map((i,l)=> $(l).find('ul, ol').length)) + 1;
    return len;
    
}

<html>

<body>

    <ul>
      <li>Item:
         <ol>
           <li>Point:
             <div>
               <ul>
                 <li>elem1</li>
               </ul>
             </div>
           </li>
         </ol>
      </li>
      <li>elem2</li>
    </ul>
    <ul>
      <li>simple list1</li>
    </ul>
    <ul>
    </ul>
    <ul>
      <li>Item:
         <ol>
           <li>Point:
             <div>
               <ul>
                 <li>elem1</li>
               </ul>
             </div>
           </li>
         </ol>
      </li>
      <li>elem2</li>
    </ul>
    <ul>
      <li>simple list1</li>
    </ul>
    <ul>
    </ul>


<script src="https://code.jquery.com/jquery-2.2.3.min.js"   integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo="   crossorigin="anonymous"></script>

<script src="script.js"></script>
</body>
</html>
 