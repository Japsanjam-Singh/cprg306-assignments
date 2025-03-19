"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Create a sorted copy of items
  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="flex gap-4 mb-6 justify-center">
        <button
          className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 ${
            sortBy === "name" ? "bg-blue-500 text-white shadow-md" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 ${
            sortBy === "category" ? "bg-blue-500 text-white shadow-md" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      <ul className="border border-gray-600 rounded-xl p-5 bg-gray-800 shadow-lg divide-y divide-gray-700">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}