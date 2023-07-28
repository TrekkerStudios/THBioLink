<script lang="ts">
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));

	export let data;
	export let socials = data.socialParsed;
	export let links = data.linkParsed;

	import { Avatar } from '@skeletonlabs/skeleton';

	import { slide, fade } from 'svelte/transition';
	import Icon from '$lib/components/Icon.svelte';
	import Link from '$lib/components/Link.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main class="flex w-screen flex-col items-center justify-center px-5 py-7">
	{#if ready}
		<div in:fade={{ delay: 250, duration: 700 }}>
			<a href="/">
				<Avatar
					src="images/profile.jpg"
					class="w-64 w-fit transition hover:scale-105 hover:duration-300 hover:ease-in-out"
					rounded="rounded-full"
					border="border-4 border-surface-300-600-token hover:!border-primary-500"
					cursor="cursor-pointer"
					initials="TB"
				/>
			</a>
		</div>
	{/if}

	<div class="pt-5" />

	{#if ready}
		<div
			class="grid w-10/12 grid-cols-1 justify-center gap-7 sm:w-2/3 lg:w-1/3"
			in:slide={{ delay: 1100, duration: 500 }}
		>
			<div class="grid grid-cols-1 gap-2 text-center">
				<h2 class="h2 font-normal">Tyler</h2>
			</div>

			<div class="logo-cloud grid grid-flow-col gap-1 max-md:grid-rows-2">
				{#each socials as social}
					<Icon link={social.link} name={social.name} />
				{/each}
			</div>

			<div class="logo-cloud grid grid-flow-row gap-0.5">
				{#each links as link}
					<Link link={link.link} name={link.name} />
				{/each}
			</div>
		</div>
	{/if}

	{#if ready}
		<div in:fade={{ delay: 1300, duration: 500 }}>
			<Footer />
		</div>
	{/if}
</main>
