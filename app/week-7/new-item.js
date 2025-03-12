"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const categories = ["Produce", "Dairy", "Bakery", "Meat", "Canned Goods", "Household"];

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!name.trim()) return; // Prevent adding empty items

    const newItem = {
      id: Date.now().toString(), // Generate unique ID
      name,
      quantity,
      category
    };

    onAddItem(newItem); // Pass new item to parent
    setName(""); // Reset input fields
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-5 rounded-xl shadow-md w-full max-w-lg">
      <div className="mb-4">
        <label className="block text-gray-200 text-sm font-semibold">Item Name:</label>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter item name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-200 text-sm font-semibold">Category:</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <span className="text-gray-300 text-sm">Quantity: {quantity}</span>
        <div className="flex space-x-2">
          <button 
            type="button" 
            onClick={() => setQuantity((q) => Math.max(q - 1, 1))} 
            className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition"
          >
            −
          </button>
          <button 
            type="button" 
            onClick={() => setQuantity((q) => Math.min(q + 1, 20))} 
            className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition"
          >
            +
          </button>
        </div>
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-medium"
      >
        Add Item
      </button>
    </form>
  );
}
