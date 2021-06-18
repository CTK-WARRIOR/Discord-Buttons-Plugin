/* Required modules */
const fetch = require("node-fetch")

/**
 * Function to implement reply method in intraction
 * @param  {Interaction} 
 * @param  {discord.Client} client               
 */
module.exports = async (interaction, client) => {
  const guild = client.guilds.cache.get(interaction.guild_id) || await client.guilds.fetch(interaction.guild_id).catch(err => {});
  const channel = guild.channels.cache.get(interaction.channel_id) || await guild.channels.fetch(interaction.channel_id).catch(err => {})
  const message = channel.messages.cache.get(interaction.message.id) || await channel.messages.fetch(interaction.message.id).catch(err => {})

  /**
   * Reply method
   * @param  {String} content                  
   * @param  {MessageEmbed} options.embed           
   * @param  {Attachments} options.files           
   * @param  {Boolean} options.tts              
   * @param  {Object} options.allowed_mentions
   * @param  {Int} options.flags                            
   */
  interaction.reply = async function(content, { embed, files, tts, allowed_mentions, flags, ephemeral }={}) {

  let json = await fetch(`https://discord.com/api/v8/interactions/${interaction.id}/${interaction.token}/callback`, {
    headers: {
        'Authorization': `Bot ${client.token}`,
        "Content-Type": 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ type: 4, data: { content, embeds: embed, files, tts, allowed_mentions, flags: ephemeral ? 64 : flags }})
  })

  json = await json.json().catch(err => {})
}


/**
 * Update Method
   * @param  {String} content                  
   * @param  {MessageEmbed} options.embed           
   * @param  {Attachments} options.files           
   * @param  {Boolean} options.tts              
   * @param  {Object} options.allowed_mentions
   * @param  {Int} options.flags       
   * @param {Array} options.buttons
 */
interaction.update = async function(content, { embed, files, tts, allowed_mentions, flags, buttons }={}) {
  
   let components = !buttons ? null : []
   if(buttons) {
   for(let buttonArray of buttons) {
            components.push({type: 1, components: buttonArray})
      }
   }


  let json = await fetch(`https://discord.com/api/v8/interactions/${interaction.id}/${interaction.token}/callback`, {
    headers: {
        'Authorization': `Bot ${client.token}`,
        "Content-Type": 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ type: 7, data: { content, embeds: embed, files, tts, allowed_mentions, flags, components}})
  })

  json = await json.json().catch(err => {})

}

if(guild) interaction.guild = guild;
if(channel) interaction.channel = channel;
if(message) interaction.message = message;
return interaction;
}

