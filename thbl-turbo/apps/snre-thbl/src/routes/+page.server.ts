import { trpc } from '$lib/trpc';
import type { PageServerLoad } from './$types';
import { filterKeys, parsePlain, parseIcon } from 'kv-parse';

export const load: PageServerLoad = async (event) => {

  const kvReturn = JSON.stringify(await trpc.fetchKv.ssr(event));
  const parsedKv = JSON.parse(await kvReturn);

  let socialFilter = await filterKeys(parsedKv, "snre_social");
  let linkFilter = await filterKeys(parsedKv, "snre_link");
  let musicFilter = await filterKeys(parsedKv, "snre_music");

  let socialParsed = await parseIcon(parsedKv, socialFilter);
  let linkParsed = await parsePlain(parsedKv, linkFilter);
  let musicParsed = await parseIcon(parsedKv, musicFilter);

  return {
    socialParsed,
    linkParsed,
    musicParsed
  }

};