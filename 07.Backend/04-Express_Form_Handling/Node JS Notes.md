
* Express Form Validator ==>
============================

"npm install express-validator @types/express-validator"

* For Username Validation ==> 
=============================
body('username').not().isEmpty().withMessage("Username is Required"),

* For Email Validation ==>
==========================
body('email').isEmail().withMessage("Proper Email is Required"),

* For Password Validation ==>
=============================
body('password').isStrongPassword({minLength : 6}).withMessage("Strong Password is Required"),


* For Decript Password ==> " npm i bcryptjs @types/bcryptjs "



* Gmai Avatar ==> " npm install gravatar @types/gravatar "
================  

* Seperate Variable Dependencies (.env file) ==>
================================================
 " npm install dotenv @types/dotenv "


* Log Middleware ==>  Its tracks every request b/w user and server 
====================