import "../pages/loginCss/login.css"
import { useEffect, useState } from "react"

const Login = () => {
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/admin', {
            method : "POST",
            headers: {
                'accept' : 'application/json',
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                email : email,
                username: username
            })
        })
    }, [])

const handleEmailChange = () => {
    
}
    return (
        <form>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
        </form>
    )
}

export default Login
