<script>
	const { className = '', text, onClick = null, hideDot = false } = $props();
</script>

<button
	class={`text-sm text-black px-2 py-1 rounded-full w-fit flex items-center gap-2 ${className}`}
	onclick={() => onClick?.()}
>
	{#if !hideDot}
		<div class="w-4 h-4 bg-[rgba(255,255,255,0.5)] float-left rounded-full"></div>
	{/if}
	{text}
</button>
