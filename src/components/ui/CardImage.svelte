<script lang="ts">
	import type { Snippet } from 'svelte';

	let { image, title, description, children } = $props<{
		image: string;
		title: string;
		description?: string;
		children: Snippet;
	}>();
</script>

<div class="relative">
	<div
		class="bg-slate-700 w-full rounded-md h-52
      min-h-max flex flex-col justify-end bg-cover shadow-xl flex-grow-0
      anim-projects backface-hidden translate-z-0 progressive-blur progressive-dim"
	>
		<img
			src={image}
			alt={'Background image'}
			class="rounded-lg w-full h-full object-cover object-top absolute"
		/>
		<div class="p-4 space-y-1 z-10">
			<h3 class="font-bold text-lg shadow-beeg">{title}</h3>
			<p class="leading-5 text-sm pb-2 shadow-beeg">
				{description}
			</p>
			<div class="flex mt-2 w-auto gap-2">
				{@render children()}
			</div>
		</div>
	</div>
</div>
