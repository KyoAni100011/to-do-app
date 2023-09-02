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

export { addNote, updateNoteUncompleted, updateNoteCompleted };
