# Verificacion-DearthCraft
Esta es la verificacion de DearthCraft https://discord.gg/dearthcraft

# Instalacion
```text
https://github.com/TriangulitoG/Verificacion-DearthCraft.git
```

Edita el archivo 'config.json' pon el *TOKEN* y donde quieres que envíe el enbed

```json
{
  "token": "Tu token",

  "verificationchannel": "Chanel ID"
}
```
# Iniciar bot

```text
npm i
```
```text
node .
```
# Editar roles

En `events/interactionCreate.js` puedes editar los roles que añade cuando te verifica

```json

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if(interaction.isButton()){
      if(interaction.customId === 'verification') {
        if(!interaction.member.roles.cache.has("ID Principal del rol")) {
          interaction.member.roles.add("Otras IDs"),
          interaction.member.roles.add("Otras ID")
          interaction.reply({ content: "Has sido verificado correctamente!", ephemeral: true })
        } else {
          interaction.reply({ content: "¡Ya estás verificado!", ephemeral: true })
        };
      };
   };
  },
};

```
