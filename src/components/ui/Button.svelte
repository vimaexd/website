<script lang="ts">
	import { page } from '$app/state';
	import { Howl } from 'howler';
	let {
		className = '',
		href = null,
		icon = null,
		text,
		onclick = null,
		blankStyle = false
	} = $props();

	const soundClick = new Howl({
		src: ['/assets/sfx/click.wav'],
		volume: 0.1
	});

	const soundHover = new Howl({
		src: ['/assets/sfx/hover.wav'],
		volume: 0.5
	});

	const onButtonPress = () => {
		if (onclick) onclick();
		soundClick.play();
	};

	const onHover = () => {
		soundHover.rate(Math.floor(Math.random() * 10) - 10);
		soundHover.play();
	};

	if (onclick) {
		href = null;
	}
	let pathname = $derived(page.url.pathname);

	let styleClasses = $derived.by(() => {
		if (blankStyle !== false) {
			return '';
		} else if (pathname == href) {
			return 'bg-vi-300 text-vi-800 font-semibold';
		} else {
			return 'bg-vi-700 hover:bg-vi-600 text-white';
		}
	});
</script>

<a
	{href}
	onclick={onButtonPress}
	onmouseover={onHover}
	onfocus={onHover}
	class="{styleClasses} select-none transition-all duration-75 ease-out py-1 px-4 rounded-md active:scale-90 cursor-pointer {className}"
>
	{#if icon}
		<i class={icon}></i>
	{/if}
	{text}
</a>
