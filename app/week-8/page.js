"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to add items
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to clean item name and set selected ingredient
  const handleItemSelect = (name) => {
    const cleanedName = name.split(",")[0].trim().replace(/[🌀-🫖]/gu, "");
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-200 flex flex-col items-center p-10">
      <h1 className="text-5xl font-extrabold mb-10 text-blue-400">Shopping List</h1>
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-5xl bg-gray-900 p-8 rounded-xl shadow-xl">
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md">
          <NewItem onAddItem={handleAddItem} />
          <div className="mt-6">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}