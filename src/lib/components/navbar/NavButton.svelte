<script lang="ts">
	export let href: string;
</script>

<div class="w-fit px-5 py-3 bg-slate-50 h-fit rounded-md md:mt-5 md:ml-5">
	<a {href}><slot /></a>
</div>
