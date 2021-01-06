import axios from "axios"

export const getStreamerData = (nickname) => {
	let promise = axios({
		url: `https://api.twitch.tv/helix/search/channels?query=${nickname}`,
		headers: {
			"Client-ID": process.env.CLIENT_ID, 
			"Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
		}
	})
	
	promise.then((response, reject) => {
		console.log(response.data)
	}).catch(error => console.log(error))
}

