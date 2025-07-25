import Header from "../components/Header";

export default function Login() {
    return (
        <>
        <Header/>
        <div>
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
            <form>
                <label for="email">Email:</label><br></br>
                <input className="mb-4" type="email" id="email" name="email"></input><br></br>
                <label for="pass">Password:</label><br></br>
                <input type="text" id="pass" name="pass"></input><br></br>
            </form>
        </div>
        </>
    );
}