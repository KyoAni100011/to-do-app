import { useDispatch } from "react-redux";
import { removeNote } from "../../../actions/noteAction";
import { AiTwotoneDelete } from "react-icons/ai";

export default function CompletedTask({ id, icon, title, state, text, time }) {
  const dispatch = useDispatch();
  const deleteNote = () => {
    dispatch(removeNote({ id }));
  };

  return (
    <div className="completed-task task bg-light-silver rounded-lg my-3">
      <div className="time-task text-quick-silver font-semibold block w-full">
        <div className="completed-task-completed p-4">
          <div className="mb-3 flex justify-between">
            <div className="mb-3">
              {time} -{" "}
              <span className="font-bold text-md text-black inline">
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
          <div className="completed-task-inner flex">
            <div className="icon-completed mr-3">{icon}</div>
            <div className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
