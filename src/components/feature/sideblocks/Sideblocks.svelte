<script lang="ts">
	import BskyLogo from '@mae/assets/icons/BskyLogo.svelte';
	import SideblocksWrapper from './SideblocksWrapper.svelte';

	import Block from './Block.svelte';
	import BlockClock from './BlockClock.svelte';
	import BlockLatestRelease from './BlockLatestRelease.svelte';
	import BlockSocial from './BlockSocial.svelte';
	import BlockLanyard from './BlockLanyard.svelte';
	import BlockFakeAd from './BlockFakeAd.svelte';

	import DiscordLogo from '@mae/assets/icons/DiscordLogo.svelte';
	import YoutubeLogo from '@mae/assets/icons/YoutubeLogo.svelte';
	import BlockUserAgent from './BlockUserAgent.svelte';
</script>

<SideblocksWrapper>
	<Block title="📱 socials">
		<div class="text-4xl text-neutral-100 flex justify-evenly items-center">
			<BlockSocial
				href="https://discord.com/users/577743466940071949"
				tooltipContent="Discord"
				tooltipId="front:social:dc"
			>
				<DiscordLogo width={32} className="pl-1 pr-1 pb-1" />
			</BlockSocial>
			<BlockSocial
				href="https://bsky.app/profile/mae.wtf"
				tooltipContent="Bluesky"
				tooltipId="front:social:bsky"
			>
				<BskyLogo width={32} className="pl-1 pr-1 pb-1" />
			</BlockSocial>
			<BlockSocial
				href="https://youtube.com/@vimaee"
				tooltipContent="Discord"
				tooltipId="front:social:dc"
			>
				<YoutubeLogo width={32} className="pl-1 pr-1 pb-1" />
			</BlockSocial>
		</div>
	</Block>
	<BlockClock />
	<div class="row-span-2">
		<BlockLatestRelease />
	</div>

	<BlockUserAgent />

	<!-- 
    lanyard block is specifically at the bottom
    so that it wont disrupt the ux flow of the blocks above it which are interactive
    -->
	<BlockLanyard id={'577743466940071949'} />

	<BlockFakeAd />
</SideblocksWrapper>
