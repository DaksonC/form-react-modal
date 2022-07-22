import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export function PageListUsers () {

    // Get the users
    useEffect(() => {
        axios.get('http://localhost:3333/users')
        .then((response) => {
            console.log(response.data)
        })
        .catch(() => {
            console.log('Deu ruim!')
        })
    }, [])

    return(
        <>
            <h1>Page List Users</h1>
            <Link to='/'>Home</Link>
        </>
    )
}