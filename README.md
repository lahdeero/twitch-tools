

## Installation

Fill .env
```
CLIENT_ID=
ACCESS_TOKEN=
REDIRECT_URL=
```

1. Go to https://dev.twitch.tv/console and register app and get Client ID, normal redirect url is http://localhost

2. Go with the browser:
https://id.twitch.tv/oauth2/authorize?client_id=<client_id>&redirect_uri=<OAuth Redirect URLs>&response_type=token&scope=chat:read+chat:edit

3. Copy access token from url bar

## Usage

get streamer data
```
npm start streamer lirik
```

join chat
```
npm start chat lirik
```

