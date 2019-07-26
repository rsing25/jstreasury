What's the difference between these three HTML tags?

```html

<script src="library.js"></script>
<script src="library.js" async></script>
<script src="library.js" defer></script>
```


The async attribute is used to indicate to the browser that the script file can be executed asynchronously.


The defer attribute tells the browser to only execute the script file once the HTML document has been fully parsed.