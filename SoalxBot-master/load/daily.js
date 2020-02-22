const INTERVAL = 86400000;
const CHANNEL = '616094371304964105';
// eslint-disable-next-line max-len
const MESSAGES = a
a
a
a

a
a
a

a
a
a
a
function sendMessage(channel) {
	channel.send(MESSAGES[Math.ceil(Date.now()/INTERVAL)*INTERVAL % MESSAGES.length])
		.then((m) => m.react('😄') && m.react('🤔'));
}

module.exports = {
	id: 'daily',
	exec: (client) => {
		let channel = client.channels.get(CHANNEL);

		if (!channel)
			return console.log('Failed to find interval post channel.');

		let nextTime = Math.ceil(Date.now() / INTERVAL) * INTERVAL;

		setTimeout(() => {
			sendMessage(channel);

			setInterval(sendMessage.bind(null, channel), INTERVAL);
		}, nextTime - Date.now());
	}
};
