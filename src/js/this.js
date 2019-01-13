6

In the anonymous function, this is bound to the global object (window in a browser environment).

There are various ways of accessing the instance:

var self = this;
(function () {
    console.log("B", self instanceof MyObject);
}());
or

(function () {
    console.log("B", this instanceof MyObject);
}).call(this);