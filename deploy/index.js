let fs = require('fs');
let yaml = require('js-yaml');

console.log("Starting Build");
try
{

    // load spec
    let raw = fs.readFileSync(__dirname + '/../course/config/spec.yaml');
    let spec = yaml.safeLoad(raw);
    console.log('✔ spec.yaml');

    // load hubs
    raw = fs.readFileSync(__dirname + '/../course/config/hubs.yaml');
    spec = yaml.safeLoad(raw);
    console.log('✔ hubs.yaml');
    

    // load questions
    //langs:
    let files = fs.readdirSync(__dirname + '/../course/config/questions');
    for (let f of files)
    {
        raw = fs.readFileSync(__dirname + '/../course/config/questions/' + f);
        spec = yaml.safeLoad(raw);
        console.log('✔ questions/' + f);    
    }

    console.log("Finished Build");
}
catch (e)
{
    console.error(e);
    process.exit(1);
}