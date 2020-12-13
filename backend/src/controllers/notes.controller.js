const notesCtrl = {};
const Note = require("../models/Note");

//Pedir todas las notas
notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes });
};

//Crear una nueva nota
notesCtrl.createNote = (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author,
  });
  console.log(newNote);

  res.status(201).json({ message: "Note Saved" });
};

notesCtrl.getNote = (req, res) => res.json({ title: "epepemdjsds" });
notesCtrl.updateNote = (req, res) => res.json({ message: "Note Updated" });
notesCtrl.deleteNote = (req, res) => res.json({ message: "Note deleted" });

module.exports = notesCtrl;
