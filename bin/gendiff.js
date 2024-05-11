#!/usr/bin/env node
const {Command} = require('commander');
const {version} = require('../package.json')

const programm = new Command();

programm
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version(version)
    .helpOption( '-h, --help', 'output usage information')

programm.parse()