script.js:

```javascript
document.addEventListener("DOMContentLoaded", function(event) {
  var items = document.querySelectorAll('.item');
  for (var i = 0; i < items.length; i++) {
    var element = items[i];
    element.addEventListener('click', function() {
      console.log('You clicked on button # ' + i);
    });
  }
});
```

index.html:

```html
<!doctype html>
<html lang=en>
<head>
    <meta charset=utf-8>
    <title>Test</title>
    <script src="script.js"></script>
</head>
<body>
    <button class="item">A</button>
    <button class="item">B</button>
    <button class="item">C</button>
    <button class="item">D</button>
    <button class="item">E</button>
</body>
