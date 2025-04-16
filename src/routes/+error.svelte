<script lang="ts">
	import Navbar from '@mae/components/core/Navbar.svelte';
	import Footer from '@mae/components/core/Footer.svelte';

	import { page } from '$app/state';
	import Button from '@mae/components/ui/Button.svelte';
</script>

<Navbar />

<main class="flex flex-col items-center">
	<div class="w-fit space-y-8 p-8">
		<h1 class="font-semibold" style="font-size: 8rem;">
			{#if page.error?.message.toLowerCase() == 'not found'}
				404
			{:else}
				oops!
			{/if}
		</h1>
		<h2 class="text-center text-2xl">
			{page.error?.message.toLowerCase()}
		</h2>
		<div class="flex w-full">
			<Button text="home" className="w-full text-center" href="/" />
		</div>
	</div>
</main>

<Footer />
