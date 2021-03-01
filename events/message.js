module.exports = async function(mst, client, message) {
  if (message.author.bot) return;
  if (message.guild === null) return;

  if (message.content.indexOf(client.config.prefix) !== 0) {
    if (message.mentions.has(client.user)) {
      const cmd = client.commands.get('help');
      cmd.run(client, message, mst, null);
    }
    
    return;
  }

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;
  if (mst.loggedIn === false) {
    message.channel.send(client.config.mst_login_fail);
    
    if (command !== 'reload' && command !== 'creload') {
      return;
    }
  }

  await cmd.run(client, message, mst, args);
};