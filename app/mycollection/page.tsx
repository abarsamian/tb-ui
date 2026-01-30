export default function MyCollection() {
  //mock items
    const items = [
    { id: 1, name: "Vintage Lamp", category: "Furniture" },
    { id: 2, name: "Gold Necklace", category: "Jewelry" },
    { id: 3, name: "Denim Jacket", category: "Clothing" },
  ];
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold">My Collection</h1>
      <p className="mt-4 text-gray-600">
        Your thrift finds will appear here.
      </p>

      {/* List of Items */}
      <ul className="mt-6 space-y-2">
        {items.map((item) => (
              <li key={item.id} className="border p-3 rounded">
            <strong>{item.name}</strong> - {item.category}
          </li>
        ))}
        
        </ul>
    </div>


  );
}
