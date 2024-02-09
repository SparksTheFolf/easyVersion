// make a node module  program using regex to make every vaild type of version's, from 0.0.1 to 999.999.999, and add them to a file called validVer.json, each version should be on a new line.
// Include Alpha, Beta, Snap and Dev versions. under 1.0.0
// The version should be in the format "major.minor.patch"
// include main release versions, and pre-release versions as mentioned above.

const fs = require('fs');

const validVer = [];

module.exports = function () {
    for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
        for (let k = 0; k < 1000; k++) {
            if (i < 1) {
            validVer.push(`${i}.${j}.${k}-Alpha`);
            validVer.push(`${i}.${j}.${k}-Beta`);
            validVer.push(`${i}.${j}.${k}-Snap`);
            validVer.push(`${i}.${j}.${k}-Dev`);
            } else {
            validVer.push(`${i}.${j}.${k}`);
            }
        }
        }
    }
    fs.writeFileSync('validVer.json', JSON.stringify(validVer));
    };

module.exports();

