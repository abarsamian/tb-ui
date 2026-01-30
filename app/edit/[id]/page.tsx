export default function EditItemPage() {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold">Edit Item</h1>

      <input className="border p-2 mt-2 block" placeholder="Item Name" />
      <input className="border p-2 mt-2 block" placeholder="Category" />
      <button className="bg-blue-600 text-white p-2 mt-4 rounded">Update Item</button>
    </div>
  );
}
