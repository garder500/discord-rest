// Increment the version id in the package.json file
const fs = require('fs');
const path = require('path');

// Look for the package.json file
const packagePath = path.join(__dirname, '..', 'package.json');
// Open the file
const packageFile = fs.readFileSync(packagePath, 'utf8');
// Parse the file
const packageJson = JSON.parse(packageFile);

function generateRandomUid() {
    const randomString = Math.random().toString(36).substring(2, 10);
    return randomString;
}


// Check actual version number and check if the dev flag is set
if(packageJson.version.indexOf('-dev') === -1) {
    // Split the version number
    const versionParts = packageJson.version.split('-')
    // Set new variables to check each part of the version number
    let versionDev = versionParts[0];
    let devId = Date.now() + "-" + generateRandomUid();
    // Write the new version number inside the package.json file
    packageJson.version = versionDev + '-' + devId;
    // Write the new version number inside the package.json file
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
}else{
    // Increment the dev number
    const versionParts = packageJson.version.split('.');
    // Set new variables to check each part of the version number
    let major = versionParts[0];
    let minor = versionParts[1];
    let patch = versionParts[2];
    // increment the patch number
    patch++;
    // Write the new version number inside the package.json file
    packageJson.version = major + '.' + minor + '.' + patch;
    // Write the new version number inside the package.json file
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
}