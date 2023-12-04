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
    const findFirstAndLastMatches = (input) => {

        //
        const needles = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];

        //
        const matches = [];

        //
        needles.forEach((needle) => {
            let pos = -1;
            do {
                pos = input.indexOf(needle, pos + 1);
                matches[pos] = needle;
            } while (pos !== -1);
        });
        
        //tidy up the matches so it is no longer a sparse array
        const matches2 = matches.filter(match => match !== undefined);
        
        //
        return [matches2.at(0), matches2.at(-1)];

    }

    //
    const convertWordToDigit = (input) => {
        return String(parseInt(input, 10) || [null, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].indexOf(input));
    }

    //
    const total = data.split('\n').reduce((total, line) => {

        //
        const [firstMatch, lastMatch] = findFirstAndLastMatches(line);

        //
        const firstDigit = convertWordToDigit(firstMatch);
        const lastDigit  = convertWordToDigit(lastMatch);

        //
        return total + parseInt(firstDigit + lastDigit, 10);

    }, 0);

    //
    console.log('Output', total)

});