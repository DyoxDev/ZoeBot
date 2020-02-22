const INTERVAL = 86400000;
const CHANNEL = '616094371304964105';
// eslint-disable-next-line max-len
const MESSAGES = ['What weird food combinations do you really enjoy?', 'What social stigma does society need to get over?', 'What food have you never eaten but would really like to try?', 'What would a world populated by clones of you be like?', 'Do you think that aliens exist?', 'Where are some unusual places you’ve been?', 'What movie can you watch over and over without ever getting tired of?', 'What inanimate object would be the most annoying if it played loud upbeat music while being used?', 'What animal would be cutest if scaled down to the size of a cat?', 'If you couldn’t be convicted of any one type of crime, what criminal charge would you like to be immune to?', 'Where do you get most of the decorations for your home?', 'What food is delicious but a pain to eat?', 'What “old person” things do you do?', 'What’s the spiciest thing you’ve ever eaten?', 'What do you think you are much better at than you actually are?', 'What’s your cure for hiccups?', 'What mythical creature do you wish actually existed?', 'How do you judge a person?', 'What are you interested in that most people aren’t?', 'If you were given a PhD degree, but had no more knowledge of the subject of the degree besides what you have now, what degree would you want to be given to you?', 'What’s something people don’t worry about but really should?', 'Do you think that children born today will have better or worse lives than their parents?', 'What’s the funniest actual name you’ve heard of someone having?', 'What was cool when you were young but isn’t cool now?', 'If you were moving to another country, but could only pack one carry-on sized bag, what would you pack?', 'If magic was real, what spell would you try to learn first?', 'If you were a ghost and could possess people, what would you make them do?', 'Do you eat food that’s past its expiration date if it still smells and looks fine?', 'What’s the most ridiculous thing you have bought?', 'What outdoor activity haven’t you tried, but would like to?', 'What app can you not believe someone hasn’t made yet?', 'If you were given 10 million dollars, how would you spend it?', 'What is your favorite color?', 'Do you prefer a hot day or cold day?', 'If you could live anywhere in the world, where would you live?', 'What is your most favorite word?', 'Can you speak in front of large groups of people?', 'How often do you procrastinate?', 'What is your favorite movie?', 'If you could have any superpower, what would it be?', 'If you had to die in any way, what way would it be?', 'What is your favorite fast food restaurant?', 'What languages do you wish you could speak?', 'What is the funniest word you know?', 'Who is your celebrity crush?', 'What was the best vacation you\'ve ever had?', 'What’s your Back in my day, we…?', 'If you could be any animal, what would you be?', 'What habit do you have now that you wish you started much earlier?', 'If you could change genders, would you?', 'What\'s the opposite of a koala?', 'Are you good at cooking?', 'What is the worst food you\'ve eaten?', 'What\'s about to get much better?', 'What brand are you most loyal to?', 'Are you a lucky or unlucky person?', 'What\'s your secret talent?', 'Tear gas makes people cry and laughing gas makes people giggle, what other types of gases do you wish existed?', 'What is your favorite environment?', 'What’s something that everyone agrees we should change, but somehow it never changes?', 'What trends are you tired of?', 'What is something that is cheap that you would pay more for?', 'What is your favorite bug?', 'What company do you hate most?', 'What word do you always misspell?', 'Do you take naps?']

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
