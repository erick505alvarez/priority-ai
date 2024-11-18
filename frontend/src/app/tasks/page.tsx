"use client";

import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function TasksPage() {
  const [tasks, setTasks] = useState<string[]>([]); // Store the tasks
  const [suggestions, setSuggestions] = useState<string | null>(null); // AI suggestions
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null);

  // Function to handle task submission and fetch AI suggestions
  const handleTaskSubmit = async (task: string) => {
    setTasks([...tasks, task]); // Add the task to the list
    setLoading(true); // Set loading to true

    try {
      // Make a request to the backend API to fetch AI suggestions
      const response = await fetch("http://localhost:5000/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskDescription: task }),
      });

      const data = await response.json();
      setSuggestions(data.suggestions); // Update the AI suggestions
    } catch (err: any) {
      console.error("Error fetching suggestions:", err);
      setError(err || "An error occurred processing request");
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI Task Manager</h1>

      {/* Task Form Component */}
      <TaskForm onSubmit={handleTaskSubmit} />

      {/* Display AI Suggestions */}
      {error && <p className="text-color-red">Error: {error}</p>}
      {loading && <p>Loading AI suggestions...</p>}
      {suggestions && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-bold mb-2">AI Suggestions</h2>
          <p>{suggestions}</p>
        </div>
      )}

      {/* Task List Component */}
      {tasks.length ? <TaskList tasks={tasks} /> : ""}
    </div>
  );
}
