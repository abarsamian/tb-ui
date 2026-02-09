"use client";
import { useState } from "react";

export default function MyCollection() {
  //mock items
    const items = [
    { id: 1, name: "Vintage Lamp", category: "Furniture" },
    { id: 2, name: "Gold Necklace", category: "Jewelry" },
    { id: 3, name: "Denim Jacket", category: "Clothing" },
  ];
  //set search variables to blank
  const[search, setSearch] = useState("");
  const[filterCategory, setFilterCategory] = useState("");

  //filter items section-- makes sure its case insensitive and finds what user is looking for
  const filteredItems = items.filter((item) => {
  const matchesSearch =
    item.name.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    !filterCategory || item.category === filterCategory;

  return matchesSearch && matchesCategory;
});


  return (
    <div className="container mx-auto mt-10 p-4 justify-items-center">
      <h1 className="text-3xl font-bold">My Collection</h1>
      <p className="mt-4 text-gray-600">
        Your thrift finds will appear here.
      </p>

      <div className="flex gap-4 mt-6 mb-4">

  <input
    placeholder="Search items..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border p-2 rounded w-full"
  />

  <select
    value={filterCategory}
    onChange={(e) => setFilterCategory(e.target.value)}
    className="border border-gray-300 p-2 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    
    <option value="">All</option>
    <option>Furniture</option>
    <option>Jewelry</option>
    <option>Clothing</option>
    <option>Accessories</option>
  </select>

</div>


      {/* List of Items */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
       <div key={item.id} className="border border-gray-300 rounded-lg p-4">

            {/*this is where i added the icon placeholders for the cards*/}
        <div className="flex items-start gap-3">
            <img
          src="/icons/item.png"
          alt="item icon"
          className="w-6 h-6 opacity-70"
            />

          <div>
            <strong className="block">{item.name}</strong>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
        </div>

      </div>
        ))}
        
      </div>
    </div>


  );
}
