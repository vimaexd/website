<script lang="ts">
	let {
		href = null,
		src,
		alt
	} = $props<{
		href?: string;
		src: string;
		alt: string;
	}>();
</script>

<!-- TODO: deduplicate -->

{#if href != null}
	<a {href}>
		<img
			{src}
			width={88}
			height={31}
			alt={alt || 'Web badge'}
			style="image-rendering: pixelated;"
			class="hover:-translate-x-1 hover:-translate-y-1 transition-transform"
		/>
	</a>
{:else}
	<img
		{src}
		width={88}
		height={31}
		alt={alt || 'Web badge'}
		style="image-rendering: pixelated;"
		class="hover:-translate-x-1 hover:-translate-y-1 transition-transform"
	/>
{/if}
