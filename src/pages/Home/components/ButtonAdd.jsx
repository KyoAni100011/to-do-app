import { GrAdd } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function ButtonAdd() {
  return (
    <div className="btn-add sticky text-right bottom-4">
      <Link
        to="/new-note"
        className="p-4 inline-block bg-blueberry text-white mr-4 rounded-xl outline-none"
      >
        <GrAdd />
      </Link>
    </div>
  );
}
