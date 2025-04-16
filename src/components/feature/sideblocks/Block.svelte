<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		children,
		disablePadding = false,
		disableBg = false,
		className = ''
	} = $props<{
		title: string;
		children?: Snippet;
		disablePadding?: boolean;
		disableBg?: boolean;
		className?: string;
	}>();
</script>

<div
	class={`${disableBg ? '' : 'bg-vi-800'} w-full rounded-lg min-w-[288px] shadow-[rgba(255,255,255,0.1) ${className}`}
>
	<div class="flex items-center">
		<span class="font-normal text-sm px-2 py-1">
			{title}
		</span>
	</div>
	{#if children}
		<hr class="border-t-2 border-t-vi-300" />
		<div class={!disablePadding ? 'p-2' : ''}>{@render children()}</div>
	{/if}
</div>
