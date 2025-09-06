![a fastfetch prompt for my system](/assets/blog_img/06092025-linux/fastfetch.png)

my Windows computer has always been like a second home to me - a
digital refuge and safe space for me to be creative and express
myself. as far as i could remember, i've always been using some 
form of Windows for my primary computer. used XP at school when
i was young, skipped Vista, grew up on 7, skipped 8 / 8.1, 
jumped on the 10 beta the second it was available.

i never really had any other option - i was too young to be 
trusted with something as expensive a mac. i had played around with
Linux by installing Ubuntu on a very old laptop, but i never
thought that it would be able to replace Windows on my desktop
because of just how many games i loved to play

fast forward to today, 2025. i'm 18 and bored. the latest Windows
11 didn't hit the same as older releases - filled with constant 
begs for you to use their llm, copilot, [ads for cloud storage](https://www.reddit.com/r/Windows11/comments/1eefr2m/windows_11_now_shows_a_fullscreen_popup_to_use/) 
every update and an absolute *insistance* on logging in with a
microsoft account, with workarounds required to just make a normal
user account. it feels like using windows in the modern day
requires you to fuck so much with the system just to get an OS that
dosen't bug you..

additionally, microsoft as a company have demonstrated horrifying
behaviour by choosing to [support the Israeli Defense Forces](https://www.theguardian.com/world/2025/jan/23/israeli-military-gaza-war-microsoft) carry out a genocide on innocent palestinian civilians, by [enabling the IDF to spy on all Palestinian phone calls](https://www.theguardian.com/world/2025/aug/06/microsoft-israeli-military-palestinian-phone-calls-cloud).

so. to recap. i'm sick of windows. i'm sick of microsoft. what now?
well, i still play video games a lot, so my only option is linux

---

## let's install linux!

i chose to go install [**Arch Linux**](https://archlinux.org/) due to
its fairly minimal nature. arch allows you a lot of control over
what you want on your system, lacking things as simple as a network
manager from a stock configuration. another benefit of arch is
it's excellent community support, such as the [arch wiki](https://wiki.archlinux.org/title/Main_page).
the arch wiki is so well done that if you want to install a piece
of software on your system, theres a 90% chance that the arch wiki
has an article describing exactly how to install and configure it
correctly.

installing was more involved than distros with a graphical 
installer, having to do things like partitioning with terminal
commands and learn a few concepts. i 
actually enjoy this though - the arch setup is easy enough to where
you can follow it just by [reading a wiki page](https://wiki.archlinux.org/title/Installation_guide) but it's involved enough
to where you get to learn things about your system that you
wouldn't normally understand. 

- "what's an EFI partition?"
- "what's an fstab?"
- "which bootloader am i running and how is it installed?"
- "what desktop environment do i want to use?"
- "what are pipewire, pulseaudio, alsa and jack?"
- "what's a display server and why is X11 the root of all evil?"

these are some of the things i learnt when installing arch, and i
found it to be a very informative experience.

i only experienced two issues installing - one being a unique
quirk of my motherboard, as my MSI motherboard only detects the
GRUB bootloader when it's installed to a specific path (this was
fixed by installing the bootloader with a specific path argument).
the second issue is that i forgot to install a network manager so
i booted into the installed system and couldn't install anything.
woops!

---

## the beauties of linux

when things on linux work, they work fairly well. one of the first
things i noticed after installing is how fast my system boots. when
i had windows on this system it took so much longer to boot and
even after logging in, had to take a minute to warm itself up. now
my system just works straight from the get go, and the slowness is
from my common applications starting up.

### i love plasma

for my desktop environment, i chose [**KDE Plasma**](https://kde.org/plasma-desktop/) 
as i had previously used it on a Steam Deck and really enjoyed 
how comprehensive it was. for anyone considering a move to linux,
i *highly* recommend KDE Plasma as a desktop environment - it's 
very similar to windows, looks great out of the box and is highly
customizable. i use the stock Breeze window decorations with
custom font choices (Inter) and a Catppuccin Mocha color theme.

plasma is also great because KDE maintain some solid companion
software which is right at home with it. a lot of tools that people
take for granted on Windows isn't part of a desktop environment by
default and is actually seperate software. some things like a file
manager (Dolphin), document viewer (Okular), terminal (Konsole), 
unzipping tool (Ark), task manager (Plasma System Monitor) etc.
kde maintains all of these and they all have a consistent visual
style and work super good. thank you everyone that makes these 
incredible tools for free 💜

### user choice + sandboxing

software on linux is also fairly easy to install with lots of
choice about how you install it. software can either be installed
onto the system directly using the package manager (pacman in my 
case) or software can be installed as a "flatpak" through an
app store interface (discover) which isolates the program from the 
main system and only lets it have specific access to certain files.

---

## year of the linux desktop (aka "the horrors of linux")

"year of the linux desktop" is the old everlasting phrase and has
become the new favourite expression in my friend group whenever someone
is having issues due to linux.

### creative stuff has a way to go

my main issue with linux and why i haven't been able to go full time
sooner is a lack of professional creative tools. i make music and my
DAW of choice is Ableton Live. while it is possible to run Live under
Wine. even if i am able to get a DAW running, on the whole it's a
fairly janky experience. there is hope for the future however! [Bitwig Studio](https://www.bitwig.com/) (a daw created by former Ableton employees) has native linux support, and there are
tools like [yabridge](https://github.com/robbert-vdh/yabridge) to enable windows VST/CLAP plugins to run under Wine and interface with
them in a linux host daw seamlessly.

i'm still looking for a good image editing program. i refuse to use GIMP. 
Krita, although great for painting and art, is a bit clunky for 
editing images together. Affinity Photo, a great photoshop
alternative supposedly runs under Wine, but requires a [custom Wine build](https://gitlab.winehq.org/ElementalWarrior/wine) 
to work and can be prone to crashing.

### video games

game compatibility on the whole is great (especially with Proton), but
i have run into a few game-specific problems. games with restrictive
anti-cheat can be hit or miss to run, due to some games forcibly 
disabling linux support even when technically possible. notably as of writing, **Fortnite** has linux support
explicitly disabled in Easy Anti-Cheat. this means the only ways
for me to play Fortnite are to buy a second gpu and make a 
Windows virtual machine with gpu passthrough, or use cloud gaming servies.

*more about linux anti-cheat at [Are We Anti-Cheat Yet](https://areweanticheatyet.com/)!*

when DELTARUNE chapters 3+4 released in june 2025, the game mostly
ran completely fine under Proton, with the exception of the video
cutscene at the start of chapter 3. unfortunately, i had to view
the cutscene video manually in vlc, which ruined my immersion of
the game a little bit.

### futures, made of, virtual reality

i play a fair amount of VRChat using my quest 2, and it *mostly* works well. as of writing, vr on linux is in an
interesting place. streaming to a meta/pico headset using [ALVR](https://github.com/alvr-org/ALVR)
or [WiVRn](https://github.com/WiVRn/WiVRn) works decently well, 
and sometimes works even better than when i used Oculus Link under 
Windows.

there are problems. lots of them. for a start, when i installed ALVR i ran into a unique problem where after about
1 minute of streaming to the headset, my entire pc would disconnect
all of its usb devices. i ended up having to edit my bootloader
config to fix this - i still have no idea how i was supposed to 
know to change that.

SteamVR on linux is essentially treated as abandonware and things like desktop 
overlays straight up don't work under modern wayland setups, 
having to use plugins like [WlxOverlay-S](https://github.com/galister/wlx-overlay-s) instead. there are open source 
alternatives (Monado and WiVRn), but those carry their own 
problems like not having the nice dashboard of SteamVR.

authoring content for VRChat comes with it's own set of problems
too! VRChat uses the Unity engine, which does have a native linux
version, but has a few problems. Unity on linux renders under
OpenGL (or Vulkan) and it seems like a lot of popular toon shaders
(namely [Poiyomi](https://www.poiyomi.com/)) have issues rendering
in the editor and must be "locked in" to be able to be viewed.
Unity on linux also doesn't support wayland, so dragging and
dropping files won't work.

*more info about linux vr at the [Linux VR Adventures Wiki](https://lvra.github.io)!*

---

## what now?
i love my linux setup just because of how personal it feels to me,
and i'm glad i made the switch and haven't fallen back into
dual-booting. i'm hopeful for the future of the platform!

personal wishlist as of now:
- ableton please make a linux native build of Live. i know you have it, Push and Move run on linux!!
- serif please affinity photo linux build...
- epic games please let me play fortnite on linux (you build assets for linux server i know you can do it)
- vrchat please make a linux native build of vrchat...
- valve please make a new vr headset and fix steamvr
- someone make a nice music player, musicbee under wine sucks,
elisa is missing features and strawberry is ugly

i was only able to make the switch because i moved all of my 
creative work to my mac. if i didn't have another computer, i 
would be heavily limited as to what creative work i could do

---

if you're interested in trying linux, check out 
[distrochooser.de](https://distrochooser.de/) to see what distro
is right for you

if you enjoyed this, consider [following me on bluesky](https://bsky.app/profile/mae.wtf) or [donating to me](https://ko-fi.com/vimae)