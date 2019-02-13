const fs = require('fs');

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

console.log(__dirname + '/default-config.json');
fs.writeFileSync(__dirname + '/default-config.json', JSON.stringify(parsedConfig, null, 4));
fs.writeFileSync(__dirname + '/default-config-2.json', JSON.stringify(parsedConfig, null, 4));
