import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome h-full flex items-center justify-center text-center">
      <div className="welcome-wrapper">
        <div className="logo text-center mb-5">
          <div className="logo-wrapper p-4 inline-block bg-blueberry rounded-xl">
            <FaCheck className="text-white" />
          </div>
        </div>
        <div className="banner-hero">
          <h3 className="text-2xl font-normal">Welcome to</h3>
          <h1 className="font-black text-xl mb-3">My Todo</h1>
          <p className="text-sm text-gray mb-20 w-5/6 mx-auto">
            My Todo helps you stay organized and perform your tasks much better
          </p>
        </div>
        <div className="btn-group">
          <div className="btn-demo mb-4">
            <Link
              to="/login"
              className="py-4 px-12 font-bold rounded-2xl text-sm bg-blue-200 text-royal-blue outline-none"
            >
              Try demo
            </Link>
          </div>
          <div className="btn-not-now">
            <button className="py-4 px-12 font-bold rounded-2xl text-sm text-royal-blue outline-none focus:bg-blue-600 focus:text-white">
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
