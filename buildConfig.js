const fs = require('fs');
const path = require('path');

let defaultConfig = JSON.stringify(require('./raw-default-config'));

const configs = [
    {
        placeholder: '$MM_SQLSETTINGS_DATASOURCE',
        value: process.env.MM_SQLSETTINGS_DATASOURCE,
    },
    {
        placeholder: '$ELASTIC_URL',
        value: process.env.ELASTIC_URL,
    },
    {
        placeholder: '$SMTPServer',
        value: process.env.SMTPServer,
    },
];

for (let { placeholder, value } of configs) {
    console.log(placeholder, value);

    defaultConfig = defaultConfig.replace(placeholder, value || '');
}

fs.writeFileSync(
    __dirname + '/default-config.json',
    JSON.stringify(JSON.parse(defaultConfig), null, 4),
);
