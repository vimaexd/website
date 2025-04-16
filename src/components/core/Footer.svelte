<script lang="ts">
	import dayjs from 'dayjs';
</script>

<footer class="flex justify-center z-10 sticky">
	<div
		class="w-full p-8 border-0 shadow-vi-900/70 bg-vi-900 flex justify-center"
		style="box-shadow: 0px 0px 32px 8px var(--tw-shadow-color)"
	>
		<div class="mx-8 max-w-[1024px] w-full text-sm flex flex-col-reverse gap-4 sm:flex-row">
			<div class="flex flex-col w-1/3">
				<h4 class="font-bold text-2xl">mae</h4>
				<p class="text-xs">
					©️ 2018-{dayjs().year()} vimae
				</p>
				<p></p>
				<a href="https://github.com/vimaexd/website">source code</a>
				<a href="/privacy">privacy</a>
			</div>
			<div class="flex gap-16 sm:justify-end w-full">
				<div class="flex flex-col gap-1 text-[1.05rem]">
					<h3 class="font-semibold text-2xl">About</h3>
					<a href="/">Home</a>
					<a href="/gear">Gear</a>
					<a href="/donate">Donate</a>
					<a href="/contact">Contact</a>
				</div>
				<div class="flex flex-col gap-1 text-[1.05rem]">
					<h3 class="font-semibold text-2xl">Media</h3>
					<a href="/blog">Blog</a>
					<a href="/music">Music</a>
					<a href="/oc">My OC</a>
				</div>
				<div class="flex flex-col gap-1 text-[1.05rem]">
					<h3 class="font-semibold text-2xl">More</h3>
					<a href="https://misc.mae.wtf">Misc</a>
					<a href="https://misc.mae.wtf">RSS feed</a>
				</div>
			</div>
		</div>
	</div>
</footer>
