<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children } = $props<{
		title: string;
		children?: Snippet;
	}>();
</script>

<div class="space-y-2">
	<h1 class="font-bold text-4xl">
		{title}
	</h1>
	<p class="text-md">
		{#if children}
			{@render children()}
		{/if}
	</p>
</div>
