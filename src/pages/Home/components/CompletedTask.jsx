export default function CompletedTask({ icon, title, state, text, time }) {
  return (
    <div className="completed-task task bg-light-silver rounded-lg">
      <div className="time-task text-quick-silver font-semibold block w-full">
        <div className="completed-task-completed p-4">
          <div className="mb-3">
            {time} -{" "}
            <span className="font-bold text-md text-black inline">{title}</span>
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
