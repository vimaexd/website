<script>
	import projectData from '@mae/data/projects.json';

	import PageContainer from '@mae/components/core/PageContainer.svelte';
	import PageHeader from '@mae/components/core/PageHeader.svelte';
	import ChipButton from '@mae/components/ui/ChipButton.svelte';
	import CardImage from '@mae/components/ui/CardImage.svelte';
	import { onMount } from 'svelte';
	import { animate, createSpring, stagger } from 'animejs';

	onMount(() => {
		animate('.anim-projects', {
			translateY: [20, 0],
			opacity: [0, 1],
			duration: 100,
			ease: createSpring(),
			delay: stagger(50)
		});
	});
</script>

<PageContainer>
	<PageHeader title="📦 projects">
		stuff i've made and worked on<br />
	</PageHeader>

	<div class="grid sm:grid-cols-2 grid-cols-1 gap-4 mb-12">
		{#each projectData.projects as p}
			<CardImage title={p.title} description={p.description} image={p.image || ''}>
				{#each p.links as l}
					<ChipButton href={l.href} text={l.name} />
				{/each}
			</CardImage>
		{/each}
	</div>
</PageContainer>
