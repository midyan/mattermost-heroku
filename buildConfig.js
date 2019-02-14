const fs = require('fs');

const configPath = __dirname + '/default-config.json';

let defaultConfig = JSON.stringify(require('./raw-default-config'));

const configs = [
    {
        placeholder: '$MM_SQLSETTINGS_DATASOURCE',
        value: process.env.MM_SQLSETTINGS_DATASOURCE || 'HELLO',
    },
    {
        placeholder: '$ELASTIC_URL',
        value: process.env.ELASTIC_URL,
    },
    {
        placeholder: '$SMTPServer',
        value: process.env.MM_EMAILSETTINGS_SMTPSERVER,
    },
];

for (let { placeholder, value } of configs) {
    defaultConfig = defaultConfig.replace(placeholder, value || 'HELLO');
}

const parsedConfig = JSON.parse(defaultConfig);

console.log(__dirname);

console.log(process.cwd());

console.log(fs.readdirSync(__dirname));
fs.writeFileSync(configPath, JSON.stringify(parsedConfig, null, 4));

console.log('____________');
console.log(__dirname);

console.log(process.cwd());

console.log(fs.readdirSync(__dirname));

if (!fs.existsSync(configPath)) throw new Error('default config was not created!');
