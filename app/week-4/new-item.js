"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1); // Start at 1 as per the assignment

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-300 p-4 rounded-lg flex items-center space-x-4">
        <button
          className={`px-4 py-2 rounded ${quantity <= 1 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`}
          disabled={quantity <= 1}
          onClick={decrement}
        >
          -
        </button>
        <span className="px-6 py-2 bg-black text-white rounded">{quantity}</span>
        <button
          className={`px-4 py-2 rounded ${quantity >= 20 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
          disabled={quantity >= 20}
          onClick={increment}
        >
          +
        </button>
      </div>
    </main>
  );
}
