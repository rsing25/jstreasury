/**
O{1}


 *  */

 class MaxRepeating {
     constructor(inArr) {
         this.inArr = inArr;
     }

     maxRepeat() {
        let cache = {};
        let maxRepeatElement = -1;
        let maxFrequencey = -1;

        this.inArr.forEach(element => {
            
            if(!cache[element]){
                cache[element] = 0;
            } {
                cache[element]++;
            }
            
            if(maxFrequencey < cache[element]) {
                maxFrequencey = cache[element];
                maxRepeatElement = element;
            }

        });
        return maxRepeatElement;
     }
 }

 const obj = new MaxRepeating([3, 4, 5, 6, 7, 2, 2, 2, 3]);
 console.log(obj.maxRepeat());
