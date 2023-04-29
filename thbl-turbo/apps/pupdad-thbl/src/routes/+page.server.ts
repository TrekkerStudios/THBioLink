import { trpc } from '$lib/trpc';
import type { PageServerLoad } from './$types';
import { filterKeys, parsePlain, parseIcon } from 'kv-parse';

export const load: PageServerLoad = async (event) => {

  const kvReturn = JSON.stringify(await trpc.fetchKv.ssr(event));
  const parsedKv = JSON.parse(await kvReturn);

  let socialFilter = await filterKeys(parsedKv, "pupdad_social");
  let linkFilter = await filterKeys(parsedKv, "pupdad_link");

  let socialParsed = await parseIcon(parsedKv, socialFilter);
  let linkParsed = await parsePlain(parsedKv, linkFilter);

  return {
    socialParsed,
    linkParsed
  }

};