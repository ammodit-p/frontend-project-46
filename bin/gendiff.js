#!/usr/bin/env node
const {Command} = require('commander');
const {version} = require('../package.json')
const path = require('path');
const readFile = require('../src/readFile');

const programm = new Command();

programm
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version(version)
    .helpOption( '-h, --help', 'output usage information')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format', 'output format')
    .action((filepath1, filepath2 ) => {
        const currentDir = process.cwd()
        const firstJson = readFile(path.resolve(currentDir, filepath1))
        const secondJson = readFile(path.resolve(currentDir, filepath2))
    })

programm.parse()