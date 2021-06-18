## Discord Buttons Plugin
<a href="https://www.npmjs.com/package/discord-buttons-plugin"><img src="https://nodei.co/npm/discord-buttons-plugin.png?downloads=true&stars=true"></a>

> Easiest medium to use buttons with any discord API wrapper

![](https://cdn.discordapp.com/attachments/675669552796925987/850836437346549860/unknown.png)


```js
    /* Generate 1st Button with "Yes" lable on it */
	 const button1 = new buttonClient.MessageButton()
	 .setLabel("Click me")
	 .setStyle("green")
	 .setID("click")
```
```js
     /* Send Message with button */
     buttonClient.send("There will be a button below this message", { channel: "CHANNEL ID", buttons: [ [button] ]})
```

```js
/* listen to interaction */
buttonClient.on("click", (inta) => inta.reply("Thanks for clicking me :3")) //emits whenever the button is clicked
```

### L I N K S
- 🐱‍💻 Guide/Docs : [Documentation](https://app.gitbook.com/@ctk-doc/s/discord-buttons-plugin/)
- 💬 Discord: https://withwin.in/dbd
- 😎 Youtube: [DBD AND MORE](https://www.youtube.com/channel/UClAFgotVhZ1DGvN57EMY7fA)
- 📺 Video Tutorial: https://www.youtube.com/watch?v=MDTCm2Xxu5c
- ⚙ Tools Used: [Node-Fetch](https://www.npmjs.com/search?q=node%20fetch) | [Events](https://www.npmjs.com/package/events)
- 👩‍💻 Developer: `CTK WARRIOR#7923`

### F E A T U R E S
- Easy to handle and use
- Made with simplicity
- Less complexity

### C O N T A C T
<a href="https://withwin.in/dbd"><img src="https://discord.com/api/guilds/598122945604354053/widget.png?style=banner2" width="500"></a>
