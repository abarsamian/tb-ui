  "use client";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function Navbar() {

  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // get current user on load
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user ?? null);
    };

    getUser();

    // listen for login/logout changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/signin");
  };


  return (

    <nav className="bg-gradient-to-r from-violet-950 via-purple-950 to-gray-900 shadow-lg text-white p-4 flex flex-wrap items-center gap-6">
      
      <Link href="/"className="font-extrabold text-4xl">ThriftBooks</Link>
    
      <div className="ml-auto flex flex-col sm:flex-row items-end sm:items-center gap-4">
        <Link href="/add-item" className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-purple-700">Add Item</Link>
      <Link href="/mycollection" className="hover:text-purple-700">My Collection</Link>
      <Link href="/about" className="hover:text-purple-700">About</Link>
      

 {user ? (
          <button onClick={handleLogout} className="hover:text-purple-700">
            Logout
          </button>
        ) : (
          <>
            <Link href="/signin" className="hover:text-purple-700">
              Login
            </Link>
            <Link href="/register" className="hover:text-purple-700">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
