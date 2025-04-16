<script lang="ts">
	import Releases from '@mae/data/discography-vimae.json';
	import ChipButton from '../../ui/ChipButton.svelte';

	let latest = Releases.releases[0];
</script>

<a href={`/music/release/${latest.slug}`} class="text-white">
	<div
		class="w-full bg-vi-800 rounded-lg bg-center bg-cover"
		style={`background-image: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 100%), url(${latest.album_art});`}
	>
		<div class="w-full h-full p-4 backdrop-blur-xl rounded-lg space-y-2">
			<h2 class="text-xs font-semibold tracking-widest uppercase">Latest release</h2>
			<div class="flex flex-row gap-4">
				<img src={latest.album_art} width={64} height={64} alt={'Cover art'} class="rounded-lg" />
				<div class="flex flex-col justify-center">
					<h3 class="text-2xl font-bold tracking-tight align-bottom -mt-2">{latest.title}</h3>
					<p class="text-xs">{latest.tracks.length} tracks • {latest.year}</p>
				</div>
			</div>
		</div>
		<div class="relative">
			<div class="absolute bottom-2 right-3">
				<i class="bx bx-sm bx-link-external"></i>
			</div>
		</div>
	</div>
</a>
