import { useState, useEffect } from 'react';

export const useLocalStorage = (key) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem(key);
    setItems(storedItems ? JSON.parse(storedItems) : []);
  }, [key]);

  const addItem = (item) => {
    const updatedItems = [...items, item];
    localStorage.setItem(key, JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    localStorage.setItem(key, JSON.stringify(updatedItems));
    setItems(updatedItems); 
  };

  const updateItem = (index, newItem) => {
    const updatedItems = [...items];
    updatedItems[index] = newItem;
    localStorage.setItem(key, JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const clearStorage = () => {
    localStorage.removeItem(key);
    setItems([]);
  };

  return { items, addItem, deleteItem, updateItem, clearStorage };
};
