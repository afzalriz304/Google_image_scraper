# KisanNetApp

This is App is send OTP to the register number of Twilio Account.

This App Use Twilio Api integrated with NodeJS.
--------------------------------------------------------------------------
To Run This App you must have to following---


NodeJS.
NodeJs modules
1.express	-	for using Express
2.twilio	-	twilio api
3.body-parser	-	parsing File Data
4.fs		-	File Reading
5.Contact.txt	-	File Having JSON DATA
6.Angular.js	-	Angular.js 

Disable Chrome Web Security

----------------------------------------------------------------------------
About App--

This App is Having two Tabs---
1. Send Message.
2. Show Message Report.

In Send Message we have the Number with send Message button.
When we click on send Message Button A model Appears in which we have random 6 digit Number(OTP) generated on send Click a Angular Ajax call Hit to the msg.js Node server File.
OTP will be send to the Number. After that JSON file is Modified by NodeJs using fs module.
on Send message Tab we are having an add Contact Button which is used to add the module

In Show report we are showing the data according to the Date in Descending order of sending OTP.

------------------------------------------------------------------------------

TO Run App---

Run MSG.js using nodeJs
node MSG.js

Run index.html


--------------------------------
Regards
Mohammad Afzal Rizvi



