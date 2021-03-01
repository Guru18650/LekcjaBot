module.exports = async function(mst, client) {
  client.user.setPresence({
    activity: {
      name: client.config.activity_name,
      type: client.config.activity_type
    }
  });

  mst.timezone = client.config.bot_timezone;
  await mst.getLoginCookie();

  await client.commands.get('reload').run(client, null, mst, null);
};