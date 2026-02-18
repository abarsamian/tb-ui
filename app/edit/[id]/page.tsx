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
    <div className="container mx-auto mt-10 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">
        Editing: {item.name}
      </h1>

      <input
        defaultValue={item.name}
        className="border p-2 mt-2 w-64 rounded"
        placeholder="Item Name"
      />

      <input
        defaultValue={item.category}
        className="border p-2 mt-2 w-64 rounded"
        placeholder="Category"
      />

      <input
      defaultValue={item.price}
      className="border p-2 mt-2 w-64 rounded"
      placeholder="Price"
      />

      <input
      defaultValue={item.condition}
      className="border p-2 mt-2 w-64 rounded"
      placeholder="Condition"
      />


      <button className="bg-blue-600 text-white p-2 mt-4 rounded w-64 hover:bg-purple-700">
        Update Item
      </button>
    </div>
  );
}
