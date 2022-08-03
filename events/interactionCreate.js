module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if(interaction.isButton()){
      if(interaction.customId === 'verification') {
        if(!interaction.member.roles.cache.has("999003799119208497")) {
          interaction.member.roles.add("999003799240855581"),
          interaction.member.roles.add("999003799316340870"),
          interaction.member.roles.add("999003799240855579"),
          interaction.member.roles.add("999003799203090494"),
          interaction.member.roles.add("999003799119208492"),
          interaction.member.roles.add("999003799001780291"),
          interaction.member.roles.add("999003799001780287")
          interaction.reply({ content: "Has sido verificado correctamente!", ephemeral: true })
        } else {
          interaction.reply({ content: "¡Ya estás verificado!", ephemeral: true })
        };
      };
   };
  },
};