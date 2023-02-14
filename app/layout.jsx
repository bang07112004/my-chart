import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="scroll min-h-screen bg-gray-100">
        <Sidebar>
          <Header />
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
