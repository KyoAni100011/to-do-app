import Header from "./components/Header";
import CompletesTask from "./components/CompletedTask";
import RemainingTask from "./components/RemainingTask";
import ButtonAdd from "./components/ButtonAdd";
import { useSelector } from "react-redux";
import iconData from "../../assets/iconState.json";

export default function Home() {
  const noteCompleted = useSelector((state) => state.note.noteCompleted);
  const noteUncompleted = useSelector((state) => state.note.noteUncompleted);
  const resultIcon = {};

  iconData.forEach((item) => {
    resultIcon[item.title] = item.icon;
  });

  return (
    <div className="container bg-anti-flash-white relative md:bg-opacity-80">
      <div className="wrapper p-3">
        <Header />
        <div className="box-completed-tasks mb-7">
          {noteCompleted.map((item, i) => (
            <CompletesTask
              key={i}
              text={item.message}
              time={item.date}
              icon={resultIcon[item.state]}
              title={item.title}
            />
          ))}
        </div>
        <div className="box-remaining-tasks">
          <div className="number-tasks">
            <h1>
              Remaining Tasks{" "}
              <span className="font-extrabold">({noteUncompleted.length})</span>
            </h1>
            <div className="inner-remaining-tasks">
              {noteUncompleted.map((item, i) => (
                <RemainingTask
                  key={i}
                  text={item.message}
                  time={item.date}
                  icon={resultIcon[item.state]}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ButtonAdd />
    </div>
  );
}
