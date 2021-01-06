# Twitch tools

## Installation

1. Fill .env
```
CLIENT_ID=
CLIENT_SECRET=
ACCESS_TOKEN=
REDIRECT_URL=
```

  a. Go to https://dev.twitch.tv/console and register app. After that get Client ID and Client Secret. Also enter redirect url, for example http://localhost

  b. Go with the browser:
https://id.twitch.tv/oauth2/authorize?client_id=<client_id>&redirect_uri=<OAuth Redirect URLs>&response_type=token&scope=chat:read+chat:edit

  c. Copy access token from url bar

  d. npm install

2. Fill tokens.json

{
    "accessToken": "",
    "refreshToken": "",
    "expiryTimestamp": 1609966292258
}

  a. Get code

```
GET
https://id.twitch.tv/oauth2/token?client_id=oihypfht1uzrbwmt0lnp5lhr9dktn1&client_secret=ysmdqx8lwf83bu8jsavwdnwy38teqg&code=tkotmd8lvlgnhk0m3b40simaljksfs&grant_type=authorization_code&redirect_uri=http://localhost

```

  b. Get resfresh token by post request (use [postman](https://www.postman.com/) for example)

```
POST
https://id.twitch.tv/oauth2/token?client_id=<client_id>&client_secret=<client_secret>&code=<code>&grant_type=authorization_code&redirect_uri=http://localhost
```

3. npm install

4. mkdir logs

## Usage

get streamer data
```
npm start streamer lirik
```

join chat
```
npm start chat lirik
```

## Additional

https://d-fischer.github.io/twitch-chat-client/docs/basic-usage/getting-started.html
