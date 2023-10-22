import Header from "./components/Header";
import CompletesTask from "./components/CompletedTask";
import RemainingTask from "./components/RemainingTask";
import ButtonAdd from "./components/ButtonAdd";
import { useSelector } from "react-redux";
import iconData from "../../assets/iconState.json";
import NothingNote from "./components/NothingNote";
import React, { useState } from "react";
import { filterNote } from "../../utils/filterNote";

export default function Home() {
  const noteCompleted = useSelector((state) => state.note.noteCompleted) || [];
  const noteUncompleted =
    useSelector((state) => state.note.noteUncompleted) || [];
  const resultIcon = {};
  const [notes, setNotes] = useState(null);

  const btnList = [
    { name: "All", color: "white-coffee" },
    { name: "Important", color: "orange" },
    { name: "Doable", color: "true-blue" },
    { name: "Pending", color: "anti-flash-white" },
  ];

  iconData.forEach((item) => {
    resultIcon[item.title] = item.icon;
  });

  const HandleFilterNotes = (type) => {
    const response = filterNote(type);
    setNotes(response);
  };

  return (
    <div className="container relative md:bg-opacity-80">
      <div className="wrapper p-3">
        <Header />
        {!(noteCompleted?.length + noteUncompleted?.length) ? (
          <NothingNote />
        ) : (
          <React.Fragment>
            {" "}
            <div className="box-completed-tasks mb-7">
              {noteCompleted?.map((item, i) => (
                <CompletesTask
                  key={i}
                  text={item.message}
                  time={item.date}
                  icon={resultIcon[item.state]}
                  title={item.title}
                  id={item.id}
                  state={item.state}
                />
              ))}
            </div>
            <div className="box-remaining-tasks">
              <div className="number-tasks">
                <h1>
                  Remaining Tasks{" "}
                  <span className="font-extrabold">
                    ({noteUncompleted?.length})
                  </span>
                </h1>
                <div className="my-3">
                  <div className="flex">
                    {btnList.map((item, key) => (
                      <div
                        key={key}
                        className={`btn-filter transition mx-1 text-center rounded-md border-2 border-${
                          item.color
                        } bg-${item.color} text-${
                          item.name === "All" || item.name === "Pending"
                            ? "black"
                            : "white"
                        }`}
                      >
                        <button
                          onClick={(type) => HandleFilterNotes(item.name)}
                          className="py-2 w-full"
                        >
                          {item.name}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="inner-remaining-tasks">
                  {notes
                    ? notes?.map((item, i) => (
                        <RemainingTask
                          key={i}
                          text={item.message}
                          time={item.date}
                          icon={resultIcon[item.state]}
                          title={item.title}
                          id={item.id}
                          state={item.state}
                        />
                      ))
                    : noteUncompleted?.map((item, i) => (
                        <RemainingTask
                          key={i}
                          text={item.message}
                          time={item.date}
                          icon={resultIcon[item.state]}
                          title={item.title}
                          id={item.id}
                          state={item.state}
                        />
                      ))}
                </div>
              </div>
            </div>
            <ButtonAdd />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
