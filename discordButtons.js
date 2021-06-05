/* Required Moduels */
const fetch = require("node-fetch")
const EventEmitter = require('events');

/**
 * ButtonClient Class
 * extended with EventEmitter Class
 */
class ButtonClient extends EventEmitter {
  /**
   * @constructor
   * @param  {discord.Client} client 
   */
    constructor(client) {
        super()
        /**
         * @type {discord.Client}
         */
        this.client = client || null

        /**
         * @type {MessageButton}
         */
        this.MessageButton = require("./buttonClient/MessageButtons")
        if (!this.client) throw new Error("client param required!")

        /**
         * Whenever app recives interaction event
         */
        client.ws.on("INTERACTION_CREATE", async interaction => {
            if (!interaction.type == 3) return;
            const Attach = await require("./buttonClient/AttachClient")(interaction, client) //Add the reply method in {interaction.message}

            /** Emit the event in both way */
            this.emit("onClick", Attach) 
            this.emit(interaction.data.custom_id, Attach)
        })
    }

   
   /**
    * Send the message with buttons
    * @param  {String || Int}  channel    channel ID of the channel where you want to send message
    * @param  {String}  options.content  message content that you want to send
    * @param  {discord.MessageEmbed}  options.embed    
    * @param  {Object}  files            Any attachment you wanted to attach
    * @param  {Boolean} tts              If the message is TTS or not
    * @param  {Object} allowed_mentions 
    * @param  {Array}   buttons          Buttons that message will contain {MessageButtons}
    */
    async send(content, {
        channel,
        embed = {},
        files = {},
        tts = false,
        allowed_mentions = false,
        buttons = []
    } = {}) {
        let components = []
        for(let buttonArray of buttons) {
            components.push({type: 1, components: buttonArray})
        }
    
        let json = await fetch(`https://discord.com/api/v9/channels/${channel}/messages`, {
            headers: {
                'Authorization': `Bot ${this.client.token}`,
                "Content-Type": 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                content,
                embed,
                files,
                tts,
                allowed_mentions,
                components
            })
        }).catch(err => {
            return err
        })
        
        json = await json.json()
        return json
    }
}


module.exports = ButtonClient