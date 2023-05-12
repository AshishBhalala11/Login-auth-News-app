# This appllication has Login, Register functionality for new user and once user is logged in user can see news page which shows latest news.

# Steps to run the Application locally

## For initial set up add .env file in server folder and add below data in it.
- DATABASE_LINK - (add mongodb database link for storing user data)
- PORT = 3000
- ACCESS_TOKEN_KEY - (add secret key to create access token for authorization of the user)
- TOKEN_EXPIRES_IN - (add token expiry time)
- NEWS_API_KEY - (get your personal apikey from 'newsapi.org' and add to get news as JSON data from the librabry called newsapi)
<br><br>

## Step 1: Setup and connect to mongo database
- For this step, mongodb url is required which has to be configured in .env file as described in above step
<br><br>

## Step 2: Run server locally
- Open a new Terminal
```console
    cd server/
    npm install
    npm start
```
### URL for local server access - http://localhost:3000
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

### Following are the browser URLs.
- Register : http://localhost:4200/register
- Login : http://localhost:4200/login
- News Api : http://localhost:4200/news-page
- User can only see the news-page in browser if the user is logged in via UI. 
- news-page is a restricted page for only logged in user to see.

<br><br>

# APIs (required data for APIs)
### Register (Post Api) : http://localhost:3000/api/auth/register
- body= {email, password}

### Login (Post Api) : http://localhost:3000/api/auth/login
- body= {email, password}

### News Api (Get Api) : http://localhost:3000/api/news/feed
- headers= {Authorization: Bearer token}
- For making API call from postman user needs to include correct authorization token in headers to access news api.

### Logout (Get Api) : http://localhost:3000/api/auth/logout
- No requirements