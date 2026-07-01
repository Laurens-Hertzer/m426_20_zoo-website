import {useState} from "react";

export default function Registration() {
    const [user, setUser] = useState()
    const [userLogin, setUserLogin] = useState()

    return (
        <>
            <h1>Registration</h1>
            <form>
                <label>Username</label>
                <input onChange={(e) => setUser(e.target.value)} placeholder="Max. 128 Chars" max={128}/>
                <label>Password</label>
                <input type="password"/>
                <button onClick={(e) => {
                    e.preventDefault()
                    alert("Account " + user + " created!")
                    localStorage.setItem("user", user)
                }} type="submit">Sign Up
                </button>
            </form>
            <button onClick={() => window.location.replace("")
            } style={{fontsize: "10px"}}>Als Gast
            </button>
            <button onClick={() => window.location.replace("")
            } style={{fontsize: "10px"}}>Logout
            </button>
            <h1>Login</h1>
            <form>
                <label>Username</label>
                <input onChange={(e) => setUserLogin(e.target.value)} max={128}/>
                <label>Password</label>
                <input type="password"/>
                <button onClick={(e) => {
                    if (localStorage.getItem("user") !== userLogin) {
                        alert("Wrong Username or Password!")
                    }
                    alert("Welcome back " + user + "!")
                    window.location.replace("")
                }} type="submit">Sign In
                </button>
            </form>
        </>
    )
}
