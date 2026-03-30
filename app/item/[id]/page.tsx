"use client"
import { use, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import Link from "next/link";


export default function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = use(params);

  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/signin";
        return;
      }

      const { data, error } = await supabase
        .from("items")
        .select("*")
        .eq("id", id)
        .eq("user_id", user.id)
        .single();

      if (error || !data) {
        setItem(null);
      } else {
        setItem(data);
      }

      setLoading(false);
    };

    fetchItem();
  }, [id]);

  const handleDelete = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/signin";
      return;
    }

    await supabase
      .from("items")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);

    window.location.href = "/mycollection";
  };

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!item) {
    return <div className="p-10 text-center">Item not found</div>;
  }

  return (
    <div className="container mx-auto mt-12 p-4 flex justify-center">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 w-full max-w-lg shadow-lg">

        <Link href="/mycollection" className="text-purple-500 text-sm hover:underline">
          ← Back to Collection
        </Link>

        <h1 className="text-3xl font-bold mt-6 mb-6 text-center">
          {item.item_name}
        </h1>

        <div className="space-y-3 text-gray-300">
          <p><span className="font-semibold text-white">Category:</span> {item.category}</p>
          <p><span className="font-semibold text-white">Price:</span> ${item.price_paid}</p>
          <p><span className="font-semibold text-white">Condition:</span> {item.condition}</p>
          <p><span className="font-semibold text-white">Notes:</span> {item.user_notes}</p>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href={`/edit/${id}`}
            className="bg-blue-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
          >
            Edit
          </Link>
              <form action={handleDelete}>
              <button className="bg-red-600 px-4 py-2 rounded">
              Delete
              </button>
              </form>

      </div>
    </div>
    </div>
  );
}
