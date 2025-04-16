<script lang="ts">
	let {
		text,
		className = '',
		icon,
		link
	} = $props<{
		text: string;
		className: string;
		icon: string;
		link: string;
	}>();
</script>

<a href={link} class={'w-fit space-x-1 ' + className}>
	<i class={'bx bx-sm align-bottom ' + icon}></i>
	<span>{text}</span>
</a>
