import { trpcServer } from '$lib/server/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {

	//Upstash "tables" are formatted as an array of JSON objects with all the information for building the link tables.
	//Below you will put the key of the JSON object inside of your Upstash db and it will automatically pull it and format it.
	//Check lib/server/routes/_app.ts for more details

	let socialParsed = [
		{
			"id": 0,
			"link": "https://www.instagram.com/pupdad",
			"name": "Instagram"
		},
		{
			"id": 1,
			"link": "https://www.twitter.com/Realpupdad",
			"name": "Twitter"
		},
		{
			"id": 2,
			"link": "https://www.tiktok.com/pupdad",
			"name": "Tiktok"
		},
		{
			"id": 4,
			"link": "https://www.twitch.tv/pupdad",
			"name": "Twitch"
		}
	]
	let linkParsed = [
		{
			"id": "2",
			"link": "https://pup.dad",
			"name": "More from Tyler"
		},
		{
			"id": "1",
			"link": "https://trekker.holdings",
			"name": "Trekker Holdings"
		}
	]

	socialParsed.sort((a, b) => (a.id > b.id) ? 1 : -1);
	linkParsed.sort((a, b) => (a.id > b.id) ? 1 : -1);

	return {
		socialParsed,
		linkParsed,
	};
};
