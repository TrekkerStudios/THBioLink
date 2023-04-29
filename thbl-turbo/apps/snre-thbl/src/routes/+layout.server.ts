import { trpc } from '$lib/trpc';
import type { LayoutServerLoad } from './$types';
/** @type {import('@sveltejs/adapter-vercel').Config} */

export const config = {
	runtime: 'nodejs18.x'
  };

export const load: LayoutServerLoad = async (event) => {
	return {
		trpc: await trpc.ssr(event),
	};
};