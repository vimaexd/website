<script lang="ts">
	import Block from './Block.svelte';
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';

	let time = $state(dayjs().format('HH:mm:ss'));
	onMount(() => {
		setTimeout(() => {
			time = dayjs().format('HH:mm:ss');
		}, 1000);
	});
</script>

<Block title="🕒 clock">
	<div class="text-sm flex flex-col items-center">
		<span class="font-semibold text-3xl font-mono">{time}</span>
		London, UK
	</div>
</Block>
