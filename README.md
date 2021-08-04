# Chat-App

**Overview**

* A social app, which allows users to send and receive messages as well as join and/or create chat rooms. 

**Steps to run the app**

Clone this repo locally

* Git clone https://github.com/theEloise888/Chat-App.git.

* Create a free MongoDB account and find the connection string, which will be provided under the option Connect > Connect Your Application.

* In the server folder, find the file "app.js". 

* In the server folder, locate the .env file and add your connection string to the constant DBURL=.

* In the client folder, find the file "scenarioenhanced.js" and uncomment code line 64 and comment out code line 66. 

* To start the app, run node app.js on the Server folder and npm start on the Client folder.

**How to view the offline page**

1. Test and open the app on Chrome.
2. Pull up Chrome's developer tools. 
3. Find the Application settings in Chrome developer tools and check the offline checkbox. 
4. Perform a refresh on the application.

* After these steps, you should see an offline page displayed to you when the app is in offline mode.  

**How to install a Progressive Web App on our Android device**

1. Open the application on Chrome and find the option "Add to Home Screen" on the settings (3 dots) to the right of your Android phone. 

* This will create an icon and add it to your phone, which will allow you to use the application at your convenience. 
