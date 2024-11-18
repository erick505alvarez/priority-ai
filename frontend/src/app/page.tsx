import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">Priority AI</h1>
      <p className="text-lg mb-6">
        AI-powered task management to keep you productive and organized.
      </p>
      <Link href="/tasks">
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Get Started
        </button>
      </Link>
    </div>
  );
}
