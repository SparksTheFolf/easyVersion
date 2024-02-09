// Make a node.js module that make it easy to track versions of your project
// This module should have a function that returns the current version of your project
// The versions should be stored in a file called version.json
// The version should be a string
// The version should be in the format "major.minor.patch"

exports.version = function() {
    var version = require('./version.json');
    return version.major + '.' + version.minor + '.' + version.patch;
    }
