exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (!args.length) {
    return;
  } else {
    message.channel.send(`Printed: \`${JSON.stringify(args)}\``);
  }
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "array", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "Converting user input into array", // Short description of what the command does
  usage: "putting user input in array" // An example of how to use the command
};
