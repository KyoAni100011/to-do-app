import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import iconData from "../../assets/iconState.json";
import {
  updateNoteCompleted,
  updateNoteUncompleted,
} from "../../actions/noteAction";

export default function NoteDetail() {
  const { slug } = useParams();
  const notes = useSelector((state) => state.note);
  const dispatch = useDispatch();
  const [noteDetailData, setNoteDetailData] = useState({});
  const [isEdit, setEdit] = useState(false);
  const resultIcon = {};

  iconData.forEach((item) => {
    resultIcon[item.title] = item.icon;
  });

  const Submit = () => {
    if (isEdit) {
      dispatch(updateNoteUncompleted(noteDetailData));
      alert("Update successfully");
    }
    setEdit(!isEdit);
  };

  const Completed = (e) => {
    dispatch(updateNoteCompleted(noteDetailData));
  };

  useEffect(() => {
    if (slug) {
      const noteData = notes.noteUncompleted.find((item) => item.id === slug);
      if (noteData) {
        setNoteDetailData(noteData);
      }
    }

    const textarea = document.getElementById("autoExpand");
    const textareaMessage = document.getElementById("autoExpandMessage");

    textarea.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });

    textareaMessage.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  }, [slug, notes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteDetailData({
      ...noteDetailData,
      [name]: value,
    });
  };

  return (
    <div className="note-detail">
      <div className="note-detail-wapper p-4">
        <header className="flex justify-between">
          <div className="time text-sm text-quick-silver font-semibold">
            {noteDetailData?.date}
          </div>
          <div className="iconState">
            <div className="form-group">
              <select
                className="form-control appearance-none focus:outline-none"
                name="state"
                disabled={!isEdit}
                onChange={handleChange}
              >
                <option selected value={noteDetailData?.state}>
                  {resultIcon[noteDetailData?.state]} {noteDetailData?.state}
                </option>
                {Object.keys(resultIcon).map((item, i) => {
                  return item !== noteDetailData?.state &&
                    item != "Completed" ? (
                    <option key={i} value={item}>
                      {resultIcon[item]} {item}
                    </option>
                  ) : (
                    ""
                  );
                })}
              </select>
            </div>
          </div>
        </header>
        <div className="title mb-4 mt-3">
          <textarea
            rows="1"
            defaultValue={noteDetailData?.title}
            className="text-3xl w-full focus:outline-none font-bold break-words m-0 p-0 border-none overflow-hidden resize-none"
            disabled={!isEdit}
            id="autoExpand"
            name="title"
            onChange={handleChange}
          ></textarea>
        </div>
        <main className="mb-4">
          <textarea
            rows="5"
            defaultValue={noteDetailData?.message}
            className="text-xl w-full focus:outline-none break-words m-0 p-0 border-none overflow-hidden resize-none"
            disabled={!isEdit}
            id="autoExpandMessage"
            name="message"
            onChange={handleChange}
          ></textarea>
        </main>
        <div className="group-btn">
          <button
            onClick={Submit}
            className={`mb-4 block w-full py-3 font-bold text-white rounded-lg ${
              isEdit ? "bg-green-600" : "bg-yellow-500"
            }`}
          >
            {!isEdit ? "Update" : "Save"}
          </button>
          <Link
            to="/to-do"
            onClick={Completed}
            className="block text-center mb-4 w-full py-3 bg-blue-600 text-white font-bold rounded-lg"
          >
            Completed
          </Link>
          <Link
            to="/to-do"
            className="text-center block w-full py-3 bg-blue-600 text-white font-bold rounded-lg"
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}
