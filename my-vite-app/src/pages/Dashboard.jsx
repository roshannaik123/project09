import { useEffect, useState, useRef } from "react";
import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const debounceTimer = useRef(null);

  const fetchTasks = async () => {
    const { data } = await API.get("/tasks");
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Debounce search
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);

    return () => clearTimeout(debounceTimer.current);
  }, [searchTerm]);

  const addTask = async () => {
    if (!title) return;

    await API.post("/tasks", { title });

    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4">My Tasks</h2>

      <div className="flex mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Task"
          className="border p-2 flex-1"
        />

        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4"
        >
          Add
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tasks..."
          className="border p-2 w-full rounded"
        />
      </div>

      {filteredTasks.map((task) => (
        <div
          key={task._id}
          className="flex justify-between bg-gray-100 p-2 mb-2"
        >
          <span>{task.title}</span>

          <button
            onClick={() => deleteTask(task._id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
