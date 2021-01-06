import axios from "axios";
import dotenv from "dotenv"
import { RefreshableAuthProvider, StaticAuthProvider } from 'twitch-auth';
import { promises as fs } from 'fs';
import { getTokenData } from './file_reader.js'
dotenv.config()

const scopes = "chat:read chat:edit"
const grant_types = ["client_credentials", "authorization_code"]

// Usage: getAccessToken().then((result) => console.log(result.data))
export const getAccessToken = () => {
	return axios({
		method: "get",
		url: `https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${process.env.CODE}&grant_type=${grant_types[1]}&scope=${scopes}&redirect_uri=${process.env.REDIRECT_URL}`
	})
}

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

export const getAuthProvider = async () => {
	const tokenData = await getTokenData()
	const authProvider = await new RefreshableAuthProvider(
	  new StaticAuthProvider(process.env.CLIENT_ID, tokenData.accessToken),
	  {
	    clientSecret,
	    refreshToken: tokenData.refreshToken,
	    expiry: tokenData.expiryTimestamp === null ? null : new Date(tokenData.expiryTimestamp),
	    onRefresh: async ({ accessToken, refreshToken, expiryDate }) => {
	      const newTokenData = {
	        accessToken,
	        refreshToken,
	        expiryTimestamp: expiryDate === null ? null : expiryDate.getTime()
	      };
	      await fs.writeFile('./tokens.json', JSON.stringify(newTokenData, null, 4), 'UTF-8')
	    }
	  }
	);
	return authProvider
}
