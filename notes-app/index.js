const notesObject = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: "Adding notes...",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notesObject.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command: 'remove',
    description: 'Removing notes from file.',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notesObject.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    description: 'Reading from file',
    handler: function(argv) {
        notesObject.readNotes(argv.title);
    }
});

yargs.command({
    command: 'list',
    description: 'Listing complete file.',
    handler: function() {
        notesObject.listNotes();
    }
});

console.log(yargs.argv)
console.log(chalk.green.bold("Success!!"));