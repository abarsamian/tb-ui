"use client";

import { useState } from "react";

export default function AddItemPage(){
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!itemName.trim()) {
      setError("Item name is required");
      return;
    }
    if (!category) {
      setError("Category is required");
      return;
    }

    if (!price || isNaN(Number(price))) {
      setError("Price must be a valid number");
      return;
    }

    setError("");
    alert("Form valid — frontend only");
  }

  return (
    <main className="container mx-auto mt-10 p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Add Item</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          className="border p-2 w-full rounded"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option value="">Select Category</option>
          <option>Furniture</option>
          <option>Jewelry</option>
          <option>Clothing</option>
          <option>Accessories</option>
          <option>Miscellaneous</option>
        </select>

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price Paid"
          className="border p-2 w-full rounded"
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button className="bg-blue-600 text-white p-2 rounded w-full">
          Add Item
        </button>

      </form>
    </main>
  );
}
