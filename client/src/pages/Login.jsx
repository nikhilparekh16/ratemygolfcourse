import Header from "../components/Header";
import { useState } from 'react';
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email, 
            password
        });

        if (error) {
            setError(error.message);
            setSuccess(null);
        } else {
            setSuccess("Logged in successfully!");
            setError(null);
        }
    }

    return (
        <>
        <Header/>
        <div>
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label><br/>
                <input className="mb-4 text-black" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                <label htmlFor="pass">Password:</label><br/>
                <input className="mb-4 text-black" type="password" id="pass" name="pass" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>

                <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Log In</button>

                {error && <p className="text-red-500 mt-2">{error}</p>}
                {success && <p className="text-green-600 mt-2">{success}</p>}
            </form>

            <p className="mt-4 text-sm text-gray-300">
                Don't Have an Account?{" "}
                <Link to="/signup" className="text-green-400 font-semibold hover:text-white">
                    Sign Up
                </Link>
            </p>
        </div>
        </>
    );
}