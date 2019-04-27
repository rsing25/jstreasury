Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute 
unwanted actions on a web application in which they're currently authenticated.


Fortunately, this request will not be executed by modern web browsers thanks to same-origin policy restrictions. 
This restriction is enabled by default 

UNLESS the target web site explicitly opens up cross-origin requests from the attacker's (or everyone's) origin by using CORS with the following header:
Access-Control-Allow-Origin: *



Cookie-to-header token
Web applications that use JavaScript for the majority of their operations may use an anti-CSRF technique that relies on same-origin policy:

On login, the web application sets a cookie containing a random token that remains the same for the whole user session
Set-Cookie: Csrf-token=i8XNjC4b8KVok4uw5RftR38Wgp2BFwql; expires=Thu, 23-Jul-2015 10:25:33 GMT; Max-Age=31449600; Path=/
JavaScript operating on the client side reads its value and copies it into a custom HTTP header sent with each transactional request
X-Csrf-Token: i8XNjC4b8KVok4uw5RftR38Wgp2BFwql



Access-Control-Allow-Origin: www.example.com
would tell the browser to allow cross-origin requests from www.example.com.

Access-Control-Allow-Origin: *
tells the browser to allow all cross-origin requests to that resource.

========================================================================================================

In computing, the same-origin policy is an important concept in the web application security model. Under the policy, 
a web browser permits scripts contained in a first web page to access data in a second web page

Overview
Cross-Site Scripting (XSS) attacks are a type of injection, 
in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker 
uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. 
Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application
 uses input from a user within the output it generates without validating or encoding it.

Preventing XSS: 3 Ways to Keep Cross-Site Scripting Out of Your Apps


 1. Escaping
 2. Validating Input
 3. Sanitizing Sanitizing data is a strong defense

