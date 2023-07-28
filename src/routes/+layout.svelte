<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.css';
	
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { LayoutData } from './$types';
	import { trpc } from '$lib/trpc';
	import { AppShell } from '@skeletonlabs/skeleton';

	export let data: LayoutData;

	const queryClient = trpc.hydrateFromServer(data.trpc);
</script>

<QueryClientProvider client={queryClient}>
	<AppShell>
		<slot />
	</AppShell>
</QueryClientProvider>
