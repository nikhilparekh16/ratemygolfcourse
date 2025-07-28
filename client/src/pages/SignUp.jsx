import Header from "../components/Header";
import { useState } from 'react';
import { supabase } from "../supabaseClient";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setSuccess(null);
        } else {
            setSuccess("Check your email for confirmation.");
            setError(null);
        }
    };

    

    return (
        <>
        <Header/>
        <div>
        <h1 className="text-3xl font-semibold">Sign Up</h1>
        <p className="mb-4">Join a community of users to help get the best possible golf experience!</p>
            <form onSubmit={handleSignUp}>
                <label htmlFor="email">Email:</label><br></br>
                <input className="mb-4 text-black" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
                <label htmlFor="pass">Password:</label><br></br>
                <input className="mb-4 text-black" type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
                <label htmlFor="confirm"> Confirm Password:</label><br></br>
                <input className="mb-4 text-black" type="password" id="confirm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input><br></br>

                <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Sign Up</button>

                {error && <p className="text-red-500 mt-2">{error}</p>}
                {success && <p className="text-green-600 mt-2">{success}</p>}
            </form>
        </div>
        </>
    );
}