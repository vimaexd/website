<script lang="ts">
	import type { IResolvedRelease } from '@mae/lib/discog/types';
	import { animate, createSpring, stagger, waapi } from 'animejs';

	let el: HTMLElement;

	let { release } = $props<{ release: IResolvedRelease }>();
	let isExpanded = $state(false);
	let hasAnimatedIn = false;

	const popoverId = `musicpopover-${release.slug}`;

	$effect(() => {
		if (isExpanded) {
			waapi.animate(el, {
				translateX: [-10, 0],
				opacity: [0, 1],
				ease: 'outExpo',
				duration: 200
			});
			waapi.animate([el.getElementsByTagName('h3')[0], el.getElementsByTagName('p')], {
				translateX: [-5, 0],
				duration: 300,
				ease: createSpring(),
				delay: stagger(50)
			});
		}
	});

	function exit() {
		animate(el, {
			translateX: [0, -10],
			opacity: [1, 0],
			ease: 'outExpo',
			duration: 100,
			complete() {
				isExpanded = false;
				hasAnimatedIn = false;
			}
		});
	}
</script>

<div class="flex flex-col items-center gap-2 cursor-pointer">
	<div class="flex flex-row w-full">
		<a href={'/music/release/' + release.slug}>
			<img
				src={release.album_art}
				width={128}
				height={128}
				alt={'Album art for ' + release.title}
				class={`transition-all ${isExpanded ? 'rounded-tl-lg rounded-bl-lg' : 'rounded-lg'}`}
				onmouseenter={() => (isExpanded = true)}
				onmouseleave={exit}
			/>
		</a>
		{#if isExpanded}
			<div class="relative h-full">
				<div class="absolute h-full">
					<div
						class="h-full bg-[rgba(0,0,0,0.4)] backdrop-blur-xl w-36 py-2 px-4 rounded-tr-lg rounded-br-lg"
						bind:this={el}
					>
						<h3 class="font-bold">{release.title}</h3>
						<p class="text-sm">{release.type}</p>
						<p class="text-sm">
							{release.tracks.length} song{release.tracks.length > 1 ? 's' : ''}
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
	<p
		class={`text-sm tracking-wide transition-all duration-75 ${isExpanded ? '-translate-y-1 opacity-0' : ''}`}
	>
		{release.title}
	</p>
</div>
