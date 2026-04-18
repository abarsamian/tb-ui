"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      window.location.href = "/mycollection";
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-gray-900 border border-gray-700 p-8 rounded-xl w-80 shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-center">Sign In</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <button
          onClick={handleLogin}
          className="bg-purple-700 w-full p-2 rounded hover:bg-gray-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}