import "./globals.css";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { PiDogBold } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FavoritesProvider } from "./context/FavoritesContext";
import NavbarFavorites from "./components/NavbarFavorites";
import Image from "next/image";

export const metadata = {
  title: "Dog Adoption Center",
  description: "Adopt your new best friend ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <FavoritesProvider>
        <nav className="bg-teal-600 text-white px-8 py-4 shadow fixed w-full top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/D.png" alt="Dog Logo" width={40} height={40} />
              </Link>
            
            <div className="space-x-20 flex items-center ">
              <Link href="/" className="hover:text-black">
                
                <IoHomeOutline size={24} />
              </Link>
              <Link href="/dogs" className="hover:text-black">
               
                <PiDogBold size={24} />
              </Link>
              <Link href="/about" className="hover:text-black">
                
                <LuNotebookPen size={24} />
              </Link>
              <Link href="/contact" className="hover:text-black">
                
                <MdOutlinePhoneInTalk size={24} />
              </Link>   
              <div className="space-x-20 flex items-center ">
  {/* other links */}
  <NavbarFavorites />
</div>      
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
        </FavoritesProvider>
      </body>
    </html>
  );
}