import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const LoginPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", {
                username,
                password,
            });
            localStorage.setItem("token", response.data.token)
            window.location.href = "/dashboard";
        }catch(err) {
            setError("username or password wrong!")
        }
    };
    return (
        <div className="container mt-5">
            <h2>Login</h2>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="text" className="form-control mb-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className="form-control mb-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <p>Don't  have an account? <Link to="/register">Sign Up</Link></p>
        </div>
    );
};
export default LoginPage