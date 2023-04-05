import { trpc } from '$lib/trpc';
import { fetchPGFunc } from './api/fetchPG';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const fetchedLinks = await fetchPGFunc('links');
  const fetchedSocials = await fetchPGFunc('socials');

	return {
		fetchedLinks,
		fetchedSocials
	};
};