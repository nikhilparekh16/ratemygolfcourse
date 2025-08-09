import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  }

  return (
    <header className="bg-green-600 text-white py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">RateMyGolfCourse</a>
        <nav className="space-x-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
          {user ? (
            <button onClick={handleSignOut} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-600 transition duration-250">
              Sign Out
            </button>) : (
            <Link to="/login" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-600 transition duration-250">
              Login / Sign Up
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
