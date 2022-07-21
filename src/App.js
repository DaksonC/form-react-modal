import { useState } from 'react'
import Modal from 'react-modal'
import './global.css'

Modal.setAppElement ( '#root' )

function App() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [formValue, setFormValue] = useState({})
  
  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }
  const customStyles = {
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
      height: '60%',
      position: 'absolute',
      top: '10%',
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
  function handleSubmit(e){
   e.preventDefault()
   const formData = new FormData(e.target)
   const data = Object.fromEntries(formData)
   console.log('deu bom!', data)
  }
  function handleChangeInput(e){
    const { name, value } = e.target
    setFormValue({...formValue, [name] : value})
    console.log('Top!', formValue)
  }
        
  return (
    <div className='container'>
      <div className='title'>
        <h1># aprendendo react-modal e manipulação de inputs</h1>
      </div>
     <button 
      onClick={handleOpenModal}
      className='btn-open'
      ># modal</button> 
     <Modal 
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        >
        <button 
          onClick={handleCloseModal}
          className='btn-close'
          >X</button>
          <h2># form user</h2>
          <form
            onSubmit={handleSubmit}
          >
            <input 
              type='text'
              name='nome'
              placeholder='Digite seu nome'
              onChange={handleChangeInput}
              value={formValue.name}
            />
            <input 
              type="text" 
              name="email" 
              placeholder='Digite seu email'
              onChange={handleChangeInput}
              value={formValue.email || ''}
            />
            <select
              name="language"
              onChange={handleChangeInput}
              value={formValue.language || ''}
            >
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

export default App;
