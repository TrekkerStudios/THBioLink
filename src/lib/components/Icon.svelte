<script lang="ts">
	export let link: string;
	export let name: string;
</script>

<a
	class="logo-item max-h-16"
	href={link}
	target="_blank"
	rel="noopener noreferrer"
>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img
		height="24"
		width="24"
		src="https://cdn.simpleicons.org/{name}/white"
		class="mx-2 transition"
	/>
</a>

<style>
	a:hover > img {
		transform: scale(1.25);
		transition-duration: 300ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
