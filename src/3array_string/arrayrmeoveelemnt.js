function outside(msg) {
  console.log("--"+msg);
}

class LookupTable {
  constructor() {
    this.keyArr = [];
    this.valArr = [];
    this.insideClass("hi inside"); // using this
    outside("hi outside"); // no this outisde
  }

  insideClass(msg) {
    console.log("--"+msg);
  }
  put(key, value) {

    let indx = this.keyArr.findIndex((keya) => {
      return keya == key;
    });
    
    if (indx >= 0) {
      this.valArr[indx] = value;
    } else {
      this.keyArr.push(key);
      this.valArr.push(value);
    }

  }

  get(key) {
    let indx = this.keyArr.findIndex((keya)=> {
      return keya == key;
    });
    return this.valArr[indx];
  }

  keys() {
    return this.keyArr;
  }

  remove(key) {

    let indx = this.keyArr.findIndex((keya) => {
      return keya == key;
    });

    this.keyArr.splice(indx,1);

    this.valArr.splice(indx, 1);

  }

}


const lookupTable = new LookupTable()


lookupTable.put('infrastructure', 'hard')
lookupTable.put('serverless', 'good')

console.log(`Infrastructure is ${lookupTable.get('infrastructure')}`)
// Infrastructure is hard
console.log(`Serverless is ${lookupTable.get('serverless')}`)
// Serverless is good

console.log(`There's a battle between ${lookupTable.keys()}`)
// There's a battle between infrastructure,serverless

lookupTable.remove('infrastructure')
console.log(`The winner will be ${lookupTable.keys()}`)
// The winner will be serverless

lookupTable.put('serverless', 'great')
console.log(`Let's be ${lookupTable.get('serverless')}`)
// Let's be great
