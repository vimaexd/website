<script lang="ts">
	import { animate, createSpring } from 'animejs';
	import Button from '@mae/components/ui/Button.svelte';
	import LogoText from '@mae/components/brand/LogoText.svelte';
	import { version, dev } from '$app/environment';
	import { debounce } from '$lib/misc/utils';

	// TODO MAKE STARS

	let bar: HTMLElement;

	let isTransparentPage = false; // TODO: STORE
	let menuVisible = $state(false); // TODO: IMPLEMENT
	let stars = $state<number[][]>([]);
	let starsDone = $state(false);

	const _generateStars = () => {
		console.log('✨');
		if (!bar) return;
		const width = bar.offsetWidth;
		const height = bar.offsetHeight;

		let newStars = [];
		for (let i = 0; i < 8; i++) {
			let star = Math.floor(Math.random() * 4);
			let randX = Math.floor(Math.random() * (width - 16)) + 0;
			let randY = Math.floor(Math.random() * (height - 16));
			newStars.push([randX, randY, star]);
		}
		stars = newStars;
	};

	const generateStars = debounce(() => {
		_generateStars();
	}, 50);

	$effect(() => {
		if (!starsDone) {
			window.addEventListener('resize', () => {
				generateStars();
			});
			generateStars();
		}
	});
</script>

<nav
	class={`w-full lg:h-32 flex justify-center z-20 sticky ${isTransparentPage ? 'bg-transparent' : 'bg-vi-900'}`}
	bind:this={bar}
>
	<div
		class="absolute top-0 left-0 lg:w-[1024px] w-full opacity-60 z-0 text-clip"
		aria-hidden={true}
	>
		{#each stars as star, i}
			<img
				src={`/assets/stars/star_${star[2]}.png`}
				width={16}
				height={16}
				alt="star"
				class={'absolute ' + `anim_star`}
				style={`top: ${star[1]}px; left: ${star[0]}px; image-rendering: pixelated;`}
			/>
		{/each}
	</div>
	<div
		class="w-[1024px] lg:px-0 h-full flex lg:flex-row flex-col lg:items-center py-4 lg:py-8 gap-4 lg:gap-0 z-10 md:px-8 px-4"
	>
		<div class="flex flex-row items-center lg:justify-center justify-between space-x-4">
			<div>
				<LogoText />
				<h2 class="text-xs font-mono">
					v{version}
					{#if dev}
						DEV
					{/if}
				</h2>
			</div>
			<div class="ml-auto lg:hidden">
				<i
					class="bx bx-menu bx-md cursor-pointer anim-navbar-hamburger"
					onpointerdown={() => {
						animate('.anim-navbar-hamburger', {
							rotateZ: [0, 180],
							ease: createSpring()
						});
						menuVisible = !menuVisible;
					}}
					role="button"
					tabindex="0"
				></i>
			</div>
		</div>
		<div
			class={`lg:ml-auto lg:flex lg:flex-row flex-col lg:justify-end flex-wrap gap-2 lg:w-8/12 anim-navbar-tray ${menuVisible ? 'flex' : 'hidden'}`}
		>
			<Button text="🏠 Home" href="/" />
			<Button text="📝 Blog" href="/blog" />
			<Button text="📦 Projects" href="/projects" />
			<Button text="🎵 Music" href="/music" />
			<Button text="😀 My OC" href="/oc" />
			<Button text="⌨️ Gear" href="/gear" />
			<Button text="📱 Contact" href="/contact" />
			<Button text="💰 Donate" href="/donate" />
		</div>
	</div>
</nav>
