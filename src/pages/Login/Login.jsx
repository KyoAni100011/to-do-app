import { useState } from "react";
import logo from "../../assets/time.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../actions/userAction";

export default function Login() {
  const [isInput, setInput] = useState(false);
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const [user, setDataUser] = useState({
    username: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setDataUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const Login = () => {
    dispatch(
      setUser({
        user,
      })
    );
    localStorage.setItem("token", JSON.stringify("token"));
    localStorage.setItem("user", JSON.stringify(user));
    naviagte("/to-do");
  };

  return (
    <div className="authentication">
      <div className="p-4">
        <div className="logo mb-4">
          <img src={logo} />
        </div>
        <div className="slogan text-center text-3xl mb-8">
          <p>
            Tomorrow never comes{" "}
            <strong className="text-blue-400">Let’s do</strong> it today!
          </p>
        </div>
        <div className="btn-group">
          {isInput ? (
            <div>
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                What should I call you?
              </label>
              <input
                type="text"
                id="small-input"
                name="username"
                onChange={handleChange}
                className="block w-full mb-2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Full name"
              />
              <button
                to="/to-do"
                className="w-full bg-blue-400 py-3 text-white rounded-lg text-center"
                onClick={Login}
              >
                I'm ready
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => setInput(true)}
                className="w-full bg-blue-400 py-3 text-white rounded-lg text-center"
              >
                Let's do it
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
