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
- News Api : http://localhost:4200/news-page
<br><br>

# APIs (required data for APIs)

### Login (Post Api) : http://localhost:4200/login
- body= {email, password}

### Register (Post Api) : http://localhost:4200/register
- body= {email, password}

### News Api (Get Api) : http://localhost:4200/news-page
- headers= {Authorization: Bearer token}
- User can only see the news page in browser if user is logged in via UI as it's restricted page for only logged in user.
- For making API call from postman user needs to include correct authorization token in headers to access news api.