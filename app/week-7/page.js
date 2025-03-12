"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  // State to manage shopping list items
  const [items, setItems] = useState(itemsData);

  // Function to handle adding new items
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-gray-800 text-gray-100 flex flex-col items-center py-8 px-4">
      <h1 className="text-4xl font-semibold mb-8 tracking-wide">Shopping List</h1>

      {/* Form to Add New Items */}
      <div className="w-full max-w-lg bg-gray-800 p-5 rounded-xl shadow-lg">
        <NewItem onAddItem={handleAddItem} />
      </div>

      {/* Display the Item List */}
      <div className="mt-6 w-full max-w-2xl">
        <ItemList items={items} />
      </div>
    </main>
  );
}
