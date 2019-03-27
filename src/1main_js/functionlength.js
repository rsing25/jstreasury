const fn1 = (a    , b    ) => { }
const fn2 = (a    , ...b ) => { }
const fn3 = (a    , b = 2) => { }
const fn4 = (a = 1, b    ) => { }
const fn5 = (a = undefined, b = undefined) => { }


fn1.length // -> 2
fn2.length // -> 1
fn3.length // -> 1
fn4.length // -> 0
fn5.length // -> 0

console.log(fn1.length +''+fn2.length+''+fn3.length+''+fn4.length);
