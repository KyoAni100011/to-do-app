import * as noteActionTypes from "../actions/actionNoteType";

const initialState = {
  noteCompleted: [],
  noteUncompleted: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case noteActionTypes.ADD_NOTE:
      console.log(action.payload);
      switch (action.payload.state) {
        case "Completed":
          state.noteCompleted.push(action.payload);
          break;
        default:
          state.noteUncompleted.push(action.payload);
          break;
      }
    default:
      return state;
  }
};

export default noteReducer;
