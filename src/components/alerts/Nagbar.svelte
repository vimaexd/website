<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{
		children: Snippet;
	}>();
</script>

<div class="bg-gradient-to-r from-vi-400 to-vi-300 py-2 text-center sticky z-20">
	{@render children()}
</div>
