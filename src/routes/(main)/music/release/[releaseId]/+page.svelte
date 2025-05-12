<script lang="ts">
	import type { IResolvedRelease } from '@mae/lib/discog/types';
	import type { PageProps } from './$types';
	import Button from '@mae/components/ui/Button.svelte';

	let { data }: PageProps = $props();
	let release = data.release;

	console.log(data.release);
</script>

<div class="overflow-hidden">
	<div class="z-10 sticky flex justify-center my-16 mx-4">
		<div class="lg:w-[1024px] w-full space-y-8 mx-4">
			<div class="flex gap-8">
				<img
					src={release.album_art}
					width={120}
					height={120}
					alt="Cover art"
					class="rounded-lg shadow-xl z-10"
				/>

				<div class="absolute" aria-hidden="true">
					<img
						src={release.album_art}
						width={120}
						height={120}
						alt="Cover art"
						class="rounded-lg shadow-xl scale-100 blur-2xl -z-10 brightness-200 contrast-100 opacity-50 saturate-200"
						aria-hidden="true"
					/>
				</div>
				<div class="flex flex-col justify-end">
					<h1 class="lg:text-7xl text-4xl font-bold">{release.title}</h1>
					<h2 class="align-baseline">
						{release.type} • {release.tracks.length} tracks • {release.year}
					</h2>
				</div>
			</div>
			<div class="flex lg:flex-row flex-col gap-2 mt-8">
				{#if release.links.bandcamp}
					<Button
						text={release.is_free ? 'Free Download' : 'Buy'}
						href={release.links.bandcamp}
						icon={`bx bx-sm mr-2 ${release.is_free ? 'bx-down-arrow-alt' : 'bx-money'}`}
						blankStyle
						className="flex lg:min-w-42 justify-center bg-vi-300 text-vi-900 font-semibold text-center"
					/>
				{/if}

				{#if release.links.spotify}
					<Button
						text="Spotify"
						href={release.links.spotify}
						icon="bx bxl-spotify bx-sm mr-2"
						blankStyle
						className="flex justify-center outline-1 outline-neutral-400 text-center hover:bg-white text-vi-50 hover:text-black bg-transparent"
					/>
				{/if}

				{#if release.links.applemusic}
					<Button
						text="Apple Music"
						href={release.links.applemusic}
						icon="bx bxl-apple bx-sm mr-2"
						blankStyle
						className="flex justify-center outline-1 outline-neutral-400 text-center hover:bg-white text-vi-50 hover:text-black bg-transparent"
					/>
				{/if}

				{#if release.links.soundcloud}
					<Button
						text="SoundCloud"
						href={release.links.soundcloud}
						icon="bx bxl-soundcloud bx-sm mr-2"
						blankStyle
						className="flex justify-center outline-1 outline-neutral-400 text-center hover:bg-white text-vi-50 hover:text-black bg-transparent"
					/>
				{/if}

				{#if release.links.youtube}
					<Button
						text="YouTube"
						href={release.links.youtube}
						icon="bx bxl-youtube bx-sm mr-2"
						blankStyle
						className="flex justify-center outline-1 outline-neutral-400 text-center hover:bg-white text-vi-50 hover:text-black bg-transparent"
					/>
				{/if}
			</div>

			{#if release.artist_comment}
				<div>
					<h3 class="text-lg font-bold">mae's comment</h3>
					<p class="italic">
						"{release.artist_comment}"
					</p>
				</div>
			{/if}

			<table class="w-full">
				<thead>
					<tr>
						<th class="w-4"></th>
						<th>Title</th>
						<th>Artist</th>
						<th>Genre</th>
						<th>Length</th>
					</tr>
				</thead>
				<tbody>
					{#each release.tracks as track, iterator}
						<tr>
							<td>{iterator + 1}.</td>
							<td>{track.name}</td>
							<td>{track.artists.join(', ')}</td>
							<td>{track.genre}</td>
							<td>{track.length}</td>
						</tr>
					{/each}
					<!-- {release.tracks.map((track, iterator) => (
              <tr key={track.id}>
                <td>{iterator + 1}.</td>
                <td>{track.name}</td>
                <td>{track.artists.join(", ")}</td>
                <td>{track.genre}</td>
                <td>{track.length}</td>
              </tr>
            ))} -->
				</tbody>
			</table>
		</div>
	</div>
</div>
