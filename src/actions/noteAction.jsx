import * as noteActionType from "./actionNoteType";

const addNote = (note) => {
  return {
    type: noteActionType.ADD_NOTE,
    payload: note,
  };
};

const updateNoteUncompleted = (note) => {
  return {
    type: noteActionType.UPDATE_NOTE_UNCOMPLETED,
    payload: note,
  };
};

const updateNoteCompleted = (note) => {
  return {
    type: noteActionType.UPDATE_NOTE_COMPLETED,
    payload: note,
  };
};

const removeNote = (note) => {
  return {
    type: noteActionType.REMOVE_NOTE,
    payload: note,
  };
};

const updateNote = (note) => {
  return {
    type: noteActionType.UPDATE_NOTE,
    payload: note,
  };
};

export {
  addNote,
  updateNoteUncompleted,
  updateNoteCompleted,
  removeNote,
  updateNote,
};
