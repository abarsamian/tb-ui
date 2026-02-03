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
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
              <div key={item.id} className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
            <strong className="block text-lg">{item.name}</strong>
            <span className="text-gray-600">{item.category}</span>
          </div>
        ))}
        
        </ul>
    </div>


  );
}
