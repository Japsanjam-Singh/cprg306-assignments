"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const categories = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [quantity, setQuantity] = useState(0);

  const handleInputValue = (event) => setName(event.target.value);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (quantity === 0) {
      alert("Please select a quantity greater than 0.");
    } else {
      const item = { name, quantity, category };
      console.log("Submitted Item:", item);
      alert(
        `Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
      );

      setName("");
      setQuantity(0);
      setCategory("Produce");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 bg-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 p-8 rounded-2xl shadow-2xl bg-gray-800"
      >
        <h1 className="text-3xl font-semibold text-center text-white">Add Item</h1>

        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block font-medium text-gray-200">
            Item Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleInputValue}
            placeholder="Enter item name"
            required
            className="w-full p-3 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Quantity Counter */}
        <div className="flex justify-center items-center">
          <div className="w-48 h-12 flex justify-between items-center bg-gray-700 rounded-lg">
            <button
              type="button"
              className={`w-12 h-full text-white font-bold text-2xl rounded-l-lg ${
                quantity <= 0
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              disabled={quantity <= 0}
              onClick={decrement}
            >
              -
            </button>
            <span className="px-6 text-lg font-semibold text-white">{quantity}</span>
            <button
              type="button"
              className={`w-12 h-full text-white font-bold text-2xl rounded-r-lg ${
                quantity >= 20
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
              disabled={quantity >= 20}
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>

        {/* Category Dropdown */}
        <div>
          <label htmlFor="category" className="block font-medium text-gray-200">
            Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full p-3 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
        >
          Add Item
        </button>
      </form>

  
    </main>
  );
}
