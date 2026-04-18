"use client"
import { supabase } from "@/lib/supabase";
import { useState, useEffect, use } from "react";
import Link from "next/link";



export default function EditItemPage({ params, }: { params: Promise< { id: string } >;}){
const { id } = use(params);

  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [notes, setUserNotes] = useState("");

  //Load existing item
  useEffect(() => {
    const fetchItem = async () => {

      const {
      data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
      return;
      }


      const { data } = await supabase
        .from("items")
        .select("*")
        .eq("id", id)
        .eq("user_id", user.id)
        .single();

      if (data) {
        setItemName(data.item_name);
        setCategory(data.category);
        setPrice(data.price_paid);
        setCondition(data.condition);
        setUserNotes(data.user_notes);
      }
    };

    fetchItem();
  }, [id]);

  //UPDATE function
  const handleUpdate = async () => {

        const {
        data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
        return;
        }

    const { error } = await supabase
      .from("items")
      .update({
        item_name: itemName,
        category: category,
        price_paid: Number(price),
        condition: condition,
        user_notes: notes,
      })
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) {
      console.error(error);
    } else {
      window.location.href = `/item/${id}`;
    }
  };



  return (
    <main className="container mx-auto mt-10 p-4 max-w-md">
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 w-full max-w-lg shadow-lg">
      
            <Link href={`/item/${id}`} className="text-purple-500 text-sm hover:underline">
            ← Back to Item
            </Link>


                <h1 className="text-3xl font-bold mt-6 mb-6 text-center">
                Editing: {itemName}
                </h1>

                  
                      <div className="space-y-4">
                      <input
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      className="w-full rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Item Name"
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
                      className="w-full rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Price"
                      />

                      <input
                        value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      className="w-full rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Condition"
                      />
                    

                       <input
                        value={notes}
                      onChange={(e) => setUserNotes(e.target.value)}
                      className="w-full rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Notes"
                      />

                        </div>
                      

              <div className="mt-4 flex justify-center">
              <button onClick={handleUpdate}className="bg-blue-600 text-white p-2 rounded w-64 hover:bg-purple-700">Update Item</button>
              </div>
      </div>
    </main>
  );
}
