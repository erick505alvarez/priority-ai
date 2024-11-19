"use client";

import { useState } from "react";

export default function TaskForm({
  onSubmit,
}: {
  onSubmit: (task: string) => void;
}) {
  const [task, setTask] = useState("");
  debugger;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onSubmit(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <textarea
        className="border rounded p-2 w-full"
        placeholder="Describe your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
}
