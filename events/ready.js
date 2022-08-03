module.exports = {
  name: 'ready',
  execute(client) {
    console.log('Estoy listo!')
    const servicesChan = client.channels.cache.get(client.config.servicesembedchannel)
    const rulesChan = client.channels.cache.get(client.config.rulesembedchannel)
    const verificationChan = client.channels.cache.get(client.config.verificationchannel)

//    function servicesEmbed() {
//      const embed = new client.discord.MessageEmbed()
//      .setColor('#0099ff')
//      .setTitle(`**__Boost Hosting - LISTA DE SERVICIOS__**`)
//      .setDescription("Boost Hosting dispone de multiples servidores vps, kvm servers y servidores dedicados. Para solicitar un presupuesto puedes crear un ticket en <#941362095230947338>\n\n```☁ - VPS Hosting```\n**➤  Linux VPS**\n• **Cores:** 16 max\n• **Ram:** 96GB max\n• **Disco:** 200GB max\n• **IPS:** 10 max\n\n**➤  KVM Servers**\n• **Cores:** 12 max\n• **Ram:** 64GB max\n• **Disco:** 960 GB max (SSD NAS)\n• **IPS:** 10 max\n\n**➤ Dedicados**\nPreguntar disponibilidad\n\n```🎮 - Game Servers (VPS)```\n**➤** Servidores de Minecraft\n**➤** Servidores GTA Roleplay\n**➤** Servidores de Rust\n**➤** Otros servidores!\n\n```💿 - Storage Servers```\n**➤** Disponible proximamente!\n")
 //     .setImage('https://cdn.discordapp.com/attachments/935948773098680350/947473900932063262/standard_1.gif')
//      .setFooter({ text: 'Lista de servicios ☆ Boost Hosting', iconURL: client.user.displayAvatarURL()})
//
//      servicesChan.send({
//        embeds: [embed]
//      })
//    }
//
//    function rulesEmbed() {
 //     const embed = new client.discord.MessageEmbed()
////      .setColor('#0099ff')
 //     .setTitle(`**__Boost Hosting - REGLAS GENERALES__**`)
//      .setDescription("**Bienvenido al servidor oficial y de soporte sobre Boost Hosting!** Aloja tus proyectos con un soporte rápido y una calidad extraordinaria, además de tener precios que se ajustan a tus necesidades.\n\n```📜- Normativa y Conductas de Boost Hosting```\n#1. **• Mantén un ambiente respetuoso, sé amable.**\n\n#2. **• No hagas publicidad vía md/chat sin autorización. (Contenido alternativo a ``Boost Hosting`` es sancionble)**\n\n#3. **• Manténte SFW el contenido +18 está prohibido y será estríctamente sancionado.**\n\n#4. **• Recuerda seguir las reglas de la comunidad y términos del servicio de Discord.**\n\n#5. **• Usa los canales de la manera correcta como se indica en la descripción de cada uno. El uso de pings inadecuados será sancionado estrictamente.**\n\n#6. **• El equipo administrativo de Boost Hosting puede sancionar a su criterio, en caso de equivocación contacta con los Administradores.**\n```Estás reglas no son representativas de una lista completa, los moderadores y soporte son libres de tomar acciones a decisión propia, si consideras un abuso repórtalo con un superior.```\n```💾 | Informacion adicional```\nPuedes dirigirte al canal de <#941362739153104906> para conocer nuestros productos.")
 //     .setFooter({ text: 'Listado de Normas ☆ Boost Hosting', iconURL: client.user.displayAvatarURL()})
//        
//      rulesChan.send({
//        embeds: [embed]
//      })
 //   }
//
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

//    servicesChan.bulkDelete(100).then(() => {
//      servicesEmbed()
//      console.log('Enviando el embed servicios')
//    })

//    rulesChan.bulkDelete(100).then(() => {
//      rulesEmbed()
//      console.log('Enviando el embed reglas')
//    })

    verificationChan.bulkDelete(100).then(() => {
      verificationEmbed()
      console.log('Enviando el embed verificación')
    })
  },
};