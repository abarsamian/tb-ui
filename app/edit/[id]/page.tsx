
import Link from "next/link";
export default async function EditItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const items = [
    { id: 1, name: "Vintage Lamp", category: "Furniture", price: 12, condition: "Good" },
    { id: 2, name: "Gold Necklace", category: "Jewelry", price: 45, condition: "Excellent" },
    { id: 3, name: "Denim Jacket", category: "Clothing", price: 25, condition: "Fair" },
  ];
  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return <div className="p-10 text-center">Item not found</div>;
  }

  return (
    <main className="container mx-auto mt-10 p-4 max-w-md">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 w-full max-w-lg shadow-lg">
      
          <Link href={`/item/${item.id}`} className="text-purple-500 text-sm hover:underline">
          ← Back to Item
        </Link>
      <h1 className="text-3xl font-bold mt-6 mb-6 text-center">
        Editing: {item.name}
      </h1>
<div className="space-y-4">
      <input
        defaultValue={item.name}
        className="border p-2 w-full rounded"
        placeholder="Item Name"
      />

      <input
        defaultValue={item.category}
        className="border p-2 w-full rounded"
        placeholder="Category"
      />

      <input
      defaultValue={item.price}
      className="border p-2 w-full rounded"
      placeholder="Price"
      />

      <input
      defaultValue={item.condition}
      className="border p-2 w-full rounded"
      placeholder="Condition"
      />
  </div>

      <div className="mt-4 flex justify-center">
      <button className="bg-blue-600 text-white p-2 mt-4 rounded w-64 hover:bg-purple-700">
        Update Item
      </button>
        </div>
      </div>
    </main>
  );
}
