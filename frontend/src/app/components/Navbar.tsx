import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold">Priority AI</h1>
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            {/* <a className="hover:underline">Home</a> */}
            Home
          </Link>
          <Link href="/login" className="hover:underline">
            {/* <a className="hover:underline">Tasks</a> */}
            Tasks
          </Link>
        </div>
      </div>
    </nav>
  );
}
