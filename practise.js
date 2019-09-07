var add = function(x) {

    return function(y) {

        return function(z) {
            return x+y+z;
        }
    }

}

console.error(add(1)(2)(3));

var add1 = function(a) {

    console.log(add1.length);
}

console.error(add1.bind(this,1,2)());


var curry = function(fn) {
    
}