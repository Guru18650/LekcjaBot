exports.run = async function(client, msg, mst, args) {
  let currentDate = new Date();
  let calendar = await mst.getCalendar(currentDate);

  let lessons = [];
  calendar.forEach(element => {
    if (!element.isCancelled) {
      let startDate = new Date(element.startTime);
      let endDate = new Date(element.endTime);

      if (startDate.getDay() == currentDate.getDay()) {
        lessons.push(`${startDate.toTimeString().split(' ')[0].substr(0, 5)} - ${endDate.toTimeString().split(' ')[0].substr(0, 5)} ▫ ${element.subject}`);
      }
    }
  });

  msg.channel.send({ embed: {
    title: '📆 Dzisiejsze spotkania',
    description: `Dzień tygodnia: ${mst.days[currentDate.getDay()]}`,
    color: client.config.embed_color,
    thumbnail: {
      url: client.config.embed_url
    },
    fields: [
      {
        name: '📌 Plan spotkań',
        value: lessons.join('\n')
      }
    ],
    footer: {
      text: client.config.embed_footer,
      iconURL: client.user.avatarURL()
    },
    timestamp: new Date()
  }});
}