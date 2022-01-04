import "../pages/login.scss"
import { useState, } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:5000/auth/login', {
            method : "post",
            headers: {
                // 'accept' : 'application/json',
                'content-type' : 'application/json'
            },
            credentials:'include',
            body: JSON.stringify({
                email : email,
                password: password
            })
        })
        .then(response => {
            if(response.status >= 400) {
                throw response.statusText
            }else {
                return response.json()
            }
        })
        .then(data => {
            console.log(data)
            navigate('/admin')
        })
        .catch(err => console.log(err))


        // console.log(email, password );
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setpassword(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email" 
                onChange={handleEmailChange} 
                // value={email}
            />
            <input 
                type="password" 
                placeholder="Password" 
                onChange={handlePasswordChange} 
                // value={password}
            />
            <button>Login</button>
        </form>
    )
}

export default Login
