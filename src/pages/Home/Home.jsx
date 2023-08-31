import Header from "./components/Header";
import CompletesTask from "./components/CompletedTask";
import RemainingTask from "./components/RemainingTask";
import ButtonAdd from "./components/ButtonAdd";

export default function Home() {
  return (
    <div className="container bg-anti-flash-white relative">
      <div className="wrapper p-3">
        <Header />
        <div className="box-completed-tasks mb-7">
          <CompletesTask />
        </div>
        <div className="box-remaining-tasks">
          <div className="number-tasks">
            <h1>
              Remaining Tasks <span className="font-extrabold">(24)</span>
            </h1>
            <div className="inner-remaining-tasks">
              <RemainingTask />
              <RemainingTask />
              <RemainingTask />
              <RemainingTask />
              <RemainingTask />
              <RemainingTask />
              <RemainingTask />
              <RemainingTask />
            </div>
          </div>
        </div>
      </div>
      <ButtonAdd />
    </div>
  );
}
