// "use client";
// import React, { createContext, useContext, useState } from "react";

// const FavoritesContext = createContext();

// export function FavoritesProvider({ children }) {
//   const [favorites, setFavorites] = useState([]);

//   const addFavorite = (dog) => {
//     setFavorites((prev) => {
//       if (prev.find((d) => d.id === dog.id)) return prev; // avoid duplicates
//       return [...prev, dog];
//     });
//   };

//   const removeFavorite = (dogId) => {
//     setFavorites((prev) => prev.filter((d) => d.id !== dogId));
//   };

//   const toggleFavorite = (dog) => {
//     if (favorites.find((d) => d.id === dog.id)) {
//       removeFavorite(dog.id);
//     } else {
//       addFavorite(dog);
//     }
//   };

//   return (
//     <FavoritesContext.Provider
//       value={{ favorites, addFavorite, removeFavorite, toggleFavorite }}
//     >
//       {children}
//     </FavoritesContext.Provider>
//   );
// }

// export function useFavorites() {
//   return useContext(FavoritesContext);
// }

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Context create karo
const FavoritesContext = createContext();

// 2. Provider component banayo
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Local storage se favorites load karne ke liye (optional)
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Local storage mein save karne ke liye
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite dog
  function toggleFavorite(dog) {
    setFavorites((currentFavorites) => {
      const isAlreadyFavorite = currentFavorites.some((d) => d.id === dog.id);
      if (isAlreadyFavorite) {
        // Remove from favorites
        return currentFavorites.filter((d) => d.id !== dog.id);
      } else {
        // Add to favorites
        return [...currentFavorites, dog];
      }
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// 3. Custom hook to use favorites easily
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
