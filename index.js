// make a node module  program using regex to make every vaild type of version's, from 0.0.1 to 999.999.999, and add them to a file called validVer.json, each version should be on a new line.
// Include Alpha, Beta, Snap and Dev versions. under 1.0.0
// The version should be in the format "major.minor.patch"

const fs = require('fs');
const path = require('path');

module.exports = function() {
    const validVer = [];
    for (let major = 0; major < 1000; major++) {
        for (let minor = 0; minor < 1000; minor++) {
        for (let patch = 0; patch < 1000; patch++) {
            if (major < 1 && minor < 1 && patch < 1) {
            validVer.push(`${major}.${minor}.${patch}-Alpha`);
            validVer.push(`${major}.${minor}.${patch}-Beta`);
            validVer.push(`${major}.${minor}.${patch}-Snap`);
            validVer.push(`${major}.${minor}.${patch}-Dev`);
            } else {
            validVer.push(`${major}.${minor}.${patch}`);
            }
        }
        }
    }
    
    fs.writeFileSync(path.join(__dirname, 'validVer.json'), JSON.stringify(validVer, null, 2));
    };

    module.exports();

