module.exports = {
  name: 'ready',
  execute(client) {
    console.log('Estoy listo!')
    const servicesChan = client.channels.cache.get(client.config.servicesembedchannel)
    const rulesChan = client.channels.cache.get(client.config.rulesembedchannel)
    const verificationChan = client.channels.cache.get(client.config.verificationchannel)
    
   function verificationEmbed() {
      const embed = new client.discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`**_DearthCraft- REGLAS GENERALES_**`)
      .setDescription("**Bienvenido a DearthCraft** \n\n```📜- Normativas de DearthCraft```\n\n**╭───────────────╯Normas╰─────────────╮** \n\n  **#1** Prohibido meterse en peleas, polémicas, insultar, discriminar o acoso a algún usuario, puedes acabar baneado permanentemente \n\ **#2** No esta permitida la venta de algún objeto o intercambio de cuentas. \n\n **#3** No se puede hacer spam ni de servidores ni redes sociales. \n\n **#4** PROHIBIDO CONTENIDO NSFW (+18), el que lo haga será directamente muteado. \n\n **#5** No compartas información personal delicada como edad, número de teléfono, correo electrónico, provincia/estado, etc. \n\n **#6** Usa los canales de texto y voz correctamente. \n\n **#7** No intentes falsificar tu cuenta y hacer que se vea como cualquier otro miembro de la comunidad \n\n **#8** 	Si vienes a molestar, serás baneado.  \n\n **#9** Leerse las normas del  servidor de minecraft en ***<#956259683751035061>*** \n\n```✅- Verificación```\n")
      .setImage('https://cdn.discordapp.com/attachments/993617699571765321/993617736393568286/standard_5.gif')
      .setFooter({ text: 'Sistema de Verificación > DearthCraft', iconURL: client.user.displayAvatarURL()})
      
      const row = new client.discord.MessageActionRow()
        .addComponents(
          new client.discord.MessageButton()
          .setCustomId('verification')
          .setLabel('Verificación')
          .setEmoji('<:checkyes:748417013541503047>')
          .setStyle('SUCCESS'),
        );
      verificationChan.send({
        embeds: [embed],
        components: [row]
      })
    }

    verificationChan.bulkDelete(100).then(() => {
      verificationEmbed()
      console.log('Enviando el embed verificación')
    })
  },
};
