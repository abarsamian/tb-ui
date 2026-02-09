import Link from "next/link";

export function Navbar() {
  return (

    <nav className="bg-black text-white p-4 flex items-center gap-6 justify-end">
      
      <span className="font-extrabold text-4xl">ThriftBooks</span>
    
      <div className="ml-auto flex items-center gap-6">
      <Link href="/add-item" className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-purple-700">Add Item</Link>
      <Link href="/" className="hover:text-purple-700">Home</Link>
      <Link href="/mycollection" className="hover:text-purple-700">My Collection</Link>
      <Link href="/about" className="hover:text-purple-700">About</Link>
      </div>
    </nav>

  );
}
