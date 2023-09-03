import { useSelector } from "react-redux";

export default function Header() {
  const currentDate = formatDateToCustomFormat();
  const userFromRedux = useSelector((state) => state.user.user);
  const user = userFromRedux || JSON.parse(localStorage.getItem("user"));
  function formatDateToCustomFormat() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return `${day} ${month} ${year}`;
  }

  const logOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.replace("/login");
    alert("You are logged out!");
  };

  return (
    <header className="mb-4">
      <div className="title">
        <h1 className="block text-center font-extrabold text-xl">My Todo</h1>
      </div>
      <div className="current-date text-center my-3 text-quick-silver">
        {currentDate}
      </div>
      <div className="text-center mb-4">
        Hello <span className="text-blue-400 font-bold">{user?.username}!</span>
      </div>
      <div className="text-center text-blue-400 font-bold cursor-pointer">
        <a href="#" onClick={logOut}>
          Logout
        </a>
      </div>
    </header>
  );
}
