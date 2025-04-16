<script lang="ts">
	import fakeAds from '@mae/data/fakeAds.json';
	import { fakeAdHideCount } from '@mae/store/fakeAdHideCount';

	let visible = $state(true);

	const toggleFakeAds = (e: Event) => {
		e.preventDefault();

		visible = !visible;

		if (!visible || $fakeAdHideCount > 0) {
			fakeAdHideCount.set($fakeAdHideCount + 1);
		}
	};

	const index = Math.floor(Math.random() * fakeAds.list.length);
	const ad = fakeAds.list[index];
</script>

{#if visible}
	<div>
		{#if ad.filename.endsWith('.webm')}
			<video width={288} controls={false} muted={true} autoPlay={true} loop={true}>
				<source src={`/assets/fakeads/${ad.filename}`} type="video/webm" />
			</video>
		{:else}
			<img
				src={`/assets/fakeads/${ad.filename}`}
				alt="A fake advertisement"
				width="288"
				height="120"
			/>
		{/if}
		<div class="flex justify-between mt-1">
			<p class="text-xs text-neutral-400">
				fake ad by {ad.author}
			</p>
			<button
				class="text-xs text-neutral-400 hover:text-white hover:underline cursor-pointer"
				onclick={toggleFakeAds}
				tabindex="0"
			>
				hide
			</button>
		</div>
	</div>
{:else}
	<div class="flex justify-between">
		<p class="text-xs text-neutral-600">fake ads are hidden</p>
		<button
			class="text-xs text-neutral-600 hover:text-white hover:underline cursor-pointer"
			onclick={toggleFakeAds}
			tabindex="0"
		>
			show
		</button>
	</div>
{/if}
