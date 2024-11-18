import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Priority AI</h1>
        <div className="space-x-4">
          <Link href="/">
            {/* <a className="hover:underline">Home</a> */}
            Home
          </Link>
          <Link href="/tasks">
            {/* <a className="hover:underline">Tasks</a> */}
            Tasks
          </Link>
        </div>
      </div>
    </nav>
  );
}
