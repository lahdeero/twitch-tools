

## Installation

1. Go to https://dev.twitch.tv/console and register app and get Client ID, normal redirect url is http://localhost

2. Add CLIENT_ID=<Client ID> and APPLICATION_URL=<OAuth Redirect URLs> to .env

3. Go with the browser:
https://id.twitch.tv/oauth2/authorize?client_id=<client_id>&redirect_uri=<OAuth Redirect URLs>&response_type=token&scope=chat:read+chat:edit

4. Copy access token from url bar and save to .env ACCESS_TOKEN=<access token>


## Usage

npm start streamer <streamer>
```
npm start streamer lirik
```

npm start chat <streamer>
```
npm start chat lirik
```

