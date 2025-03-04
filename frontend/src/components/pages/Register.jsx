import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError("Passwords don't match")
            return
        }
        try {
            await axios.post("http://127.0.0.1:8000/api/users/register", {
                username,
                password,
            });
            setSuccess("User registered successfully.")
        }catch(err) {
            setError("Error while creating user register")
        }
    };
    return (
        <div className="container mt-5">
            <h2>Sign Up</h2>
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success}</p>}
            <form onSubmit={handleRegister}>
                <input type="text" className="form-control mb-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className="form-control mb-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <input type="password" className="form-control mb-2" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            </form>
            <p>Already have an account? <Link to="/">Register</Link></p>

        </div>
    )
}
export default Register