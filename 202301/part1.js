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
    const total = data.split('\n').reduce((total, line) => {
        const digits = line.replace(/[^0-9]/g, '');
        return total + parseInt(digits.at(0) + digits.at(-1), 10);
    }, 0);

    //
    console.log('Output', total)

});