const loadScript = (src, callback) => {
    let el = document.createElement("script");
    el.src = src;
    document.head.append(el);
    el.onload = () => {callback(null,el)};
    el.onerror = () => {callback(new Error(`Script load error for ${src}`))};
}

loadScript('1.js', function(error, script) {
    if(error) {
        console.log(error.message);
    } else {
        loadScript("2.js", function(error, script) {
            if(error) {
                console.log(error.message);
            } else {

            }
        })
    }
})