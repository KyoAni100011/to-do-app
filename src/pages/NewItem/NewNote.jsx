import { useDispatch } from "react-redux";
import iconData from "../../assets/iconState.json";
import { addNote } from "../../actions/noteAction";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewNote() {
  const dispatch = useDispatch();
  const [noteData, setNoteData] = useState({
    title: "",
    state: "Important",
    message: "",
    date: "",
  });

  const handleChange = (e) => {
    var currentDate = new Date();

    var month = currentDate.toLocaleString("default", { month: "long" });
    var day = currentDate.getDate();

    var formattedDate = month + " " + day;

    setNoteData({
      ...noteData,
      [e.target.name]: e.target.value,
      date: formattedDate,
    });
  };

  const Cancel = () => {
    setNoteData({
      title: "",
      state: "Important",
      message: "",
      date: "",
    });
  };

  const Submit = () => {
    dispatch(addNote(noteData));
  };

  return (
    <div className="new-note">
      <div className="new-note-wrapper p-4">
        <div className="mb-4">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Write your title note
          </label>
          <input
            type="text"
            id="small-input"
            name="title"
            onChange={handleChange}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="input-item">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select the status
          </label>
          <select
            id="countries"
            name="state"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          >
            {iconData.slice(1).map((item, i) => (
              <option key={i} value={item.title}>
                {item.icon} {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="input-item">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            defaultValue={""}
            onChange={handleChange}
            required
          />
          <small></small>
        </div>
        <div className="mb-4">
          <button
            onClick={Submit}
            className="bg-blue-500 block w-full text-center py-3 rounded-md text-white font-semibold hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <div>
          <Link
            to="/to-do"
            onClick={Cancel}
            className="bg-red-500 block w-full text-center py-3 rounded-md text-white font-semibold hover:bg-red-600"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
