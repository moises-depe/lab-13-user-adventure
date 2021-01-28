export const zangief = {
    id: 'zangief',
    title: 'The red cyclone!',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'zangief.jpg',
    description: `
        As your going on a casual stroll down the street you come across zangief the red cyclone, which is not to happy to see you after losing a fight to ken. He asks you to give him all your coins at one!! if not "You WIll pay" what do you do next??
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing these specific fighter is are not very bright, you offer to go buy him a
            steak dinner from the local downtown market. He gives you 50 coins for meals
            that you damn well know will never be delivered. Better hope you dont come across him any time soon! 
        `,
        hp: 0,
        coins: 50
    }, {
        id: 'fight',
        description: 'fight or flight!',
        result: `
            Knowing your one of the toughest fighters in the world, you decide to take on the red cyclone. You throw a upper cut & tried to follow up with a hadouken, As suddenly zangief goes into a rage & grabs you following up with a spinnning piledriver. You are serverly hurt, he took 50 hp away.
        `,
        hp: -30,
        coins: 0
    }, {
        id: 'run',
        description: 'Run away like good forest gump',
        result: `
            As you make a dash down the street to save your life, the red cyclone hits your with a flying body press. He flattens you like a panckage causing 50
            causing 50 hp damage.
        `,
        hp: -50,
        coins: 0
    }]
};




const bison = {
    id: 'bison',
    title: 'General M. Bison',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'bison.jpg',
    description: `
        You end up going for a jog near a rural valley, as you come across a few men layed on the floor! you continue to run minding your business as you then come across the infamous Captain Bison which does not seem to be trilled to see you as you helped chun li escape his capture last time you guys crossed paths. As he prepares to fight, you have a only two chooses Fight or Flight". What do you do next?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the valley',
        result: `
            You decided running was the best option so you start to run as fast as you can down the hill, as The captain hovers over you he fly as out of nowhere chun li jumps out & starts combating M. Bison. luckly you are able to run away safely & happen to find 15 coins at the bottom of the hill. 
        `,
        hp: 0,
        coins: 15
    }, {
        id: 'fight',
        description: 'fight!',
        result: `
            As he says "Now, face the mighty Bison" you decide to hit him with a haduken. He counters back with a hell's warp, which you were able to dodge & hit him with a Shoryuken knocking him out. He drops 55 coins which you proceed to take & continue to finish your morning jog
        `,
        hp: 0,
        coins: 55
    }, {
        id: 'join',
        description: 'Offer to form a alliance',
        result: `
            You offer to form alliance, even if it will go against everything you believe in. The Captain continues on by saying "what do you have to offer", you dig deep inside your self to pull out the politician in you & rant about empty promises you know damn well ain't going to happen. Bison was highly happy with what you promised & provided you with 15 hp and 50 coins, better hope he does not call on your services anytime soon!
        `,
        hp: 15,
        coins: 50
    }]
};

const trophies = {
    id: 'trophies',
    title: 'A coinsen trophies',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['zangief', 'bison'],
    image: 'trophies-chests.png',
    description: `
        
    `,
    choices: [{
        id: 'champions trophy',
        description: 'Addicted To Winning',
        result: 'You get 100 coins, but sacrificed 30 hp hope it does not finish you!',
        hp: -30,
        coins: 100
    }, {
        id: 'lucky trophy',
        description: 'Lucky We Met!',
        result: 'Oh no! luck was not on your side today. The trophy exploded as you grabbed it, lost 80 hp! Better luck next time!!',
        hp: -80,
        coins: 0
    }, {
        id: 'risky trophy',
        description: 'Go Out With A Bang',
        result: 'Chances make champions, you receive 50 hp & 50 coins.',
        hp: 50,
        coins: 50
    }]
};

const fighter = [
    zangief,
    bison,
    trophies,
];

export default fighter;