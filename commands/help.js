exports.run = async function(client, msg, mst, args) {
  msg.channel.send({ embed: {
    title: '🛂 Dział pomocy',
    description: `Prefix bota: \`${client.config.prefix}\``,
    color: client.config.embed_color,
    thumbnail: {
      url: client.config.embed_url
    },
    fields: [
      {
        name: '📋 Dostępne komendy',
        value: '`help` - wyświetla tą wiadomość\n`today` - pokazuje dzisiejszy plan spotkań\n'
      },
      {
        name: '⛔ Deweloperskie komendy',
        value: '`reload` - odświeża kalendarz spotkań\n`creload` - łączy ponownie z MSTeams\n'
      }
    ],
    footer: {
      text: client.config.embed_footer,
      iconURL: client.user.avatarURL()
    },
    timestamp: new Date()
  }});
}