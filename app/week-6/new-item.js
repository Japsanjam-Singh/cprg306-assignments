"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(0);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    setQuantity(quantity - 1);
  }

  return (
    <main className="flex justify-center mt-4">
      <div className="bg-gray-500 w-44 h-12 flex justify-between items-center rounded-md shadow-lg">
        {/* Quantity Display */}
        <h1 className="px-5 flex items-center justify-center bg-black text-white w-16 rounded-md">
          {quantity}
        </h1>

        {/* Decrease Button */}
        <button
          className={`w-12 h-full text-white rounded-md transition ${
            quantity <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-fuchsia-500 hover:bg-fuchsia-600"
          }`}
          disabled={quantity <= 0}
          onClick={decrement}
        >
          -
        </button>

        {/* Increase Button */}
        <button
          className={`w-12 h-full text-white rounded-md transition ${
            quantity >= 20
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-fuchsia-500 hover:bg-fuchsia-600"
          }`}
          disabled={quantity >= 20}
          onClick={increment}
        >
          +
        </button>
      </div>
    </main>
  );
}
