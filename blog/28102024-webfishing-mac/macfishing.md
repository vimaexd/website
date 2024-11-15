![webfishing header](/assets/blog_img/28102024-webfishing-mac/webfishing.png)

as of writing, WEBFISHING is a super cool game but it only has a build for windows. shame! if only there was a complicated guide to making it work natively on macOS without virtualisation

---

## step 1 - install steam for mac

to get the game files, you need to own WEBFISHING on steam. you can sorta skip these steps if you've already got the files for the game on a windows/linux pc and can drag them across to your mac

[download steam if you dont have it already for some reason??](https://store.steampowered.com/about/)

after it's installed, **make sure steam is completely closed** for the next step

---

## step 2 - force install webfishing

using finder, navigate to `/Users/(your user)/Library/Application Support/Steam/steamapps`.

### how do i do that?
to do this, click on documents or something and at the bottom you should see "Users > username > Documents". click on your username. after that, press `⌘ CMD + ⇧ SHIFT + .` to show hidden folders. you should then see the library folder appear!

in the folder, use any text editor (vscode works well) to create a file called `appmanifest_3146520.acf` containing the following:

```
"AppState"
{
    "AppID"  "3146520"
    "Universe" "1"
    "installdir" "WEBFISHING"
    "StateFlags" "1026"
}
```

save the file and then re-open steam. you should see a Download button appear and offer to install the game files.

after the game has installed, open the local files for the game like so:

![steam local files](/assets/blog_img/28102024-webfishing-mac/localfiles.png)

---

## step 3 - download godot steam export templates
webfishing uses an extension of the godot engine called [GodotSteam](https://godotsteam.com/) to interface with steam. we will need to download an export template for a mac game, so we can repack webfishing into a mac version.

go to [https://godotsteam.com/](https://godotsteam.com/), and scroll down until you find "Godot 3 Pre-compiled Editors and Templates"

![Godot 3 Pre-compiled editors and templates](/assets/blog_img/28102024-webfishing-mac/exporttemplates.png)

click it and download the zip file beginning with "macos". **do not click Source code! this will give you the wrong download**

after downloading the zip file, unzip it by double clicking. it should have a folder inside of it with 2 more zip files. unzip the one called `macos.zip`. this should then give you a strange app file called `osx_template`. drag this to your desktop!

---

## step 4 - cram webfishing inside this file

![Show package contents](/assets/blog_img/28102024-webfishing-mac/pkg.png)

right click on the file and click "Show package contents". this will take you inside the app file. there's a couple steps of setup we need to do before we can run the game.

go to your WEBFISHING steam files

**UPDATE 12/11/2024:**
as of a recent update, **the webfishing.pck file has been removed**. you can work around this by renaming the webfishing.exe to webfishing.pck - trust me it works somehow. 
if you get an error later about "Couldn't load project data", make sure you've renamed the exe file properly (right click > Get Info).
additionally, **the steam_appid.txt file was removed**. just make your own textfile containing `3146520`

1. copy the `webfishing.pck` file. put it inside `Contents/Resources` in the app package.
2. copy the `steam_appid.txt` file to `Contents/MacOS` in the app package.
3. go to `Contents/MacOS` folder in the app package and rename the `godot_osx_release.64` file to `webfishing`
4. delete the `godot_osx_debug.64` file in the game folder

finally, open the Info.plist file in `Contents` inside the app package, and paste this in:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>English</string>
	<key>CFBundleExecutable</key>
	<string>webfishing</string>
	<key>CFBundleName</key>
	<string>webfishing</string>
	<key>CFBundleDisplayName</key>
	<string>WEBFISHING</string>
	<key>CFBundleIconFile</key>
	<string>icon.icns</string>
	<key>CFBundleIdentifier</key>
	<string>info.webfishing.webfishing</string>
	<key>CFBundleInfoDictionaryVersion</key>
	<string>6.0</string>
	<key>CFBundlePackageType</key>
	<string>APPL</string>
	<key>CFBundleShortVersionString</key>
	<string>1.0</string>
	<key>CFBundleSignature</key>
	<string></string>
	<key>CFBundleVersion</key>
	<string>1.0</string>
	<key>DTPlatformBuild</key>
	<string>14C18</string>
	<key>DTPlatformName</key>
	<string>macosx</string>
	<key>DTPlatformVersion</key>
	<string>13.1</string>
	<key>DTSDKBuild</key>
	<string>22C55</string>
	<key>DTSDKName</key>
	<string>macosx13.1</string>
	<key>DTXcode</key>
	<string>1420</string>
	<key>DTXcodeBuild</key>
	<string>14C18</string>
$usage_descriptions
	<key>NSHumanReadableCopyright</key>
	<string>meow</string>
	<key>CFBundleSupportedPlatforms</key>
	<array>
		<string>MacOSX</string>
	</array>
	<key>NSPrincipalClass</key>
	<string>NSApplication</string>
	<key>LSApplicationCategoryType</key>
	<string>public.app-category.games</string>
	<key>LSMinimumSystemVersion</key>
	<string>10.12</string>
	<key>LSMinimumSystemVersionByArchitecture</key>
	<dict>
		<key>x86_64</key>
		<string>10.12</string>
	</dict>
	<key>NSHighResolutionCapable</key>
$highres
</dict>
</plist>
```

if you're trying to hack together a game that isn't webfishing, change the names as needed. make sure CFBundleExecutable matches the name of the renamed `godot_osx_release.64`.

at this point, your app package should look like this:

![complete folder structure](/assets/blog_img/28102024-webfishing-mac/complete.png)

we're not quite done yet however, as macOS thinks this app is broken, so we need to fix it.

---

## step 5 - this aint fix a fish

right now if you try and run the webfishing file you'll probably get a popup like this:

!["webfishing" is damaged and can't be opened. You should move it to the Bin.](/assets/blog_img/28102024-webfishing-mac/brokey.png)

to fix this, we need to tell macOS to stop giving a fuck. open the Terminal and type the following:

`sudo xattr -cr [path to your webfishing.app file]`

to get the path to your webfishing file easily, you can drag and drop the app file from Finder onto the terminal window and it will autofill something looking like this:

`sudo xattr -cr /Users/mae/Desktop/webfishing.app`

press enter and you should be prompted for your password (it wont show as typed in the window so just type it and press enter). 

---

## step 6 - fish

after that, **make sure steam is open** and then double click the file. webfishing should open!

if you need to transfer save data from a pc, the paths are as follow:

- Windows - `C:/Users/user/AppData/Roaming/Godot/app_userdata/webfishing_2_newver`
- macOS - `/Users/user/Library/Application Support/Godot/app_userdata/webfishing_2_newver`