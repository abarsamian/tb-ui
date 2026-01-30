export default function ItemDetailPage() {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold">Details</h1>

      <p><strong>Name:</strong> Vintage Lamp</p>
      <p><strong>Category:</strong> Furniture</p>
      <p><strong>Price:</strong> $12</p>
      <p><strong>Condition:</strong> Good</p>

      <div className="mt-4 space-x-2">
        <button className="bg-blue-500 text-white p-2 rounded">Edit</button>
        <button className="bg-red-500 text-white p-2 rounded">Delete</button>
      </div>
    </div>
  );
}
