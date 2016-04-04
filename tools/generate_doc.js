"use strict";

const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

jsdoc2md({src: './node_modules/kittik-animation-*/**/*.js'}).pipe(fs.createWriteStream('./doc/api/Animation.md'));
jsdoc2md({src: './node_modules/kittik-shape-*/**/*.js'}).pipe(fs.createWriteStream('./doc/api/Shape.md'));
jsdoc2md({src: './node_modules/kittik-cursor/**/*.js'}).pipe(fs.createWriteStream('./doc/api/Cursor.md'));
jsdoc2md({src: './lib/**/*.js'}).pipe(fs.createWriteStream('./doc/api/Kittik.md'));
