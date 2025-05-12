<script lang="ts">
	import { animate } from 'animejs';
	import { onMount } from 'svelte';

	let text: HTMLHeadingElement;

	onMount(() => {
		animate(text, {
			loop: true,
			alternate: true,
			translateY: [50, 0]
		});
	});
</script>

<center class="bg-gradient-to-r from-vi-500 to-vi-400 z-10 py-16">
	<h1 class="p-8 text-4xl italic" bind:this={text}>work in progress</h1>
</center>
