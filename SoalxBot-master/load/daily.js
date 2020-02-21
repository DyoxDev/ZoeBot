const INTERVAL = 86400000;
const CHANNEL = '616094371304964105';
// eslint-disable-next-line max-len
const MESSAGES = ['The world\'s largest motel is in San Luis Obispo.', 'To properly write adjectives in order, you would list them by amount, value, size, temperature, age, shape, color, origin, and material.', 'Scotland was one of the few countries able to hold off being conquered by the Romains in the first century A.D.', 'During your lifetime, you\'ll eat about 60,000 pounds of food, that\'s the weight of about 6 elephants!', 'Strawberries have more vitamin c than oranges.', 'All the platinum ever mined would fit into an average - sized living - room.', 'One out of 20 people have an extra rib.', 'The darker a pumpkin is, the longer it will last.', 'The inventor of Vaseline ate a spoonful of the stuff every morning.', '7, 000 new insect species are discovered every year.', 'In Brazil, Christmas is celebrated with fireworks.', 'Male monkeys lose the hair on their heads in the same way men do.', 'The average American / Canadian drinks about 600 sodas a year', 'More people use blue toothbrushes than red ones.', 'Flamingos pee on their legs to cool themselves off.', 'The right lung takes in more air than the left.', 'An elephant trunk has no bone but 40, 000 muscles.', 'America once issued a 5 - cent bill.', 'No high jumper has ever been able to stay off the ground for more than one second.', 'The lifespan of the common goldfish is over 20 years!', 'The Bible is the most - shoplifted book in the world.', 'No one knows how many people died during the sinking of the Titanic.', 'Barbie\'s full name is Barbara Millicent Roberts.', 'The symbol on the \'pound\' key(#) is called an octothorpe.', 'It was once against the law to slam your car door in a city in Switzerland!', 'More than 50 % of the people in the world have never made or received a telephone call.', 'You are more likely to get attacked by a cow than a shark.', 'Ketchup was sold in the 1830\'s as medicine.', 'Porcupines float in water!', 'Dolphins sleep with one eye open!', 'Natural gas has no smell.The odor is artificially added so that people will be able to identify leaks and take measures to stop them.', 'One in 500 humans has one blue eye and one brown eye.', 'Each year, the average family uses about 18, 000 gallons of water just to do its laundry!', 'A dime has 118 ridges around the edge, a quarter has 119.', 'Each day is longer than the previous on by 0.00000002 seconds which is 13 seconds each century!', 'Like fingerprints, everyone\'s tongue print is different!', 'A cubic yard of air weighs about 2 pounds at sea level.', 'A hard working adult sweats up to 4 gallons per day.', 'A snail can sleep for three years.', 'You can hear a blue whale\'s heartbeat from more than 2 miles away.', 'M & M stands for Mars and Murrie.', 'A baby puffin is called a "puffling."', 'Four times more people speak English as a foreign language than as a native one.', 'Coca - Cola was the first soft drink in space.', 'Fear of the number 13 is called triskaidekaphobia.', 'Shades of Darkness was originally called Scary Stories 2.', 'A $1 bill costs 5 cents to make.', 'Spotify\'s most streamed song is 24 years old.', 'The Crown Jewels contain the two biggest cut diamonds on Earth.', 'Baby sea otters can\'t swim.', 'There\'s a world record for the most world record titles.', 'Superman Didn’t Always Fly.', 'The first computer was invented in the 1940s.', 'The unicorn is the national animal of Scotland.', 'Bees sometimes sting other bees.', 'Kids ask 300 questions a day.', 'The healthiest place in the world is in Panama.', 'Pringles aren’t actually potato chips.', 'Dolphins have been trained to be used in wars.', 'Water makes different pouring sounds depending on its temperature.', 'Koalas have fingerprints.', 'Humans are just one of the estimated 8.7 million species on Earth.', 'Rolls - Royce makes the most expensive car in the world.', 'The Legend of the Loch Ness Monster goes way back to nearly 1, 500 years ago.', 'Chinese police use geese squads.', 'Some planets produce diamond rain.', 'Sharks can live for five centuries.', 'You can sneeze faster than a cheetah can run.', 'Saudi Arabia imports camels from australia.', 'You are born with 300 bones.', 'France has a dozen time zones.', 'In the average lifetime, a person will walk the equivalent of 5 times around the equator.', 'Odontophobia is the fear of teeth.', 'The surface area of an average - sized brick is 79 cm squared.', 'Cats sleep 16 to 18 hours per day.', 'The most common name in the world is Mohammed.', 'gt_c#7841 developed this amazing bot.', 'When you die your hair still grows for a couple of months.', 'The most money ever paid for a cow in an auction was $1.3 million.', 'There are 10 human body parts that are only 3 letters long (eye hip arm leg ear toe jaw rib lip gum).', 'A skunk\'s smell can be detected by a human a mile away.', 'Elephants are the only mammals that can\'t jump.', 'Diet Coke was invented in 1982.', 'When snakes are born with two heads, they fight each other for food.', 'There are twice as many kangaroos in Australia as there are people.The kangaroo population is estimated at about 40 million.', 'Shades of Darkness was inspired by strongjohnfgamer\'s game, Scary Stories.', 'The Australian $5 to $100 notes are made of plastic.', 'The average person makes about 1, 140 telephone calls each year.', 'You burn more calories sleeping than you do watching TV.', 'A lion\'s roar can be heard from five miles away.', 'The average person spends about 2 years on the phone in a lifetime.', 'The fist product to have a barcode was Wrigley\'s gum.', 'The largest number of children born to one woman is recorded at 69.', 'DyoxDev and strongjohnfgamer are the original developers of Shades of Darkness.', 'The plastic things on the end of shoelaces are called aglets.', 'A 100 pound person(45 kg) would weigh 38 pounds(17 kg) on Mars!', 'Starfish have no brains!', 'An octopus has 3 hearts.', 'Flamingos bend their legs at the ankle, not the knee.', 'Ice pops were invented by an 11 - year - old by accident.', 'It’s impossible to hum while holding your nose.'];

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
