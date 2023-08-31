import { GrAdd } from "react-icons/gr";

export default function ButtonAdd() {
  return (
    <div className="btn-add sticky text-right bottom-4">
      <button className="p-4 bg-blueberry text-white mr-4 rounded-xl outline-none">
        <GrAdd />
      </button>
    </div>
  );
}
