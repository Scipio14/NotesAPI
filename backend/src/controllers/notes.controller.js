const notesCtrl = {};
const Note = require("../models/Note");

//Pedir todas las notas
notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes });
};

//Crear una nueva nota
notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author,
  });
  await newNote.save();
  await res.status(201).json({ message: "Note Saved" });
};

//Obtener una única nota a través del ID
notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  //console.log(req.params.id);
  res.json(note);
};

//Actualizar una nota en la BD a través de un ID
//Eliminar una nota de la BD a través de un ID
//Para poder actualizar una nota necesitos dos cosas
//1. el id de la nota y en segundo lugar los datos a actualizar
notesCtrl.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findByIdAndUpdate(req.params.id, {
    title,
    author,
    content,
  });
  res.json({ message: "Note Updated" });
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note Deleted" });
};

module.exports = notesCtrl;
