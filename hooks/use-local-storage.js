import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const useLocalStorage = (key) => {
  const [items, setItems] = useState([]);
  const id = nanoid(10);

  useEffect(() => {
    const storedItems = localStorage.getItem(key);
    setItems(storedItems ? JSON.parse(storedItems) : []);
  }, [key]);

  const addItem = (task) => {
    const newItem = { id: id, task, isCompleted: false };
    const updatedItems = [...items, newItem];
    localStorage.setItem(key, JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const updateItem = (id, newTask) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, task: newTask } : item
    );
    localStorage.setItem(key, JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const checkCompleted = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
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
    setItems,
    deleteItem,
    updateItem,
    clearStorage,
    checkCompleted,
  };
};
