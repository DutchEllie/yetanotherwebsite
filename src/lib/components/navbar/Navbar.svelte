<script lang="ts">
	import HamburgerMenu from './HamburgerMenu.svelte';
	import NavButton from './NavButton.svelte';

	export let open = false;
</script>

<div class="w-full h-24 p-3 flex">
	<!-- 	<h1 class="hidden md:block text-3xl font-raleway text-zinc-100 self-center">Unnamed website</h1> -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		on:click={() => {
			open = !open;
		}}
		class="md:hidden p-4 space-y-2 h-fit bg-gray-600 rounded shadow"
	>
		<span class="block w-8 h-0.5 bg-gray-100 animate-pulse" />
		<span class="block w-8 h-0.5 bg-gray-100 animate-pulse" />
		<span class="block w-8 h-0.5 bg-gray-100 animate-pulse" />
	</div>
	<div class="hidden md:grid">
		<NavButton href="/">Home</NavButton>
	</div>
</div>

<HamburgerMenu bind:open />
