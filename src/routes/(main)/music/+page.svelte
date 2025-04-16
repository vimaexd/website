<script lang="ts">
	import discog from '@mae/data/discography-vimae.json';

	import PageHeader from '@mae/components/core/PageHeader.svelte';
	import { DiscographyGroup, DiscographyView, discogSettings } from '@mae/store/discography';
	import PageContainer from '@mae/components/core/PageContainer.svelte';
	import { groupReleasesByKey } from '@mae/lib/discog/utils';
	import type { IDiscography } from '@mae/lib/discog/types';
	import ReleaseCard from '@mae/components/feature/discography/ReleaseCard.svelte';

	const releases = (discog as IDiscography).releases;

	const getGroupings = () => {
		switch ($discogSettings.group) {
			case DiscographyGroup.YEAR:
				return groupReleasesByKey(releases, 'year');

			case DiscographyGroup.TYPE:
				let groupedByType = groupReleasesByKey(releases, 'type');
				let typeOrder = ['Album', 'EP', 'Single'];

				const ordered = Object.keys(groupedByType)
					.sort((a: string, b: string) => {
						const posA = typeOrder.indexOf(a) || typeOrder.length;
						const posB = typeOrder.indexOf(b) || typeOrder.length;

						return posB - posA;
					})
					.reduce((obj: any, title: string) => {
						let temp = {
							...obj
						};
						temp[title] = groupedByType[title];
						return temp;
					}, {});

				return ordered;

			default:
				return {
					All: releases
				};
		}
	};
</script>

<PageContainer>
	<div class="flex flex-col sm:flex-row justify-between gap-2">
		<PageHeader title="💿 discography"></PageHeader>

		<div class="flex flex-row items-center gap-4 overflow-x-auto">
			<div class="space-x-2 text-sm flex">
				<label for="group" class="flex items-center gap-1 flex-shrink-0">
					<i class="bx bxs-category bx-xs"></i>
					Group by
				</label>
				<select
					name="group"
					id="cars"
					class="bg-vi-800 p-2 rounded-lg"
					value={$discogSettings.group}
					onchange={(e: any) => discogSettings.set({ ...$discogSettings, group: e.target.value })}
				>
					<option value="none">None</option>
					<option value="year">Release Year</option>
					<option value="type">Release Type</option>
				</select>
			</div>
			<div class="flex gap-2">
				<button
					class="bg-vi-800 p-2 rounded-lg flex items-center justify-center h-fit"
					onclick={() =>
						discogSettings.set({
							...$discogSettings,
							view: DiscographyView.GRIDLIST
						})}
					aria-label="Change discography view to grid"
				>
					<i class="bx bxs-grid-alt bx-sm"></i>
				</button>
				<button
					class="bg-vi-800 p-2 rounded-lg flex items-center justify-center h-fit"
					onclick={() => discogSettings.set({ ...$discogSettings, view: DiscographyView.ROW })}
					aria-label="Change discography view to row"
				>
					<i class="bx bxs-objects-horizontal-left bx-sm"></i>
				</button>
			</div>
		</div>
	</div>
	{#each Object.keys(getGroupings()).reverse() as groupTitle}
		<div class="">
			<h2 class="text-2xl font-bold mb-2">{groupTitle}</h2>
			<div class="flex gap-4 flex-wrap p-4 bg-vi-900 rounded-lg">
				{#each getGroupings()[groupTitle] as release}
					{#if $discogSettings.view == DiscographyView.GRIDLIST}
						<ReleaseCard {release} />
					{:else if $discogSettings.view == DiscographyView.ROW}
						<!-- <ReleaseRow {release} /> -->
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</PageContainer>

<!-- {Object.keys(getGroupings())
      .reverse()
      .map((groupTitle) => {
        const groupContents = getGroupings()[groupTitle];
        return (
          <div class=''>
            <h2 class="text-2xl font-bold mb-2">{groupTitle}</h2>
            <div class="flex gap-4 flex-wrap p-4 bg-ctp-base rounded-lg">
              {groupContents.map((release: IUnresolvedRelease) => (
                <Suspense
                  fallback={
                    <div class="w-[128px] h-[128px] bg-gray-500 animate-pulse"></div>
                  }
                >
                  {view == DiscographyView.GRIDLIST && (
                    <ReleaseCard release={release} />
                  )}
                  {view == DiscographyView.ROW && (
                    <ReleaseRow release={release} />
                  )}
                </Suspense>
              ))}
            </div>
          </div>
        );
      })} -->
