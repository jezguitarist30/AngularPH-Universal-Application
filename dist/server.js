const path = require('path');
const fs = require('fs');
const express = require('express');
const compression = require('compression');
const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
const core = require('@angular/core');
require('zone.js/dist/zone-node');

core.enableProdMode();

const app = express();
const port = process.env.PORT || 3000;
const browserPath = path.join(__dirname, 'browser');
const serverPath = path.join(__dirname, 'server');

var hash;
fs.readdirSync(serverPath).forEach(file => {
    if (file.startsWith('main')) {
        hash = file.split('.')[1];
    }
});


const AppServerModuleNgFactory = require('./server/main.' + hash + '.bundle').AppServerModuleNgFactory;

const template = fs.readFileSync(path.join(browserPath, 'index.html')).toString();

app.engine('html', (_, options, callback) => {
    const opts = { document: template, url: options.req.url };

    renderModuleFactory(AppServerModuleNgFactory, opts)
        .then(html => callback(null, html));
});

app.set('port', port);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'browser'));

app.use('/', express.static(browserPath, { index: false, maxAge: 30 }));

app.get('/*', (req, res) => {
    res.render('index', {
        req: req
    });
});

app.listen(port, function () {
    console.log(`Listening at ${port}`);
});