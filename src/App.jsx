import { useEffect } from "react";
import "./App.css";
import Router from "./router/router";
import { useDispatch } from "react-redux";
import { setUser } from "./actions/userAction";
import { updateNote } from "./actions/noteAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const notes = JSON.parse(localStorage.getItem("notes"));
    dispatch(updateNote(notes));
    dispatch(setUser(user));
  }, []);

  return (
    <div className="App h-full mx-auto">
      <Router />
    </div>
  );
}

export default App;
