const Puppeteer = require('puppeteer');
const Https = require('https');
const Cron = require('cron');
const Utils = require('./utils.js');

module.exports = {
  timezone: '',

  cookies: '',
  authtoken: '',
  loggedIn: false,

  jobs: [],
  scheduledLessons: [],

  days: { 
    1: "Poniedziałek", 
    2: "Wtorek", 
    3: "Środa",
    4: "Czwartek",
    5: "Piątek",
    6: "Sobota",
    7: "Niedziela"
  },

  stringifyCookies: async function(cookie) {
    let stringified = '';

    for (var i = 0; i < cookie.length; i++) {
        if (cookie[i].name.toLowerCase() == 'authtoken') {
            this.authtoken = cookie[i].value;
        }
	    stringified += cookie[i].name + '=' + cookie[i].value + '; ';
    }

    return stringified;
  },

  getLoginCookie: async function() {
    this.cookies = '';
    this.authtoken = '';
    this.loggedIn = false;

    console.log('MST: Navigating to Teams...');
    const Browser = await Puppeteer.launch({ headless: true });
    const Page = await Browser.newPage();
    await Page.goto(Utils.MST_url, { waitUntil: 'networkidle0' });
    console.log('MST: Loaded Teams page!');

    await Page.type(Utils.MST_emailSelector, process.env.MSTEAMS_EMAIL);
    await Page.click(Utils.MST_nextButton);
    await Page.waitForTimeout(Utils.MST_loginDelay);
    console.log('MST: E-mail stage passed!');

    await Page.type(Utils.MST_passwordSelector, process.env.MSTEAMS_PASSWORD);
    await Page.click(Utils.MST_nextButton);
    await Page.waitForTimeout(Utils.MST_loginDelay);
    console.log('MST: Password stage passed!');

    await Page.click(Utils.MST_reminderButton);
    await Page.waitForNavigation();
    await Page.waitForTimeout(Utils.MST_redirectDelay);
    console.log('MST: Teams should work now!');

    this.cookies = await this.stringifyCookies(await Page.cookies());
    if (this.cookies == '') {
      console.log('MST: Cookies are empty, try again!');
    }
    else {
      console.log('MST: Saved cookies!');
      this.loggedIn = true;
    }

    await Browser.close();
  },

  getCalendar: async function(currentDate) {
    currentDate.setHours(23, 00);
    let startDate = new Date(currentDate.getTime() - 86400000 * currentDate.getDay());
    let endDate = new Date(currentDate.getTime() + 86400000 * (7 - currentDate.getDay()));

    let p = new Promise((resolve, reject) => {
      Https.get(Utils.MST_calendarUrl + `?StartDate=${startDate.toISOString()}&EndDate=${endDate.toISOString()}`, {
        headers: {
          cookie: this.cookies,
          authorization: this.authtoken.replace('%3D', ' ').replace(Utils.MST_authSuffix, '')
        },
      }, (res) => {
        let data = '';
        res.on('data', (d) => {
          data += d;
        }).on('end', () => {
          if (data == '') {
            resolve([]);
          }
          else {
            resolve(JSON.parse(data).value);
          }
        });
      });
    });

    return await p;
  },

  scheduleLesson: async function(lesson) {
    let startDate = new Date(lesson.startTime);

    let scheduled = this.scheduledLessons.find(s => s.time.getTime() == startDate.getTime());
    if (scheduled === undefined) {
      this.scheduledLessons.push({ time: startDate, meetings: [ lesson ] });
    }
    else {
      this.scheduledLessons[this.scheduledLessons.findIndex(s => s.time.getTime() == startDate.getTime())].meetings.push(lesson);
    }
  },

  scheduleJob: async function(lesson, current, todo) {
    let startDate = new Date(lesson.startTime);

    let job = this.jobs.find(j => j.time.getTime() == startDate.getTime());
    if (job === undefined) {
      this.jobs.push({ time: startDate, task: new Cron.CronJob(
        `1 ${startDate.getMinutes()} ${startDate.getHours()} * * *`, 
        todo, null, true, this.timezone)});
    }
  },

  startTasks: async function() {
    this.jobs.forEach(job => {
      job.task.start();
    });

    console.log('MST: Started tasks!');
  }
}