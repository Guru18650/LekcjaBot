exports.run = async function(client, msg, mst, args) {
  if (msg != null) {
    if (!client.config.dev.includes(msg.author.id)) return;
  }

  mst.jobs = [];
  mst.scheduledLessons = [];

  let currentDate = new Date();
  let calendar = await mst.getCalendar(currentDate);
  let lessons = [];
  
  calendar.forEach(element => {
    if (!element.isCancelled) {
      let startDate = new Date(element.startTime);
      // let endDate = new Date(element.endTime);

      if (startDate.getDay() == currentDate.getDay()) {
        lessons.push(element);
      }
    }
  });

  //lessons.push({ 
  //  startTime: new Date(2021, 2, 25, 11, 17, 0, 0), 
  //  endTime: new Date(2021, 2, 25, 11, 20, 0, 0), 
  //  subject: "Spotkanie testowe",
  //  organizerName: "Testowy zespół [2020/2021]"
  //});

  lessons.forEach(async lesson => {
    let startDate = new Date(lesson.startTime);
    // let endDate = new Date(lesson.endTime);
    await mst.scheduleLesson(lesson);

    let thisLesson = mst.scheduledLessons.find(l => l.time.getTime() == startDate.getTime());

    let fieldsArr = [];
    thisLesson.meetings.forEach(async m => {
      let endM = new Date(m.endTime);
      fieldsArr.push({ 
        name: `💼 ${m.subject}`, 
        value: `${m.organizerName}\n${thisLesson.time.toTimeString().split(' ')[0].substr(0, 5)} - ${endM.toTimeString().split(' ')[0].substr(0, 5)}`
      });
    });

    await mst.scheduleJob(lesson, currentDate, () => {
      client.channels.cache.get(client.config.reminder_cid).send("@everyone", {embed: {
        title: '🔔 Przypomnienie',
        description: `Dzień tygodnia: ${mst.days[currentDate.getDay()]}`,
        color: client.config.embed_color,
        thumbnail: {
          url: client.config.embed_url
        },
        fields: fieldsArr,
        footer: {
          text: client.config.embed_footer,
          iconURL: client.user.avatarURL()
        },
        timestamp: new Date()
      }});
    });
  });

  await mst.startTasks();

  if (msg != null) {
    msg.channel.send(`❓ - ${mst.jobs.length}`);
  }
}