import "./globals.css";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { PiDogBold } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export const metadata = {
  title: "Dog Adoption Center",
  description: "Adopt your new best friend ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
       
        <nav className="bg-teal-600 text-white px-8 py-4 shadow fixed w-full top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              DogAdopt
            </Link>
            
            <div className="space-x-20 flex items-center ">
              <Link href="/" className="hover:underline">
                
                <IoHomeOutline size={24} />
              </Link>
              <Link href="/dogs" className="hover:underline">
               
                <PiDogBold size={24} />
              </Link>
              <Link href="/about" className="hover:underline">
                
                <LuNotebookPen size={24} />
              </Link>
              <Link href="/contact" className="hover:underline">
                
                <MdOutlinePhoneInTalk size={24} />
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="min-h-[80vh] mt-16 ">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-6 border-t">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Dog Adoption Center. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
