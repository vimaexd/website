<script lang="ts">
	import type { Snippet } from 'svelte';

	let { href, tooltipContent, tooltipId, children } = $props<{
		href: string;
		tooltipContent: string;
		tooltipId: string;
		children: Snippet;
	}>();
</script>

<a
	{href}
	data-tooltip-content={tooltipContent}
	data-tooltip-id={tooltipId}
	class="text-white"
	aria-label={tooltipContent}
>
	<!-- <Tooltip id={tooltipId} style={{ fontSize: '0.875rem', lineHeight: '1.25rem' }} /> -->
	<div
		class={`hover:scale-110 hover:text-ctp-mauve transition-all duration-75 active:scale-90 w-[36px] h-[40.5px] flex justify-center`}
	>
		{@render children()}
	</div>
</a>
