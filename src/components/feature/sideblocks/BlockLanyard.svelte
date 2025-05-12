<script lang="ts">
	import { useLanyard } from 'svelte-lanyard';
	import Block from './Block.svelte';
	import { onMount } from 'svelte';
	import type { Readable } from 'svelte/store';

	let { id } = $props<{ id: string }>();

	const mediaProxyRegex = /mp:external\/[^\/]*\/(.*)/;

	// why does svelte-lanyard not export its types????
	let data:
		| Readable<{
				discord_status: string;
				spotify?: { album_art_url?: string; track_id: string; song: string; artist: string };
				activities: { application_id: number }[];
		  }>
		| undefined;
	let musicbee;

	onMount(() => {
		//@ts-ignore
		data = useLanyard(id);

		//@ts-ignore
		$data?.subscribe((value) => {
			musicbee = value.activities.find((a: any) => a.application_id === 409394531948298250);
		});
	});
</script>

{#if $data}
	{#if $data.discord_status != 'offline'}
		<Block title="🟢 online"></Block>
	{:else}
		<Block title="🌌 offline"></Block>
	{/if}

	{#if $data.spotify}
		<Block title="🎧 now playing">
			<div class="flex flex-row gap-4 px-2 py-2">
				{#if $data.spotify.album_art_url}
					<img
						src={$data.spotify.album_art_url}
						alt="Album art"
						width={48}
						height={48}
						class="rounded-md shrink-0 h-12 w-12 shadow-md shadow-vi-950/15"
					/>
				{/if}
				<div class="flex flex-col justify-center shrink">
					<a
						href={`https://open.spotify.com/track/${$data.spotify.track_id}`}
						class="text-white hover:underline"
					>
						<h2 class="text-sm font-medium">{$data.spotify.song}</h2>
					</a>
					<h3 class="text-xs">{$data.spotify.artist.replace(/;/g, ',')}</h3>
				</div>
			</div>
		</Block>
	{/if}
{:else}
	<Block title="⏳ connecting"></Block>
{/if}
