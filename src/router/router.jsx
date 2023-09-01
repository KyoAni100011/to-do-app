import Welcome from "../pages/Welcome/Welcome";
import Home from "../pages/Home/Home";
import NewNote from "../pages/NewItem/NewNote";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Welcome />}></Route>
      <Route path="/to-do" element={<Home />}></Route>
      <Route path="/new-note" element={<NewNote />}></Route>
    </Routes>
  );
}
