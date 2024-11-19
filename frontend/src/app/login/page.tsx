import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  return <LoginForm />;
}

function LoginForm() {
  return (
    <>
      <form className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="username" className="p-1 rounded" />
          <input type="text" placeholder="password" className="p-1 rounded" />
        </div>
        <button className="bg-blue-600 rounded p-1">Log In</button>
      </form>
    </>
  );
}
