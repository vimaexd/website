<script>
	import PageContainer from '@mae/components/core/PageContainer.svelte';
	import PageHeader from '@mae/components/core/PageHeader.svelte';

	import ImgThroneLogo from '@mae/assets/img/logos/throne_white.svg';
	import ImgKofiLogo from '@mae/assets/img/logos/kofi.png';
</script>

<PageContainer>
	<PageHeader title="💸 donate">
		if you feel like you want to give me something for something i've made, or you just feel like
		wasting your extra money, there are multiple ways you can donate to me below ^^
	</PageHeader>

	<div class="w-full rounded-lg bg-throne-gradient">
		<div class="w-full h-full p-6 backdrop-blur-xl rounded-lg flex flex-row justify-start gap-4">
			<div class="flex flex-col">
				<div class="flex gap-2">
					<img src={ImgThroneLogo} width={32} height={32} alt="Throne Logo" />
					<h2 class="text-4xl font-bold tracking-tight">Throne</h2>
				</div>
				<p class="md:w-2/3 w-full">
					If you want to buy me a gift anonymously from my wishlist, Throne serves as my wishlist
					that you can buy from anonymously (or not) and the gift will be shipped to me
				</p>
				<div class="mt-8 flex-grow-0">
					<a href="https://throne.com/vimae/wishlist">
						<p class="text-sm flex items-center gap-1 text-white">
							See my wishlist <i class="bx bx-a-external"></i>
						</p>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="w-full rounded-lg bg-[#FF5E5B]">
		<div class="w-full h-full p-6 backdrop-blur-xl rounded-lg flex flex-row justify-start gap-4">
			<div class="flex flex-col">
				<div class="flex gap-2">
					<img src={ImgKofiLogo} width={32} height={32} alt="Ko-fi Logo" class="w-10 scale-125" />
					<h2 class="text-4xl font-bold tracking-tight">Ko-fi</h2>
				</div>
				<p class="md:w-2/3 w-full">
					If you just want to donate money (or "buy me a coffee"), you can do so via my Ko-fi page
				</p>
				<div class="mt-8 flex-grow-0">
					<a href="https://ko-fi.com/vimae">
						<p class="text-sm flex items-center gap-1 text-white">
							Buy me a coffee <i class="bx bx-link-external"></i>
						</p>
					</a>
				</div>
			</div>
		</div>
	</div>

	<h2 class="font-bold text-4xl">Supporters</h2>
	<p>
		thank you so much to the people below for supporting me 😄<br />
		if you've given me something and dont see your name below,
		<a href="/contact">let me know about it</a>
	</p>
	<!-- <ThroneSupporters/>
    <BandcampSupporters/>
    <DiscordSupporters/>
    <OtherSupporters/> -->
</PageContainer>
