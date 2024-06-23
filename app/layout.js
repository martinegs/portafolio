import Navbar from "./components/Navbar";
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto py-4 flex-grow"> 
          {children}
        </main>
      </body>
    </html>
  );
}
