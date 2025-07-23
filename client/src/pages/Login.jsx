import Header from "../components/Header";

export default function Login() {
    return (
        <>
        <Header/>
        <div>
            <form>
                <label for="email">Email:</label><br></br>
                <input type="email" id="email" name="email"></input><br></br>
                <label for="pass">Password:</label><br></br>
                <input type="text" id="pass" name="pass"></input><br></br>
            </form>
        </div>
        </>
    );
}