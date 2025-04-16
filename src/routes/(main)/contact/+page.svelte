<script>
	import PageHeader from '@mae/components/core/PageHeader.svelte';

	import ContactLink from './ContactLink.svelte';
	import PageContainer from '@mae/components/core/PageContainer.svelte';
</script>

<PageContainer>
	<PageHeader title="📱 contact">
		wanna talk? send me an email or dm me on any platform below
	</PageHeader>

	<div>
		please <b class="text-red-300">do not</b> contact me regarding:
		<ul class="list-disc list-inside">
			<li>collaborations</li>
			<li>advertisement</li>
		</ul>
	</div>

	<div class="flex flex-col justify-between space-y-4">
		<div class="flex flex-col">
			<h3 class="font-semibold">preferred</h3>
			<ContactLink
				text="vimae"
				icon="bxl-discord-alt"
				className="text-vi-300"
				link="https://discord.com/users/577743466940071949"
			/>

			<ContactLink text="mae @ (this domain)" icon="bxs-envelope" className="text-vi-300" link="" />

			<ContactLink
				text="mae.wtf (bsky)"
				icon="bxs-cloud"
				className="text-vi-300"
				link="https://bsky.app/profile/mae.wtf"
			/>
		</div>

		<div class="flex flex-col">
			<h3 class="font-semibold">less likely to answer</h3>
			<ContactLink text="@mae:matrix.mae.wtf" icon="bxs-chat" className="text-pink-300" link="" />
			<ContactLink
				text="@mae@wetdry.world"
				icon="bxl-mastodon"
				className="text-pink-300"
				link="https://wetdry.world/@mae"
			/>
			<ContactLink
				text="@mae@f.mae.wtf"
				icon="bxl-mastodon"
				className="text-pink-300"
				link="https://f.mae.wtf/@mae"
			/>
			<ContactLink
				text="@vimaexd"
				icon="bxl-twitter"
				className="text-pink-300 opacity-25"
				link="https://twitter.com/@vimaexd"
			/>
		</div>
	</div>
</PageContainer>
