import { trpcServer } from '$lib/server/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {

	//Upstash "tables" are formatted as an array of JSON objects with all the information for building the link tables.
	//Below you will put the key of the JSON object inside of your Upstash db and it will automatically pull it and format it.
	//Check lib/server/routes/_app.ts for more details

	let socialParsed = await trpcServer.fetchKV.ssr({key: '<SOCIALS_UPSTASH_KEY>'}, event);
	let linkParsed = await trpcServer.fetchKV.ssr({key: '<LINKS_UPSTASH_KEY>'}, event);

	socialParsed.sort((a, b) => (a.id > b.id) ? 1 : -1);
	linkParsed.sort((a, b) => (a.id > b.id) ? 1 : -1);

	return {
		socialParsed,
		linkParsed,
	};
};
