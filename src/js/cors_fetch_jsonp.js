//https://developers.google.com/web/updates/2015/03/introduction-to-fetch

//Cross-Origin Resource Sharing (CORS) is a W3C spec that allows cross-domain communication from the browser.

/*
cors with GET does NOT require server side code change
cors with POST require Access-Control-Allow-Origin to * on server side" 

response.addHeader( "Access-Control-Allow-Origin", "*" ); 
response.addHeader( "Access-Control-Allow-Methods", "POST" ); 
response.addHeader( "Access-Control-Max-Age", "1000" );
*/

//(1) Making a CORS Request using JSONP (JSON with Padding or JSON-P[1])
      //JSONP (JSON with Padding or JSON-P[1]) is a javascript pattern to request data by loading a <script> tag

      /*  It does this by having the server return JSON data wrapped in a function call (the “padding”) 
      * which can then be interpreted by the browser. This function must be defined in the page evaluating the JSONP response. */

      // 1.a using jquery
  function logResults(json){
    console.log(json);
  }
  $.ajax({
    url: "https://api.github.com/users/jeresig",
    dataType: "jsonp",
    jsonpCallback: "logResults"
  });
    // 1.b using script tag

  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error("Script load error: " + src));
  
      document.head.append(script);
    });
  }

  let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");
  promise.then( (script) => { console.log(`${script.src} is loaded!`) }, (error) => {console.log(`Error: ${error.message}`)} );

  
// (2) Making a CORS Request using XMLHttpRequest
  /**
   * In order for this to work, the server must also enable credentials 
   * by setting the Access-Control-Allow-Credentials response header to “true”. See the server section for details.
  Access-Control-Allow-Credentials: true

  */
  //In XMLHttpRequest would need two listeners to be set to handle the success and error cases and a call to open() and send().

  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.onerror = reqError;
  oReq.open('get', './api/some.json', true);
  oReq.send();

  function reqListener() {
    var data = JSON.parse(this.responseText);
    console.log(data);
  }
  
  function reqError(err) {
    console.log('Fetch Error :-S', err);
  }

// (3)  Making a CORS Request using fetch
  fetch('./api/some.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    //err.message
    console.log('Fetch Error :-S', err.message);
  });

  /**o define the mode, add an options object as the second parameter in the fetch request and define the mode in that object
   *  1) same-origin      only succeeds for requests for assets on the same origin, all other requests will reject.
      2) cors       will allow requests for assets on the same-origin and other origins which return the appropriate CORs headers.
      3) cors-with-forced-preflight       will always perform a preflight check before making the actual request.
      4) no-cors      is intended to make requests to other origins that do not have CORS headers and result in an opaque response,
                      but as stated, this isn't possible in the window global scope at the moment.

   */
  fetch('http://some-site.com/cors-enabled/some.json', {mode: 'cors'})
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log('Request successful', text);
  })
  .catch(function(error) {
    log('Request failed', error)
  });

    // Chaining Promises
    /** One of the great features of promises is the ability to chain them together. For fetch, this allows you to share logic across fetch requests.  */

    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }
    
    function json(response) {
      return response.json()
    }
    
    fetch('users.json', {mode: 'cors'})
      .then(status)
      .then(json)
      .then(function(data) {
        console.log('Request succeeded with JSON response', data);
      }).catch(function(error) {
        console.log('Request failed', error);
        console.log('Request failed', error.message);

      });

      //POST Request
      fetch(url, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'foo=bar&lorem=ipsum'
      })
      .then(json)
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });

      //Sending Credentials with a Fetch Request
      //Should you want to make a fetch request with credentials such as cookies, 
      //you should set the credentials of the request to "include".

      fetch(url, {
        credentials: 'include'
      })

      //The json() method of the Body mixin takes a Response stream and reads it to completion. 
      //It returns a promise that resolves with the result of parsing the body text as JSON.

      response.json().then(function(data) {
        // do something with your data
      });

      //The text() method of the Body mixin takes a Response stream and reads it to completion. 
      //It returns a promise that resolves with a USVString object (text). The response is always decoded using UTF-8.

      response.text().then(function (text) {
        // do something with the text response 
      });

