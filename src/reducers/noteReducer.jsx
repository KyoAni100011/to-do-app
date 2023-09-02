import * as noteActionTypes from "../actions/actionNoteType";

const initialState = {
  noteCompleted: [],
  noteUncompleted: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case noteActionTypes.ADD_NOTE:
      switch (action.payload.state) {
        case "Completed":
          state.noteCompleted.push(action.payload);
          break;
        default:
          state.noteUncompleted.push(action.payload);
          break;
      }
      return state;
    case noteActionTypes.UPDATE_NOTE_UNCOMPLETED:
      for (let index = 0; index < state.noteCompleted.length; index++) {
        const element = state.noteCompleted[index];
        if (element.id === action.payload.id) {
          state.noteCompleted[index] = action.payload;
          break;
        }
      }

      for (let index = 0; index < state.noteUncompleted.length; index++) {
        const element = state.noteUncompleted[index];
        if (element.id === action.payload.id) {
          state.noteUncompleted[index] = action.payload;
          break;
        }
      }

      return state;
    case noteActionTypes.UPDATE_NOTE_COMPLETED:
      for (let i = 0; i < state.noteUncompleted.length; i++) {
        if (state.noteUncompleted[i].id === action.payload.id) {
          state.noteUncompleted.splice(i, 1);
          break;
        }
      }
      action.payload["state"] = "Completed";
      state.noteCompleted.push(action.payload);
      return state;
    default:
      return state;
  }
};

export default noteReducer;
