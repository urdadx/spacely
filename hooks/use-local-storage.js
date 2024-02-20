import { useState, useEffect } from 'react';

export const useLocalStorage = (key) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem(key);
    setItems(storedItems ? JSON.parse(storedItems) : []);
  }, [key]);

  const addItem = (task) => {
    const newItem = { task, isCompleted: false };
    const updatedItems = [...items, newItem];
    localStorage.setItem(key, JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    localStorage.setItem(key, JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const updateItem = (index, newTask) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      task: newTask,
      isCompleted: updatedItems[index].isCompleted,
    };
    localStorage.setItem(key, JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const checkCompleted = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isCompleted = !updatedItems[index].isCompleted;
    localStorage.setItem(key, JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const clearStorage = () => {
    localStorage.removeItem(key);
    setItems([]);
  };

  return {
    items,
    addItem,
    deleteItem,
    updateItem,
    clearStorage,
    checkCompleted,
  };
};
