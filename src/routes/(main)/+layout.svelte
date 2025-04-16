<script lang="ts">
	import Navbar from '@mae/components/core/Navbar.svelte';
	import Footer from '@mae/components/core/Footer.svelte';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
