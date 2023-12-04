//
const fs = require('fs');

//
fs.readFile(process.argv[2], 'utf8', (err, data) => {

    //
    if (err) {
        console.error(`Error reading file: ${err}`);
        return;
    }

    //
    const maxRed   = 12;
    const maxGreen = 13;
    const maxBlue  = 14;

    //
    const validGames = [];

    //
    const isGameValid = (game) => {

        //parse the game into hands
        const hands = game.split(';');

        //
        for (var i = 0; i < hands.length; i++) {

            //
            const handRed   = parseInt(hands[i].match(/(\d+) red/), 10);
            const handGreen = parseInt(hands[i].match(/(\d+) green/), 10);
            const handBlue  = parseInt(hands[i].match(/(\d+) blue/), 10);

            //
            if (handRed > maxRed || handGreen > maxGreen || handBlue > maxBlue) {
                return false;
            }

        }

        //
        return true;

    }

    //
    data.split('\n').forEach((game) => {
        if (isGameValid(game)) {
            validGames.push(parseInt(game.match(/^Game (\d+)/)[1], 10));
        }
    });

    //
    console.log('Output', validGames.reduce((a, c) => a + c, 0));

});