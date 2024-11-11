![ipad.jpeg](/assets/blog_img/01052021-interactive-doorbell/ipad.jpeg)

Recently, I've had a constant issue. Members of my family seemed to appear in my doorway, never knocking while I'm busy streaming or programming. One day, I was bored just sitting and breathing in the fresh air from outside when I had an idea. The idea is that there would be some sort of doorbell outside my room, where any family member could ring and it would send a notification to my computer saying that someone is there, completely avoiding the shock of someone bursting in the room uninvited.

I had found an old iPad Mini (4th generation) lying unplugged for the better part of a year that I wanted to repurpose, and it was the perfect thing to use. It has a good-sized screen and a camera on the front, in case I wanted to later build in a sort of camera monitoring system to see who's there.

# Technologies/Packages used:

For this project, I made a webapp which runs on the iPad and a server on my computer which pushes the notifications/hosts the webapp.

### [**Tailwind CSS**](https://tailwindcss.com) 
I've only just discovered Tailwind recently and i've been using it more and thought it was a good idea to try to use it, seeming as this is a smaller project.

### **WebSockets**
Something i've barely explored up until now and turned out to be easier to implement than i thought. I'm sending JSON over websockets using the [ws NPM package](http://npmjs.com/package/ws) 

### [**Node Notifier**](https://www.npmjs.com/package/node-notifier)
An easy package I found to send Windows toast notifications and seems to use SnoreToast under the hood.

### [**TypeScript**](https://www.typescriptlang.org)
JavaScript with types, very nice to use especially with the auto complete in my IDE (which is of course Visual Studio Code)

I'm also using [`ts-node-dev`](https://www.npmjs.com/package/ts-node-dev) to hot-reload my TypeScript code. It's like nodemon but for TypeScript

# The interface
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1619900612029/XtOtekpQW.png)
At the top, the current chosen status is displayed, along with an emoji next to it from the [Twemoji](https://twemoji.twitter.com) emoji set. 
There are 5 different status states - Each has it's own seperate use and some remove the buttons from the interface.
1. Available
2. Busy
3. Streaming
4. Sleeping
5. Away

There are 4 main buttons, they all send different messages into the notification but they mainly all accomplish the same job which is to send a notification over the WebSocket. **COVID-19 test** is there because I am required to do COVID-19 tests by my educational institution, and one of my parents usually ends up setting it up for me and then giving me the swab to take the sample. I am using [Boxicons](https://boxicons.com) for the icons in the buttons, as one of my friends recommended it to me and they had a good range of icons.

In addition to that, the current time is also displayed in the top left to be publicly displayed incase people can't look at any of the 20 other devices that display the time. Finally, the current version is displayed in the bottom left for debugging purposes, and tapping the version number will reload the page, useful when the application is running in Apple's PWA mode where there are no browser controls whatsoever.

## How I built it

First I worked on the web interface, I went through many different iterations trying VueJS, React but ultimately in the end I just settled on going back to basics and just writing a static HTML page. After all, there aren't many things in the page that I need to componentize.

After I got the basic idea of the interface done, I started on writing the backend. I'm using Express to serve the static HTML and the WebSocket was actually *way* easier than I thought it would be to implement. It uses some switch statements on the server and the client to change the response based on the opcode and stores the status in variables.

While storing the status in variables is a great way to call them later, I had a concern that what if my machine lost power or I just stupidly closed the program by accident somehow? To combat that, I decided to store the status in a JSON file as well as in the variable, so it can be loaded when the program is started up again.

```js
/**
 * Save status and sleep time to JSON file
 */
const save = () => {
  fs.writeFileSync(dataPath, JSON.stringify({
    status, sleepTime
  }));
}

/**
 * Load status and sleep time from JSON file in
 * case of loss of power or app shutdown
 */
const load = () => {
  const _data: Buffer = fs.readFileSync(dataPath);
  const data: KnokData = JSON.parse(_data.toString());

  status = data.status;
  sleepTime = data.sleepTime;
}
```

As you might be able to see above, I'm also storing data of when the status was changed to Sleeping, so everyone can see how awful my sleep schedule is because I thought it would be a useful thing to display.

Finally as it was time to run the webapp on the iPad, I added this meta tag to my HTML Head to enable the iPad to not show the Safari controls when the website was "added to the home screen" 
```html
<meta name="apple-mobile-web-app-capable" content="yes">
``` 

And it worked! I showed the other people in my house and plugged in the iPad to stay docked on a shelf outside my office.

## Looking to the future

In future, I am planning to add the following features

- Web panel so I can set my status easily
- Cooldown on the Urgent button
- More buttons menu to add more notification variety

The source code is available on GitHub here - **https://github.com/etstringy/knok**

Thanks for reading! 🚀