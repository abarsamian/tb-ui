"use client";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddItemPage(){
    const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/signin");
      }
    };

    checkUser();
  }, [router]);
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [userNotes, setUserNotes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async(e: React.FormEvent) => {
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

      const {
      data: { user },
      } = await supabase.auth.getUser();

            //guard for only users to add item
      if (!user) {
        setError("You must be signed in to add an item.");
        return;
      }

  const {data, error: insertError} = await supabase.from("items").insert([
  {
    user_id: user?.id,
    item_name: itemName,
    category: category,
    price_paid: Number(price),
    condition: condition,
    user_notes: userNotes,
  },


]);


      if (insertError) {
    console.log("Insert error:", insertError);
    setError(insertError.message);
    return;
    }   else {
      alert("Item added successfully!");
      setItemName("");
      setCategory("");
      setPrice("");
      setCondition("");
      setUserNotes("");
    }
  };
  

  return (
    <main className="container mx-auto mt-10 p-4 max-w-md">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 w-full max-w-lg shadow-lg">
      <h1 className="text-3xl font-bold mt-6 mb-6 text-center">Add Item</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          className="w-full rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded-md bg-black font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="w-full rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

                <input
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="Condition"
          className="w-full rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

                <textarea
            value={userNotes}
            onChange={(e) => setUserNotes(e.target.value)}
            placeholder="User Notes"
            className="w-full rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            rows={3}
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button className="bg-blue-600 hover:bg-purple-700 text-white p-2 rounded w-full">
          Add Item
        </button>

      

      </form>
         </div>
    </main>
   
  );
}
