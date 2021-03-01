exports.run = async function(client, msg, mst, args) {
  msg.channel.send('Boop').catch(console.error);
}