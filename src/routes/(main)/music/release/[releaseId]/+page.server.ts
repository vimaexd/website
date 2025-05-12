import _discog from '@mae/data/discography-vimae.json';
import { resolveRelease } from '@mae/lib/discog/utils';
import type { IDiscography, IResolvedRelease } from '@mae/lib/discog/types';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const discog = _discog as IDiscography;
	let unresolved = discog.releases.find((d) => d.slug == params.releaseId);

	if (!unresolved) {
		error(404);
	}

	const release = resolveRelease(unresolved, discog.tracks);

	return { release };
}
