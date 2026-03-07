import { supabase } from "@/lib/supabase"
import Link from "next/link";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  //wait for extracted item id and set it to variable
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  //query supabase
  const { data: item, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !item) {
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
          <p><span className="font-semibold text-white">Price:</span> ${item.price}</p>
          <p><span className="font-semibold text-white">Condition:</span> {item.condition}</p>
          <img
          src="/icons/item.png"
          alt="item icon"
          className="w-6 h-6 opacity-70"
            />
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href={`/edit/${id}`}
            className="bg-blue-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
          >
            Edit
          </Link>

          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}
