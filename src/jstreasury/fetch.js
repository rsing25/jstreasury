/**
 * The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, 
 * such as requests and responses. 
 */

 /**
  * The fetch specification differs from jQuery.ajax() in two main ways:

    The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. 
    Instead, it will resolve normally (with ok status set to false), 
    and it will only reject on network failure or if anything prevented the request from completing.

    By default, fetch won't send or receive any cookies from the server, 
    resulting in unauthenticated requests if the site relies on maintaining a user session 
  */

 fetch('http://example.com/movies.json')
 .then(function(response) {
   return response.json();
 })
 .then(function(myJson) {
   console.log(JSON.stringify(myJson));
 });