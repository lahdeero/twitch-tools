import axios from "axios";
import dotenv from "dotenv"

const scopes = "chat:read chat:edit"
const grant_types = ["client_credentials", "authorization_code"]

// Usage: getAccessToken().then((result) => console.log(result.data))
export const getAccessToken = () => {
	return axios({
		method: "get",
		url: `https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.SECRET}&code=${process.env.CODE}&grant_type=${grant_types[1]}&scope=${scopes}&redirect_uri=${process.env.APPLICATION_URL}`
	})
}

