
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { writeFileSync } from 'fs';

const { AppServerModuleNgFactory } = require('./dist-server/main');

console.log('***', AppServerModuleNgFactory);

renderModuleFactory(AppServerModuleNgFactory, {
    document: '<app-root></app-root>',
    url: '/',
})
    .then(html => {
        console.log('Pre-rendering success');
        writeFileSync('./prerender.html', html);
    })
    .catch(error => {
        console.log('Error', error);
    })
    ;