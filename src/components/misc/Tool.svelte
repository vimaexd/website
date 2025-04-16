<!-- Tool.svelte -->
<script lang="ts">
	import type { Snippet } from 'svelte';

	// import Tooltip from './Tooltip.svelte';

	//TODO: get tooltips working

	const {
		name,
		children,
		color,
		useBoxShadow = false
	} = $props<{
		name: string;
		color: string;
		useBoxShadow?: boolean;
		children: Snippet;
	}>();

	const style = `background: ${color}20`;
</script>

<div
	class="h-24 flex items-center justify-center mae-tool rounded-lg border-2 border-white/10"
	{style}
>
	<!-- <Tooltip id={`frontpage-tool-${name}`} /> -->
	<div data-tooltip-id={`frontpage-tool-${name}`} data-tooltip-content={name}>
		{@render children()}
	</div>
</div>
