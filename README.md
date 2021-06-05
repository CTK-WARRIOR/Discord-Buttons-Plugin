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

     /* Send Message with button */
     buttonClient.send("There will be a button below this message", { channel: "CHANNEL ID", buttons: [ [button] ]})
```

```js
buttonClient.on("click", (inta) => inta.message.reply("Thanks for clicking me :3"))
```

### L I N K S
- 🐱‍💻 Guide/Docs : `Not Available`
- 💬 Dicord: https://withwin.in/dbd
- 😎 Youtube: [DBD AND MORE](https://www.youtube.com/channel/UClAFgotVhZ1DGvN57EMY7fA)
- 📺 Video Tutorial: `Not Out`
- ⚙ Tools Used: [Node-Fetch](https://www.npmjs.com/search?q=node%20fetch) | [Events](https://www.npmjs.com/package/events)
- 👩‍💻 Developer: `CTK WARRIOR#7923`

### F E A T U R E S
- Easy to handle and use
- Made with simplicity
- Less complexity

### E X A M P L E
```js
const discord = require("discord.js");
const client = new discord.Client();
/* Import Discord Buttons Client */
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client)



client.on("message", (message) => {
	if(message.content === "!button") {
	/* Generate a Cute Embed :3 */
	 const embed = new discord.MessageEmbed()
	 .setTitle("Do you like me?")
	 .setColor("GREEN");
 
    /* Generate 1st Button with "Yes" lable on it */
	 const button1 = new buttonClient.MessageButton()
	 .setLabel("Yes")
	 .setStyle("green")
	 .setID("yes")

   /* Generate 2nd Button with "No" label on it */
	 const button2 = new buttonClient.MessageButton()
	 .setLabel("No")
	 .setStyle("red")
	 .setID("no")

   /* Generate 3rd Link Button */
   const button3 = new buttonClient.MessageButton()
   .setLabel("Join me on OnlyFans")
   .setURL("https://withwin.in/dbd")

     
     /* Send Message with button */
     buttonClient.send(null, { channel: message.channel.id, embed, buttons: [ [button1, button2], [button3] ]})
 }
})


/* Listen to buttons event with their ID */
buttonClient.on("yes", (inta) => inta.message.reply("Thanks, I love you :3"))
buttonClient.on("no", (inta) => inta.message.reply("WTF, you are the worst person, i have ever seen"))

client.login("TOKEN") 
```

### C O N T A C T
<a href="https://withwin.in/dbd"><img src="https://discord.com/api/guilds/598122945604354053/widget.png?style=banner2" width="500"></a>