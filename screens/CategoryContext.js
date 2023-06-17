import { createContext, useState, useEffect } from 'react';
import {
  getCategoryData,
  getItemsByCategory,
  deleteItemById,
} from './requests';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategoryData();
        setCategories(categoriesData);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      }
    };
    fetchCategories();
  }, []);

  const updateCategories = (updatedCategories) => {
    setCategories(updatedCategories);
  };

  const fetchShopItemsByCategory = async (categoryName) => {
    try {
      const items = await getItemsByCategory(categoryName);
      return items;
    } catch (err) {
      console.error(`Failed to fetch shop items for ${categoryName}:`, err);
    }
  };

  const deleteShopById = async (itemId) => {
    try {
      await deleteItemById(itemId);
      console.log(`Successfully deleted shop with ID ${itemId}`);
    } catch (err) {
      console.error(`Failed to delete shop with ID ${itemId}:`, err);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        fetchShopItemsByCategory,
        deleteShopById,
        updateCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
