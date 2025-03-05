"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sorting logic using a copied array
  const sortedList = [...itemsData].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      {/* Sorting Panel */}
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex gap-4 mb-4 justify-center">
          <button
            className={`px-4 py-2 rounded-md transition ${
              sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => setSortBy("name")}
          >
            Sort by Name
          </button>
          <button
            className={`px-4 py-2 rounded-md transition ${
              sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => setSortBy("category")}
          >
            Sort by Category
          </button>
        </div>

        {/* Render Sorted Items */}
        <ul className="border border-gray-700 rounded-lg p-4 bg-gray-900 shadow-lg">
          {sortedList.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </main>
  );
}
