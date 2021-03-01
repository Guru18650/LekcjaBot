exports.run = async function(client, msg, mst, args) {
  if (!client.config.dev.includes(msg.author.id)) return;

  await mst.getLoginCookie();
  msg.channel.send(`❓ - ${mst.loggedIn}`);
}