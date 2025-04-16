<script lang="ts">
	let shown = $state(true);

	let { children } = $props();
</script>

<aside
	class={(shown ? 'min-[670px]:w-72' : '') +
		' mt-8 min-[670px]:flex-col grid min-[670px]:grid-cols-1 grid-cols-2 max-[624px]:grid-cols-1 min gap-4 w-full'}
>
	<div class="flex justify-between items-center bg-vi-800 px-3 py-2 rounded-lg">
		<button
			onclick={() => (shown = !shown)}
			aria-label="Toggle side blocks"
			class="cursor-pointer hover:scale-110 active:scale-95"
		>
			<i class={'translate-y-0.5 bx bx-sm ' + (!shown ? 'bx-show' : 'bx-hide')}></i>
		</button>
	</div>

	{#if shown}
		{@render children()}
	{/if}
</aside>
