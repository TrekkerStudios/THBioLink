<script lang="ts">
	export let link: string;
	export let name: string;
</script>

<a
	class="logo-item max-h-fit text-center"
	href={link}
	target="_blank"
	rel="noopener noreferrer"
>
	<span class="mx-2 transition">{name}</span>
</a>

<style>
	a:hover > span {
		transform: scale(1.1);
		transition-duration: 300ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
