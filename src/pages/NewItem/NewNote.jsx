import iconData from "../../assets/iconState.json";

export default function NewNote() {
  return (
    <div className="new-note">
      <div className="new-note-wrapper p-4">
        <div className="input-item">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select the status
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={"Choose a status"}
          >
            {iconData.map((item) => (
              <option key={item.title} value={item.title}>
                {item.icon} {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="input-item">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={10}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            defaultValue={""}
          />
          <small></small>
        </div>
        <div className="mb-4">
          <button className="bg-blue-500 block w-full text-center py-3 rounded-md text-white font-semibold hover:bg-blue-600">
            Add
          </button>
        </div>
        <div>
          <button className="bg-red-500 block w-full text-center py-3 rounded-md text-white font-semibold hover:bg-red-600">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
