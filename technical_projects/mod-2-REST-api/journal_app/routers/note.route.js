const express = require("express");
const noteRouter = express.Router();

const { noteCtrl } = require("../controllers/index");

noteRouter.get("/", noteCtrl.getAll);
noteRouter.post("/", noteCtrl.addNote);

noteRouter.get("/:noteId", noteCtrl.getNote);
noteRouter.put("/:noteId", noteCtrl.updateNote);
noteRouter.delete("/:noteId", noteCtrl.deleteNote);

module.exports = noteRouter;
