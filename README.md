# This appllication has Login, Register functionality for new user and once user is logged in user can see news page which shows latest news.

# Steps to run the Application locally

## For initial set up add .env file in server folder and add below data in it.
- DATABASE_LINK : this it mongodb database link for storing user data
- PORT = 3000
- ACCESS_TOKEN_KEY : to create acces token for authorization of the user 
- TOKEN_EXPIRES_IN : token expiry time
- NEWS_API_KEY : this is apikey for getting news data from a librabry called newsapi
<br><br>

## Step 1: Setup and connect to mongo database
- for this step mongodb url is required which has to be configured in .env file
<br><br>

## Step 2: Run server locally
- Open a new Terminal
```console
    cd server/
    npm install
    npm start
```
<br>

## Step 3: Run UI locally
- Open a new Terminal
```console
    cd client/
    npm install
    ng serve
```
<br>

### URL for local development instance after above setup is done : http://localhost:4200/
<br>

### Following are the URLs for Login, Registering the new user and news
- Login : http://localhost:4200/login
- Register : http://localhost:4200/register
- News page : http://localhost:4200/news-page

- User can only see the news page in browser if user is logged in via UI.
- In case of postman user needs to included correct authorization token in headers while making the api call to access news page api.