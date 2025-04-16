import { persisted } from 'svelte-persisted-store';

export enum DiscographyView {
	GRIDLIST = 0,
	ROW = 1
}

export enum DiscographyGroup {
	NONE = 'none',
	YEAR = 'year',
	TYPE = 'type'
}

export let discogSettings = persisted('mae.music.discography', {
	group: DiscographyGroup.YEAR,
	view: DiscographyView.GRIDLIST
});
