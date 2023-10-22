const filterNote = (type) => {
  if (type === "All") return null;
  const notes = JSON.parse(localStorage.getItem("notes")).noteUncompleted;
  const response = notes.filter((note) => note.state === type);

  return response;
};

export { filterNote };
