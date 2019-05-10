XSS occurs when the attacker injects executable JavaScript code into the HTML response.

To mitigate these attacks, you have to set flags on the set-cookie HTTP header:

HttpOnly - this attribute is used to help prevent attacks such as cross-site scripting since it does not allow the cookie to be accessed via JavaScript.
secure - this attribute tells the browser to only send the cookie if the request is being sent over HTTPS.
So it would look something like this: Set-Cookie: sid=<cookie-value>; HttpOnly. If you are using Express, with express-cookie session, it is working by default.