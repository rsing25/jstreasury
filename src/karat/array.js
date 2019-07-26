While working on some data processing software, we wrote some code to find all the numeric values that a user has entered into a large data set. Why is this code inefficient? How would you improve it?

```javascript
let uniqueNumericValues = [];
var isNumeric = /^[0-9]+$/;
var inputFields = [{value: "5"}, {value: "3"}, {value: "foo"}]

for (var inputField of inputFields) {
  if (isNumeric.test(inputField.value))
    if (uniqueNumericValues.indexOf(inputField.value) == -1)
      uniqueNumericValues.push(inputField.value);
}
console.log(uniqueNumericValues);
```
