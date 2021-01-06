import { promises as fs } from 'fs';

export const getTokenData = async () => {
	return JSON.parse(await fs.readFile('./tokens.json', 'UTF-8'));
}

