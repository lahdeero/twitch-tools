import moment from "moment"
import fs from "fs"

export const writeToFile = (channel, msg) => {
	fs.appendFile(`./logs/${channel}-${moment().format("DDMMYYYY")}.txt`, msg, function (err,data) {
	  if (err) {
	    return console.error(err);
	  }
	  // console.log("data", data);
	});
}

