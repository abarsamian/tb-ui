  "use client";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export function Navbar() {




  return (

    <nav className="bg-gradient-to-r from-violet-950 via-purple-950 to-gray-900 shadow-lg text-white p-4 flex flex-wrap items-center gap-6">
      
      <Link href="/"className="font-extrabold text-4xl">ThriftBooks</Link>
    
      <div className="ml-auto flex flex-col sm:flex-row items-end sm:items-center gap-4">
        <Link href="/add-item" className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-purple-700">Add Item</Link>
      <Link href="/mycollection" className="hover:text-purple-700">My Collection</Link>
      <Link href="/about" className="hover:text-purple-700">About</Link>
      
      <button onClick={async () => { await supabase.auth.signOut(); window.location.href = "/signin";}} className="hover:text-purple-700">Logout</button>

      </div>
    </nav>

  );
}
