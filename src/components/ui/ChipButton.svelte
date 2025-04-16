<script lang="ts">
	let { text, href } = $props<{
		text: string;
		href: string;
	}>();
</script>

<a {href}>
	<span
		class="text-sm text-black px-4 flex items-center h-8 rounded-full hover:bg-vi-500 hover:text-vi-200 hover:font-semibold bg-white transition-all w-fit"
	>
		{text}
	</span>
</a>
