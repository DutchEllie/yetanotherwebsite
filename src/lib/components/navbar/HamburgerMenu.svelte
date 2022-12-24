<script lang="ts">
	import NavButton from './NavButton.svelte';
	export let open: boolean;
</script>

{#if open}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		on:click={() => {
			open = !open;
		}}
		class="absolute top-0 left-0 w-screen min-h-screen bg-sky-900 z-10"
	>
		<div class="grid grid-cols-1 gap-6 ml-10 mt-20">
			<NavButton href="/">Home</NavButton>
			<NavButton href="/elontracker">Elon Jet</NavButton>
		</div>
	</div>
{/if}
