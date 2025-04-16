<script lang="ts">
	import { page } from '$app/state';
	import { Howl } from 'howler';
	let { className = '', href = null, icon = null, text, onclick = null } = $props();

	const soundClick = new Howl({
		src: ['/assets/sfx/click.wav'],
		volume: 0.2
	});

	const onButtonPress = () => {
		if (onclick) onclick();
		soundClick.play();
	};

	if (onclick) {
		href = null;
	}

	let pathname = $derived(page.url.pathname);
</script>

<a
	{href}
	onclick={onButtonPress}
	class="{pathname == href
		? 'bg-vi-300 text-vi-800 font-semibold'
		: `bg-vi-700 hover:bg-vi-600 text-white`} select-none transition-all duration-75 ease-out py-1 px-4 rounded-md active:scale-90 cursor-pointer {className}"
>
	{#if icon}
		<i class={icon}></i>
	{/if}
	{text}
</a>
