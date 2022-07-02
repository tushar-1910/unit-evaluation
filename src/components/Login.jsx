import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { isAuth } = React.useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = async () => {
        const payload = { email, password };
        try {
            let res = await fetch(`https://reqres.in/api/login`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let token = await res.json()
            console.log(token)
            isAuth(true);
            navigate("/");

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <h1>Login</h1>
            <label>
                Email :
                <input type="text" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password :
                <input type="text" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleLogin}>LOGIN</button>
        </div>
        );
}

export default Login;
