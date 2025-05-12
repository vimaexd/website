<script lang="ts">
	import type { IResolvedRelease } from '@mae/lib/discog/types';
	import { maeSpring } from '@mae/lib/misc/anim';
	import { animate, createSpring, stagger, waapi } from 'animejs';

	let el: HTMLElement;

	let { release } = $props<{ release: IResolvedRelease }>();
	let isExpanded = $state(false);
	let hasAnimatedIn = false;
</script>

<a href={'/music/release/' + release.slug} class="w-full text-white">
	<div
		class=" bg-vi-700 w-full bg-center bg-cover bg-clip-border rounded-lg hover:bg-[center_center_16rem] transition-all hover:translate-y-0.5"
	>
		<div
			class="px-4 py-2 w-full h-full rounded-lg border border-white/25 border-ctp-surface1 transition-all flex items-center gap-4"
		>
			<img src={release.album_art} alt="Cover art" height="48" width="48" class="rounded-md" />
			<div>
				<h2 class="text-lg font-semibold">{release.title}</h2>
				<p class="text-sm">
					{release.type} • {release.tracks.length} track{release.tracks.length > 1 ? 's' : ''} • {release.year}
				</p>
			</div>
		</div>
	</div>
</a>
