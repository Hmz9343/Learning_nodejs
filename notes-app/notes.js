const fs = require('fs');
const Chalk = require('chalk');

const getNotes = () => {
    console.log('your notes...');
}

const addNote = (title, body) => {
    const notes = loadNotes();
    //console.log(notes)
    const duplicateNote = notes.filter(function(note) {
        return note.title === title;
    })
    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(Chalk.green("New Note Added successfully."));
    } else {
        console.log(Chalk.red("Notes title already taken."))
    }

}

const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJson);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title;
    });

    if (notes.length > notesToKeep.length) {
        console.log(Chalk.green(`Note with title: ${title} is succesfully removed.`));
        saveNotes(notesToKeep);
    } else {
        console.log(Chalk.red("Note with title is note present."))
    }
}

const loadNotes = () => {
    try {
        const fileBuffer = fs.readFileSync('notes.json');
        const fileJson = fileBuffer.toString();
        return JSON.parse(fileJson);
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(Chalk.inverse('Your notes.'));
    notes.forEach((note) => {
        console.log(note.title);
        console.log(note.body);
    });
}

const readNotes = (title) => {
    const notes = loadNotes();

    const find = notes.filter((note) => {
        return note.title == title;
    });

    if (find.length > 0) {
        console.log(Chalk.green("Note:"));
        console.log(find.title);
        console.log(find.body);
    } else {
        console.log(Chalk.red("Note present"));
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}