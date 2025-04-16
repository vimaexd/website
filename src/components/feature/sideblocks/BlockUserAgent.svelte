<script lang="ts">
	import { onMount } from 'svelte';
	import Block from './Block.svelte';

	let ua = '';
	let uaBrowser = '';
	let uaPlatform = '';
	let uaFlavourText = '';

	onMount(() => {
		ua = navigator.userAgent;
		console.log(ua);

		let uaRegex = /([^\s\/]+\/[^\s]+)|\(([^)]+)\)/gm;

		switch (true) {
			case ua.includes('Firefox'):
				uaBrowser = 'Firefox';
				break;

			case ua.includes('Edg'):
				uaBrowser = 'Edge';
				break;

			case ua.includes('Opera'):
				uaBrowser = 'Opera';
				break;

			case ua.includes('Chrome'):
				uaBrowser = 'Chrome';
				break;

			case ua.includes('Safari'):
				uaBrowser = 'Safari';
				break;

			default:
				uaBrowser = 'a browser';
		}

		let matches = [...ua.matchAll(uaRegex)];

		let potentialPlatformNames: string[] = [];

		try {
			potentialPlatformNames = matches[1][2].split('; ');
		} catch {
			potentialPlatformNames = [];
		}

		console.log(potentialPlatformNames);

		switch (true) {
			// quirky
			case potentialPlatformNames.includes('Xbox'):
				uaPlatform = 'an Xbox';
				uaFlavourText = 'playstation better';
				break;

			case potentialPlatformNames.includes('PlayStation 5'):
				uaPlatform = 'a PlayStation';
				uaFlavourText = 'xbox better';
				break;

			case potentialPlatformNames.includes('Nintendo Switch'):
				uaPlatform = 'a Nintendo Switch';
				uaFlavourText = 'u got some wacky dns shit going on to get here';
				break;

			case potentialPlatformNames.includes('Genshin Impact'):
				uaPlatform = 'Genshin Impact';
				uaFlavourText = 'ur not getting that 5* bro';
				break;

			case potentialPlatformNames.includes('Unity'):
				uaPlatform = 'a Unity game';
				break;

			case potentialPlatformNames.find((n) => n.includes('Valve Steam GameOverlay')) != undefined:
				uaPlatform = 'the steam overlay';
				uaFlavourText = 'go play some games or something??';
				break;

			// macOS + iOS
			case potentialPlatformNames.includes('iPhone'):
			case potentialPlatformNames.includes('iPad'):
				uaPlatform = 'iOS';
				break;

			case potentialPlatformNames.find((n) => n.includes('Mac OS X')) != undefined:
				uaPlatform = 'macOS';
				break;

			// windows
			case potentialPlatformNames.includes('Windows NT 10.0'):
				uaPlatform = 'Windows 10';
				break;

			case potentialPlatformNames.includes('Windows NT 6.3'):
				uaPlatform = 'Windows 8';
				break;

			case potentialPlatformNames.includes('Windows NT 6.1'):
				uaPlatform = 'Windows 7';
				break;

			case potentialPlatformNames.includes('Windows NT 5.1'):
				uaPlatform = 'Windows XP';
				uaFlavourText = 'HOW THE FUCK';
				break;

			case potentialPlatformNames.includes('Windows 98'):
				uaPlatform = 'Windows 98';
				uaFlavourText = 'HOW THE FUCK';
				break;

			case potentialPlatformNames.find((n) => n.includes('Windows')) != undefined:
				uaPlatform = 'windows';
				break;

			// android
			case potentialPlatformNames.find((n) => n.includes('Android')) != undefined:
				uaPlatform = potentialPlatformNames.find((n) => n.includes('Android')) as string;
				break;

			// linux
			case potentialPlatformNames.find((n) => n.includes('Linux')) != undefined:
				let displayServer;
				let arch;

				if (potentialPlatformNames.includes('Wayland like X11')) {
					displayServer = 'wayland';
				} else if (potentialPlatformNames.includes('X11')) {
					displayServer = 'x11';
				}

				if (potentialPlatformNames.includes('Linux x86_64')) {
					arch = 'x86_64';
				} else if (potentialPlatformNames.includes('Linux i686')) {
					arch = 'x86';
				} else if (potentialPlatformNames.includes('Linux armv7l')) {
					arch = 'armv7l';
				} else if (potentialPlatformNames.includes('Linux aarch64')) {
					arch = 'aarch64';
				}

				uaPlatform = `linux (${[arch, displayServer].filter((d) => d != undefined).join(', ')})`;
				break;

			default:
				uaPlatform = 'something';
		}
	});
</script>

<Block title="🌐 connection">
	{#if ua != ''}
		<p class="text-sm text-center">
			you're connected with <b>{uaBrowser}</b> on <b>{uaPlatform}</b>
		</p>
		<p class="text-xs opacity-50">{uaFlavourText}</p>
	{:else}
		<div class="flex justify-center">
			<i class="bx bx-loader animate-spin"></i>
		</div>
	{/if}
</Block>
