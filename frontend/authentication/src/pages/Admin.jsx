import { useEffect, useState } from "react"
const Admin = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/auth/login')
        .then(response => response.json())
        .then(data => setUser(data))
    }, [])

    if(!user) {
        return <h1>nop</h1>
    }
    return (
        <div>
            <h1>admin</h1>
        </div>
    )
}

export default Admin
