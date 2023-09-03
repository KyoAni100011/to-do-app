import * as noteActionTypes from "../actions/actionNoteType";

const initialState = {
  noteCompleted: [1],
  noteUncompleted: [1],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case noteActionTypes.ADD_NOTE:
      // Kiểm tra nếu state.noteUncompleted là undefined, thì khởi tạo nó thành một mảng rỗng
      const noteUncompleted = state.noteUncompleted || [];
      // Tạo một bản sao của trạng thái hiện tại và cập nhật mảng noteUncompleted
      const newState = {
        ...state,
        noteUncompleted: [...noteUncompleted, action.payload],
      };
      // Trả về trạng thái mới
      localStorage.setItem("notes", JSON.stringify(newState));
      return newState;

    case noteActionTypes.UPDATE_NOTE_UNCOMPLETED:
      const newStateUpdateUncompleted = { ...state };

      const updatedUncompleted = newStateUpdateUncompleted.noteUncompleted.map(
        (note) => (note.id === action.payload.id ? action.payload : note)
      );

      newStateUpdateUncompleted.noteUncompleted = updatedUncompleted;

      localStorage.setItem("notes", JSON.stringify(newStateUpdateUncompleted));

      return newStateUpdateUncompleted;

    case noteActionTypes.UPDATE_NOTE_COMPLETED:
      const newStateUpdateCompleted = { ...state };
      const noteCompleted = state.noteCompleted || [];

      console.log(newStateUpdateCompleted);

      const uncompletedAfterRemoval =
        newStateUpdateCompleted.noteUncompleted.filter(
          (note) => note.id !== action.payload.id
        );

      action.payload.state = "Completed";
      newStateUpdateCompleted.noteUncompleted = uncompletedAfterRemoval;
      noteCompleted.push(action.payload);
      newStateUpdateCompleted.noteCompleted = noteCompleted;

      localStorage.setItem("notes", JSON.stringify(newStateUpdateCompleted));

      return newStateUpdateCompleted;

    case noteActionTypes.REMOVE_NOTE:
      const newStateRemove = { ...state };

      const updatedCompletedAfterRemoval = newStateRemove.noteCompleted.filter(
        (note) => note.id !== action.payload.id
      );

      const updatedUncompletedAfterRemoval =
        newStateRemove.noteUncompleted.filter(
          (note) => note.id !== action.payload.id
        );

      newStateRemove.noteCompleted = updatedCompletedAfterRemoval;
      newStateRemove.noteUncompleted = updatedUncompletedAfterRemoval;

      localStorage.setItem("notes", JSON.stringify(newStateRemove));

      return newStateRemove;

    case noteActionTypes.UPDATE_NOTE:
      return { ...action.payload };
    default:
      return state;
  }
};

export default noteReducer;
