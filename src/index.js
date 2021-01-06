import axios from "axios"
import { StaticAuthProvider } from "twitch-auth"
import { ChatClient } from "twitch-chat-client"
import dotenv from "dotenv"
import moment from "moment"
import { getAuthProvider } from "./authorization_helper.js"
import { getStreamerData } from "./command_service.js"
import { writeToFile } from "./file_writer.js"
dotenv.config()

const main = async (channels) => {
	console.log("channels", channels)
	try {
		// const auth = new StaticAuthProvider(process.env.CLIENT_ID, process.env.ACCESS_TOKEN)
		const auth = await getAuthProvider()  
		const chatClient = new ChatClient(auth, { channels: channels })
		await chatClient.connect()
		console.log("nick:", chatClient.currentNick)

		chatClient.onMessage((channel, user, message) => {
			const msg = `[${channel}][${moment().format("HH:mm:ss")}]${user}:${message}\n`
			console.log(msg.slice(0,-1))
			writeToFile(channel, msg)
		});
	} catch (e) {
		console.error(e)
	}
}

const args = process.argv
if (args.length >= 2) {
	console.log("args[3]", args[3])
	if (args[2] === "chat") { 
		main(args.slice(3))
	} else if (args[2] === "streamer") {
		getStreamerData(args[3])
	} 
} else {
	console.error("not enough parameters")
}

// console.log("end")

