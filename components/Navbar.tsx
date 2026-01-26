import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/mycollection">My Collection</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
