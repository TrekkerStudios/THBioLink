import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

//Creates redis connection
//Check lib/util/redis.ts for more details
import { redis } from '$lib/util/redis';

export const appRouter = router({
	greeting: publicProcedure
		.input(
			z.object({
				name: z.string().optional(),
			})
		)
		.query(({ input }) => {
			return `Welcome to ${input.name ?? 'the world'}!`;
		}),
	fetchKV: publicProcedure
		.input(
			z.object({
				key: z.string()
			})
		)
		.query(async ({ input }) => {
			//Assumes all of your "tables" are at the root of your Upstash db, change '$' to '$.<whatever>' if it's nested somewhere
			const table = await redis.json.get(`${input.key}`, `$`);
			return table[0];
		}),
});

export type AppRouter = typeof appRouter;
