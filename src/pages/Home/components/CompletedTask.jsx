export default function CompletedTask() {
  return (
    <div className="completed-task bg-light-silver rounded-lg">
      <div className="completed-task-wrapper flex justify-between p-4">
        <div className="icon-completed mr-3">🟢</div>
        <div className="content-completed text-sm">
          Somthing has been completet. Maybe it has bugs
        </div>
        <div className="time-task text-quick-silver flex-grow font-semibold">
          May 15
        </div>
      </div>
    </div>
  );
}
