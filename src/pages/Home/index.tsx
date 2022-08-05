import Modal, { Styles } from 'react-modal'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { IUsers }  from '../../interfaces'
import * as yup from "yup";
import '../../global.css'
import axios from 'axios';
import React from 'react'

Modal.setAppElement ( '#root' )

const schema = yup.object({
  nome: yup.string().required('* campo obrigatório!'),
  email: yup.string().required('* campo obrigatório!'),
  language: yup.string().required('* campo obrigatório!')
}).required();

export function Home() {
  const navigate = useNavigate()
  const { register, handleSubmit,  formState:{ errors } } = useForm<IUsers>({
    resolver: yupResolver(schema)
  })
  //Enviando os dados para api
  const onSubmit = (data: IUsers) => axios.post('http://localhost:3333/users', data)
  .then(() => {
    console.log('Deu bom =)')
    navigate('/lista-usuarios')
  })
  .catch(() => {
    console.log('Deu ruim :(')
  })

  const [modalIsOpen, setIsOpen] = useState(false)
  
  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }
  const customStyles: Styles = {
    overlay:{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 0, 255, 0.1)'
    },
    content:{
      width: '40%',
      height: '75%',
      position: 'absolute',
      top: '15%',
      left: '30%',
      right: 'auto',
      bottom: 'auto',
      background: '#000',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '10px',
      outline: 'none',
      padding: '20px',
      border:'none',
      boxShadow: '1px 1px 1px rgba(0,0,0,0.1)'
    }
  }
  
  return (
    <div className='container'>
      <div className='title'>
        <h1># aprendendo react-modal e manipulação de inputs</h1>
      </div>
      <div className='lista-usuarios'>
        <Link to='/lista-usuarios'>List Users</Link>
      </div>
     <button onClick={handleOpenModal} className='btn-open'># modal</button>
     
     <Modal 
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <button onClick={handleCloseModal} className='btn-close'>X</button>
        <h2># form user</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <input {...register('nome')} />
          <p>{errors.nome?.message}</p>
          <input {...register('email')} />
          <p>{errors.email?.message}</p>
          <select {...register('language')} >
            <p>{errors.language?.message}</p>
            <option value="solidity">Solidity</option>
            <option value="javascript">Javascript</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="c#">C#</option>
          </select>
          <button type="submit" className='btn-save'>Salvar</button>
        </form>
      </Modal>

    </div>
  );
}



