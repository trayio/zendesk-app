/*
* A simple script to take the `long_description` and put it into the 
* `translations/en.json` file.
*/
const fs = require('fs');



const keysToCompile = ['long_description', 'installation_instructions'];

keysToCompile.forEach((key) => {


    console.log(`Compiling ${key}.md...`);


    // Read the existing translation
    let translation;
    try {
        const json = fs.readFileSync(`${__dirname}/../app/translations/en.json`).toString();
        translation = JSON.parse(json);
    } catch (e) {
        throw e;
    }


    // Set the new description based on the markdown
    const description = fs.readFileSync(`${__dirname}/../app/copy/${key}.md`).toString();
    translation.app[key] = description;


    // Update the new JSON pfile
    const prettyJson = JSON.stringify(translation, null, '  ');
    fs.writeFileSync(`${__dirname}/../app/translations/en.json`, prettyJson);


    console.log(`Compiled ${key}.md: SUCCESS`);
    console.log('');

});


