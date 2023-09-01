import * as noteActionType from "./actionNoteType";

const addNote = (note) => {
  return {
    type: noteActionType.ADD_NOTE,
    payload: note,
  };
};

export { addNote };
