exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (args.length === 0){ 
    message.reply("You cannot wear the air");
    return;
  }

  let gender;
  if (args[1]) {
    gender = args[1];
  }

  if (args[0].startsWith('<@') && args[0].endsWith('>')) {
    args = args[0].slice(2, -1);

    if (args.startsWith('!')) {
        args = args.slice(1);
    }

    let item;

    const male_items = Array(
      ":shirt:",
      ":jeans:",
      ":kimono:",
      ":boot:",
      ":tophat:",
      ":crown:",
      ":dark_sunglasses:",
      ":eyeglasses:"
    );

    const female_items = Array(
      ":womans_clothes:",
      ":shirt:",
      ":jeans:",
      ":dress:",
      ":kimono:",
      ":high_heel:",
      ":sandal:",
      ":womans_hat:",
      ":crown:",
      ":dark_sunglasses:",
      ":eyeglasses:"
    );

    if (gender === "male"){
      item = male_items[Math.floor(Math.random() * male_items.length)];
    } else if (gender === "female") {
      item = female_items[Math.floor(Math.random() * female_items.length)];
    } else {
      const items = male_items.concat(female_items);
      item = items[Math.floor(Math.random() * items.length)];
    }

    message.reply(" **You gave a "+item+" to "+client.users.get(args)+" to wear!**");
  }
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "wear", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "I'll Wear a thing to a user you mention!", // Short description of what the command does
  usage: "wear" // An example of how to use the command
};
