import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IUsers } from '../../interfaces'
import './style.css'


export function PageListUsers () {
    const [ users, setUsers ] = useState<IUsers[]>([])

    // Recebendo os dados da api
    useEffect(() => {
        axios.get('http://localhost:3333/users')
        .then((response) => {
            setUsers(response.data)
        })
        .catch(() => {
            console.log('Deu ruim!')
        })
    }, [])

    return(
        <div className='container'>
            <div className='header'>
                <h1>Page List Users</h1>
                <Link to='/'>Home</Link>
            </div>
            <div >
                {users.map((users:IUsers) => {
                    return(
                        <table className='card' key={users.id}>
                            <tbody>
                                <tr>
                                    <td>
                                        <li>
                                            <h1>{users.nome}</h1>
                                        </li>
                                        <li>
                                            <p>E-mail: {users.email}</p>
                                        </li>
                                        <li>
                                            <p>Linguagem: {users.language}</p>
                                        </li>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
            </div>
        </div>
    )
}