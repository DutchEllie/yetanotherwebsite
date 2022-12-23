<script>
  import "../app.css";
  import Navbar from "$lib/components/navbar/Navbar.svelte";
</script>

<!-- Does background and navbar and such -->
<div class="min-h-screen w-full bg-gradient-to-br from-slate-900 to-blue-900">
  <Navbar/>
  <slot />
</div>