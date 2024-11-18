import "./styles/globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "Priority AI",
  description: "AI-powered Task Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <header className="bg-blue-600 text-white p-4">
          {/* <nav className="container mx-auto">
            <h1 className="text-2xl font-bold">Priority AI</h1>
          </nav> */}
          <Navbar />
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          © 2024 Priority AI
        </footer>
      </body>
    </html>
  );
}
