Let's say we're running this code on www.mysite.com:

```javascript
function search(urlencodedQuery) {
  fetch('http://www.apidomain.com/search', {
      method: 'post',
      headers: { 
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: 'query=' + urlencodedQuery,
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(text) {
      console.log('Success!', text);
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
}
```
