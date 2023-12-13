// CategoryProvider.jsx
import React, { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, setCategory }}>
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
