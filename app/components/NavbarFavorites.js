"use client";

import { useFavorites } from "../context/FavoritesContext"; 
import Link from "next/link";
import { FiHeart } from "react-icons/fi";

export default function NavbarFavorites() {
  const { favorites } = useFavorites();

  return (
    <Link href="/favorites" className="relative text-white hover:text-black">
      <FiHeart size={24} />
      {favorites.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center text-white font-bold">
          {favorites.length}
        </span>
      )}
    </Link>
  );
}
