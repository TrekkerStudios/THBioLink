import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { getAll } from '@vercel/edge-config';

export const appRouter = router({
	greeting: publicProcedure
		.input(
			z.object({
				name: z.string().optional(),
			})
		)
		.query(({ input }) => {
			return `Hello, ${input.name ?? 'world'}!`;
		}),
	fetchKv: publicProcedure
		.query(async () => {
			let allItems = await getAll();
			return allItems;
		}),
});

export type AppRouter = typeof appRouter;
