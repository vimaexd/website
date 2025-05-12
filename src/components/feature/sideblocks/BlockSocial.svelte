<script lang="ts">
	import type { Snippet } from 'svelte';

	let { href, tooltipContent, tooltipId, children } = $props<{
		href: string;
		tooltipContent: string;
		tooltipId: string;
		children: Snippet;
	}>();

	const soundClick = new Howl({
		src: ['/assets/sfx/click.wav'],
		volume: 0.1
	});

	const soundHover = new Howl({
		src: ['/assets/sfx/hover.wav'],
		volume: 0.5
	});

	const onButtonPress = () => {
		soundClick.play();
	};

	const onHover = () => {
		soundHover.rate(Math.floor(Math.random() * 10) - 10);
		soundHover.play();
	};
</script>

<a
	{href}
	data-tooltip-content={tooltipContent}
	data-tooltip-id={tooltipId}
	class="text-white"
	aria-label={tooltipContent}
	onmouseenter={onHover}
	onclick={onButtonPress}
>
	<!-- <Tooltip id={tooltipId} style={{ fontSize: '0.875rem', lineHeight: '1.25rem' }} /> -->
	<div
		class={`hover:scale-110 duration-75 hover:text-ctp-mauve transition-all duration-75 active:scale-90 w-[36px] h-[40.5px] flex justify-center`}
	>
		{@render children()}
	</div>
</a>
