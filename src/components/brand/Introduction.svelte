<script>
	import { animate, stagger, createTimeline, createSpring, waapi } from 'animejs';
	import Chip from '@mae/components/ui/Chip.svelte';
	import { onMount } from 'svelte';

	import ImgMaeWave from '@mae/assets/img/maewave.png';

	onMount(() => {
		let spring = createSpring({ mass: 1, stiffness: 80, damping: 10, velocity: 0 });
		waapi.animate('[data-anim="initslide"]', {
			opacity: [0, 1],
			duration: 1000,
			translateX: [-6, 0],
			delay: stagger(50)
		});

		const tl = createTimeline({
			delay: stagger(20)
		});

		tl.add('[data-anim="goober"]', {
			translateY: [-5, 5],
			rotateX: [-2, 0],
			ease: 'inExpo',
			opacity: [0, 1],
			duration: 200
		}).add('[data-anim="goober"]', {
			scaleY: 1,
			scaleX: 1,
			translateY: 0,
			ease: 'outExpo',
			duration: 200
		});

		animate('[data-anim="tags"] div', {
			translateY: [-20, 0],
			easing: 'outExpo',
			opacity: [0, 1],
			delay: stagger(200)
		});
	});
</script>

<div class="flex flex-col my-16">
	<div class="relative">
		<div
			class="absolute left-1/2 -translate-x-1/2 w-1/3 h-24 bg-purple-500 blur-3xl opacity-80 z-0"
		></div>
	</div>
	<h1 class="text-6xl font-bold tracking-tight text-center z-10" data-anim="goober">
		<span class="inline-block mr-4">
			<img src={ImgMaeWave} width={52} height={52} alt={"A drawing of Mae's OC waving"} />
		</span>
		hiii! i'm vimae
	</h1>
	<p class="text-center text-lg z-10" data-anim="goober">
		i code, make music and live on the internet
	</p>

	<div class="flex justify-center gap-2 mt-4 z-10" data-anim="tags">
		<Chip text="🏳️‍⚧️ she • they" hideDot={true} className="bg-vi-800 text-vi-50 select-none shadow-xl"
		></Chip>
		<Chip text=" autistic" hideDot={true} className="bg-vi-800 text-vi-50 select-none shadow-xl"
		></Chip>
		<Chip text="🇬🇧 en-gb" hideDot={true} className="bg-vi-800 text-vi-50 select-none shadow-xl"
		></Chip>
	</div>
</div>
