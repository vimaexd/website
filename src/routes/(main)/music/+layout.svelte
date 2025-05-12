<script lang="ts">
	let { children } = $props();

	import ImgBandcamp from '@mae/assets/img/logos/bandcamp.png';
	import Button from '@mae/components/ui/Button.svelte';
	import { isTransparentNavbar } from '@mae/store/transparentNavbar';
</script>

<div
	class={`w-full p-2 flex justify-center gap-4 items-center z-20 sticky ${$isTransparentNavbar ? 'bg-[rgba(0,0,0,0.25)]' : 'bg-vi-800'}`}
>
	<div class="flex items-center gap-8 w-full max-w-[1024px]">
		<h2 class="text-2xl font-semibold">🎹</h2>
		<div class="flex gap-4 overflow-x-auto">
			<Button text="💿 Discography" href="/music" />
			<Button text="🎛️ Stems" href="/music/stems" />
		</div>

		<div class="ml-auto">
			<a href="https://vimae.bandcamp.com">
				<img src={ImgBandcamp} width={120} height={20} alt="Bandcamp" />
			</a>
		</div>
	</div>
</div>

{@render children()}
