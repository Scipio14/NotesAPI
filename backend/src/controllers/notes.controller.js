const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({ message: [] });
notesCtrl.createNote = (req, res) => res.json({ message: "Note Saved" });

notesCtrl.getNote = (req, res) => res.json({ title: "epepemdjsds" });
notesCtrl.updateNote = (req, res) => res.json({ message: "Note Updated" });
notesCtrl.deleteNote = (req, res) => res.json({ message: "Note deleted" });

module.exports = notesCtrl;
