# GMAIL MANAGER APP
This is a full stack app for responding to your gmail mailbox while you are out on vacation.

1. Check for new emails in a giver user's gmail mailbox. ( Login using Google Account)
2. App sends a reply automatically to threads threads with no prior replies.
3. App adds a custom 'Me_On_Vacation' label to email and move email to the label.

4. repeat sequence of 1-3 in random intervals of 45 to 120 seconds.

## Scripts
### `npm run start_frontend`
Runs the frontend server. Open [http://localhost:8000] to view it in your browser.

### `npm run start_backend`
Runs the backend server. Open [http://localhost:5000] to use it in your project.


## File Tree
```
📦BackEnd
 ┣ 📂routes
 ┃ ┗ 📜routes   //main computations and GMAIL API intergration 
 ┗ 📜server     //Backend server file
📦frontEnd
 ┣ 📂views
 ┃ ┗ 📜login.ejs    // layout structure and responsive component.
 ┗ 📜app        //Frontend entry point file.
```

## Libraries and Technologies used

### [Googleapis](https://www.npmjs.com/package/googleapis) for [Gmail API](https://developers.google.com/gmail/api/guides)
- It is a Node.js client library for using Google APIs. Support for authorization and authentication with OAuth 2.0, API Keys and JWT tokens is included. 
- Used in this project for using GMAIL API and all related methods to 
    
    * [Get list of all unread messages](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/list)
    * [Create and send reply](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/send)    
    * [Create and add customized labels ](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/modify)
    * [Fetch all messages in a conversation](https://developers.google.com/gmail/api/reference/rest/v1/users.threads/get). Overview on [threads](https://developers.google.com/gmail/api/reference/rest/v1/users.threads)

### Implementing "Login with Google"

#### [On Frontend: Google Integration services](https://developers.google.com/identity/gsi/web/guides/overview)
* I have implemented Point 4 and 5 from these [integration docs](https://developers.google.com/identity/gsi/web/guides/integrate) for google sign in on my app.
* Callback function handleAuth is used to handle credential responses. Make yours [here](https://developers.google.com/identity/gsi/web/tools/configurator)

* [Read more](https://developers.google.com/identity/sign-in/web/sign-in)

#### [On Backend : OAuth2 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2)

-  OAuth2 client allows you to [retrieve an access token](https://www.npmjs.com/package/googleapis#retrieve-access-token), refresh it, and retry the request seamlessly. [Documentation here](https://www.npmjs.com/package/googleapis#oauth2-client)


### Basic Client-Server architecture between Client(Frontend) and Server(Backend)

## Improvement scope in this Code
- Scope to add testing of the app in future.
- Creating just one application and using files to store and retrieve the credential token is another approach but in large scale application using files with data storage is not preferred for bigger amounts of data.  
- Better error handling of login or authorization errors and inform users on frontend to retry login.
- Take user input on frontend about what label they want on their replies if needed.
- User Sign out should be implemented and it must stops setInterval at the backend when trigerred.
- App backend crashes sometimes in case of large number of unread emails on user account, this should be handled for efficiently.

## Author
- [Aakash Mishra](https://portfolio-aakash28.netlify.app/)
- [My Github ](https://github.com/Aakash-mishra2)
