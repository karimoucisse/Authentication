import { useEffect, useState } from "react"

const Admin = () => {
    const [user, setUser] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/admin', {
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => setUser(data))
    }, [])

    if(!user) {
        return <h1>nop</h1>
    }

    return (
        <div>
            {user.map((element) => {
                return <div key={element.username}>
                    <h2>{element.username}</h2>
                    <h3>{element.email}</h3>
                    <p>{element.age}</p>

                </div>
            })}
        </div>
    )
}

export default Admin
