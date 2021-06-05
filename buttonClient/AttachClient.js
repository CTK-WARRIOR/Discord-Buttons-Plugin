/* Required modules */
const fetch = require("node-fetch")

/**
 * Function to implement reply method in intraction
 * @param  {Interaction} 
 * @param  {discord.Client} client               
 */
module.exports = async (interaction, client) => {

  /**
   * Reply method
   * @param  {String} content                  
   * @param  {MessageEmbed} options.embed           
   * @param  {Attachments} options.files           
   * @param  {Boolean} options.tts              
   * @param  {Object} options.allowed_mentions
   * @param  {Int} options.flags                            
   */
  const reply = async function(content, { embed, files, tts, allowed_mentions, flags, ephemeral }={}) {
  let message = await fetch(`https://discord.com/api/v8/interactions/${interaction.id}/${interaction.token}/callback`, {
    headers: {
        'Authorization': `Bot ${client.token}`,
        "Content-Type": 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ type: 4, data: { content, embed, files, tts, allowed_mentions, flags: ephemeral ? 64 : flags }})
  })

  message = await message.json().catch(err => {})
}

interaction.message.reply = reply;
return interaction;
}

