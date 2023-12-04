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
    const getGameNeedCounters = (game) => {

        //
        const maxRed   = [...game.matchAll(/(\d+)( red)/g)].reduce((a, c) => Math.max(a, parseInt(c[1], 10)), 0);
        const maxGreen = [...game.matchAll(/(\d+)( green)/g)].reduce((a, c) => Math.max(a, parseInt(c[1], 10)), 0);
        const maxBlue  = [...game.matchAll(/(\d+)( blue)/g)].reduce((a, c) => Math.max(a, parseInt(c[1], 10)), 0);

        //
        return [ maxRed, maxGreen, maxBlue ];

    }

    //
    let total = 0;

    //
    data.split('\n').forEach((game) => {
        const [ maxRed, maxGreen, maxBlue ] = getGameNeedCounters(game);
        total += maxRed * maxGreen * maxBlue;        
    });

    //
    console.log('Output', total);

});