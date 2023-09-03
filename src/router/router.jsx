import Welcome from "../pages/Welcome/Welcome";
import Home from "../pages/Home/Home";
import NewNote from "../pages/NewItem/NewNote";
import NoteDetail from "../pages/NoteDetail/NoteDetail";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Welcome />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route path="/to-do" element={<Home />}></Route>
      <Route path="/to-do/:slug" element={<NoteDetail />}></Route>
      <Route path="/new-note" element={<NewNote />}></Route>
    </Routes>
  );
}
