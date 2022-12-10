"use strict";
const Note = require("../models/schema");

// Note control functions
// Get all notes
const getAll = async (req, res, next) => {
  try {
    const notes = await Note.find({ user: req.user._id });
    return res.status(200).json(notes);
  } catch (err) {
    return next(err);
  }
};

// Create a note
const addNote = async (req, res, next) => {
  const note = new Note({
    title: req.body.title,
    body: req.body.body,
  });
  
  note.user = req.user._id;
  try {
    const newNote = await note.save();
    return res.status(200).json(newNote);
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

// Get a note
const getNote = async (req, res, next) => {
  try {
    const note = await Note.findOne({
      _id: req.params.noteId,
      user: req.user._id,
    });
    return res.status(200).json(note);
  } catch (err) {
    res.status(404);
    return next(new Error("Entry not found!!"));
  }
};

// Update a note
const updateNote = async (req, res, next) => {
  try {
    const note = await Note.findOne({
      _id: req.params.noteId,
      user: req.user._id,
    });

    note.title = req.body.title;
    note.body = req.body.body;

    const updatedNote = await note.save();
    return res.status(200).json(updatedNote);
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

// Delete a note
const deleteNote = async (req, res, next) => {
  try {
    const noteToDelete = await Note.findOneAndDelete({
      _id: req.params.noteId,
      user: req.user._id,
    });
    return res.status(200).json(noteToDelete);
  } catch (err) {
    res.status(404);
    return next(err);
  }
};

exports = module.exports = {
  getAll,
  addNote,
  getNote,
  updateNote,
  deleteNote,
};
