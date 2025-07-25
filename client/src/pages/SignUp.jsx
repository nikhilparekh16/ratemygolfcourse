import Header from "../components/Header";

export default function SignUp() {
    return (
        <>
        <Header/>
        <div>
        <h1 className="text-3xl font-semibold">Sign Up</h1>
        <p className="mb-4">Join a community of users to help get the best possible golf experience!</p>
            <form>
                <label for="email">Email:</label><br></br>
                <input className="mb-4" type="email" id="email" name="email"></input><br></br>
                <label for="pass">Password:</label><br></br>
                <input className="mb-4" type="text" id="pass" name="pass"></input><br></br>
                <label for="confirm"> Confirm Password:</label><br></br>
                <input type="text" id="confirm" name="confirm"></input><br></br>
            </form>
        </div>
        </>
    );
}