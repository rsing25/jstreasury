const slide = () => {
     const nodeList = document.getElementsByTagName("img");
        console.log(nodeList);
    for(var i=0; i < nodeList.length; i++) {
        debugger;
        console.log(nodeList[i].style);
        console.log(nodeList[i].style.display);
        if(nodeList[i].style.display == "block" ) {
            nodeList[i].style.display = "none"
            if (i == (nodeList.length -1) ) {
                nodeList[0].style.display = "block";
                break;
            }  else {
                nodeList[i+1].style.display = "block";
                break;
            } 
            
        }
        
    }
 
} 
setInterval("slide()",1000 );