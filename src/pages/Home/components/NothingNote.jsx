import { Link } from "react-router-dom";
import icon from "../../../assets/icon_empty_note.svg";
export default function NothingNote() {
  return (
    <div className="nothing-note">
      <div className="icon my-12">
        <img src={icon} alt="icon_svg" className="h-full mx-auto"></img>
      </div>
      <div className="small_text mb-4 text-center">
        <p className="tracking-wide">Your task list for today looks empty</p>
      </div>
      <div className="btn-group">
        <Link
          to="/new-note"
          className="w-full block text-center py-3 rounded-lg text-white bg-blue-400 hover:bg-blue-600"
        >
          Add a note
        </Link>
      </div>
    </div>
  );
}
