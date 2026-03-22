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
      <div className="bg-gray-900 p-8 rounded-xl w-80">
        <h1 className="text-xl font-bold mb-4 text-center">Sign In</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-3"
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