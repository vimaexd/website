<script lang="ts">
	import '@mae/assets/fonts/Inter/inter.css';
	import '@mae/css/globals.css';
	import 'boxicons/css/boxicons.min.css';

	let { children } = $props();
</script>

<div class="bg-vi-950 text-vi-50 min-h-screen">
	{@render children()}
</div>
