const fs = require('fs');

// Load existing versions from versions.json
const existingVersions = require('./versions.json');

// Function to generate versions
function generateVersions() {
    const versions = [];
    
    // Main release versions
    for (let major = 0; major <= 999; major++) {
        for (let minor = 0; minor <= 999; minor++) {
            for (let patch = 1; patch <= 999; patch++) {
                versions.push(`${major}.${minor}.${patch}`);
            }
        }
    }

    // Pre-release versions
    for (let major = 0; major < 1; major++) {
        for (let minor = 0; minor < 1; minor++) {
            for (let patch = 0; patch < 999; patch++) {
                versions.push(`0.0.${patch}-alpha`);
                versions.push(`0.0.${patch}-beta`);
                versions.push(`0.0.${patch}-snap`);
                versions.push(`0.0.${patch}-dev`);
            }
        }
    }

    return versions;
}

// Add descriptions to versions
function addDescriptions(versions) {
    const versionsWithDescriptions = versions.map(version => ({
        version,
        description: existingVersions[version] || "New version added"
    }));

    return versionsWithDescriptions;
}

// Append versions to validVer.json
function appendToFile(versions) {
    const formattedVersions = versions.map(ver => JSON.stringify(ver)).join('\n') + '\n';

    fs.appendFile('validVer.json', formattedVersions, (err) => {
        if (err) throw err;
        console.log('Versions added to validVer.json');
    });
}

// Generate versions, add descriptions, and append to file
const generatedVersions = generateVersions();
const versionsWithDescriptions = addDescriptions(generatedVersions);
appendToFile(versionsWithDescriptions);

module.exports = {
    generateVersions,
    addDescriptions,
    appendToFile
};
