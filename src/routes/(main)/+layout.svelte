<script lang="ts">
	import Navbar from '@mae/components/core/Navbar.svelte';
	import Footer from '@mae/components/core/Footer.svelte';
	import Nagbar from '@mae/components/alerts/Nagbar.svelte';
	import Button from '@mae/components/ui/Button.svelte';

	let { children } = $props();
</script>

<Nagbar>
	<b>this site is currently unfinished!</b>
	don't expect everything to work quite yet
</Nagbar>

<Navbar />

{@render children()}
<Footer />
