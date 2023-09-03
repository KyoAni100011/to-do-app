import { Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeNote } from "../../../actions/noteAction";

export default function RemainingTask({ id, icon, title, state, text, time }) {
  const dispatch = useDispatch();
  const deleteNote = () => {
    dispatch(removeNote({ id }));
  };

  return (
    <div className="completed-task task bg-white rounded-lg my-3">
      <div className="time-task text-quick-silver font-semibold block w-full">
        <div className="completed-task-completed p-4">
          <div className="mb-3 flex justify-between">
            <div>
              {time} -{" "}
              <span className="font-bold text-md text-black inline w-2/3 truncate">
                {title}
              </span>
            </div>
            <div>
              <button
                onClick={deleteNote}
                className="z-10 p-1 bg-red-600 rounded-full"
              >
                <AiTwotoneDelete className="text-lg text-white  " />
              </button>
            </div>
          </div>
          <Link to={`/to-do/${id}`}>
            <div className="completed-task-inner flex">
              <div className="icon-completed mr-3">{icon}</div>
              <div className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                {text}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
