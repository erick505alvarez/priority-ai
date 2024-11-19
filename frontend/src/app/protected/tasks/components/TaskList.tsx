"use client";

export default function TaskList({ tasks }: { tasks: string[] }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Your Tasks</h2>
      <ul className="list-disc ml-6">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
