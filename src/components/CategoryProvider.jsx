// CategoryProvider.jsx
import React, { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [filterCategory, setFilterCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ filterCategory, setFilterCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
