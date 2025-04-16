<script lang="ts">
	let { children } = $props();
</script>

<main class="flex items-center flex-col pt-8 h-full">
	<div class="lg:max-w-[1024px] flex-shrink w-full min-w-0 px-4 lg:px-0 space-y-8 mb-32">
		{@render children()}
	</div>
</main>
