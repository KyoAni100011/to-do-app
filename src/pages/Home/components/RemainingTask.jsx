import { BsCheck2 } from "react-icons/bs";

export default function RemainingTask() {
  return (
    <div className="completed-task task bg-white rounded-lg my-3">
      <div className="completed-task-wrapper flex justify-between p-4">
        <div className="icon-completed mr-3">
          <div className="icon-completed-wrapper p-1 rounded-full bg-green-600 inline-block">
            <BsCheck2 className="text-white text-sm" />
          </div>
        </div>
        <div className="content-completed text-sm">
          Somthing has been completet. Maybe it has bugs
        </div>
        <div className="time-task text-quick-silver font-semibold ml-1">
          May 15
        </div>
      </div>
    </div>
  );
}
