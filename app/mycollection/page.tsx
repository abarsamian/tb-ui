"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function MyCollection() {

  //STATE STUFF
  //store items from database
const [items, setItems] = useState<any[]>([]);
//set search variables to blank
const[search, setSearch] = useState("");
const[filterCategory, setFilterCategory] = useState("");

  //fetch items from Supabase when page loads
  useEffect(() => {
    const fetchItems = async () => {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        console.error("No user signed in");
        setItems([]);
        return;
      }

      const { data, error } = await supabase
        .from("items")
        .select("*");

      if (error) {
        console.error("Error fetching items:", error);
      } else {
        setItems(data || []);
      }
    };

    fetchItems();
  }, []);

  //filter items section-- makes sure its case insensitive and finds what user is looking for
  const filteredItems = items.filter((item) => {
  const matchesSearch =
    item.item_name.toLowerCase().includes(search.toLowerCase());

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


          <div>
            <strong className="block">{item.item_name}</strong>
            <p className="text-sm text-gray-500">{item.category}</p>
          <Link href={`/item/${item.id}`} className="bg-gray-700 text-xs text-white px-2 py-1 rounded-xs hover:bg-purple-700 inline-block">
            View Details
          </Link>
          </div>
        </div>


        ))}
        
      </div>
    </div>


  );
}
