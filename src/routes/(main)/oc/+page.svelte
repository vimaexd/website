<script>
	import PageContainer from '@mae/components/core/PageContainer.svelte';
	import PageHeader from '@mae/components/core/PageHeader.svelte';
	import Button from '@mae/components/ui/Button.svelte';
</script>

<PageContainer>
	<PageHeader title="🎏 my oc (mae)"></PageHeader>
	<p class="text-4xl font-semibold">Page Work in Progress!</p>
	<p>For now, here's a static refsheet.</p>
	<Button
		href="https://cdn.mae.wtf/maeoc/refsheet-2024.png"
		text="Download High Quality"
		className="w-fit"
		icon="bx bx-download mr-2"
	></Button>
	<img
		src="https://cdn.mae.wtf/maeoc/refsheet-2024.png"
		width={400}
		height={100}
		alt="mae refsheet"
	/>
</PageContainer>
