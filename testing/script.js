require('quick-easy-versioning');


const generatedVersions = versionGenerator.generateVersions();
const versionsWithDescriptions = versionGenerator.addDescriptions(generatedVersions);
versionGenerator.appendToFile(versionsWithDescriptions);