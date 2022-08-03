import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import TableTreino from '../../components/TableTreino';


import Futebol from '../../assets/Imagens/campos/futebol/CAMPO-GRANDE-AREA.png';
import Basquete from '../../assets/Imagens/campos/futebol/CAMPO-INTEIRO.png'
import Futvolei from '../../assets/Imagens/campos/futebol/MEIO-CAMPO.png'
import Futsal from '../../assets/Imagens/campos/futebol/CAMPO-SEM-MARCAÇÃO.png'

import { FaSave, FaPlus, FaRegFileAlt } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import avatar from '../../assets/Imagens/noprofil.jpg'

import'./styles.scss';

function AddTreinos() {

  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }


  function marcarTreino(){
    navigate('/marcar');
  }



  return(
    <div className="contents">
        <main>
          <hr />

          <span>
              <input type="text" placeholder='Nome da escolinha / Clube' />
          </span>

          <form>
              <button type='button'>
                  <img src={avatar} alt="" />

                <div>
                  <input type="file" /> 
                  <FiUpload color="#fff" size={20}/> 
                </div> 
              </button>

              <div>
                  <input type="text" placeholder='Nome do professor' />
                  <input type="text"  placeholder='Categoria'/>
                  <input type="text"  placeholder='Data da execução do treino' />
                  <input type="text"  placeholder='Metodologia' />
              </div>

              <textarea placeholder="Objectivo : descreva aqui os objectivos que deseja alcançar com este treino"></textarea>
          </form>

          <hr />

          <div className="buttons">
              <button>
                <FaSave color="#333" size={30}/>
              </button>

              <button onClick={handleOpenModal}>
                <FaPlus color="#333" size={30}/>
              </button>

              <button>
                  <FaRegFileAlt color="#333" size={30}/>
              </button>
        </div>
            
        <div className='campos'>
          <Modal
            isOpen = {modalIsOpen}
            onRequestClose = {handleCloseModal}
            overlayClassName = "react-modal-overlay"
            className="react-modal-content modal"
          >
            <div className="campoTreino">
                <div onClick={marcarTreino}v>
                  <img src={Basquete} alt="" />
                </div>

                <div onClick={marcarTreino}>
                  <img src={Futebol} alt="" />
                </div>

                <div onClick={marcarTreino}>
                  <img src={Futvolei} alt="" />
                </div>

                <div onClick={marcarTreino}>
                  <img src={Futsal} alt="" />
                </div> 
            </div>

          </Modal>
       </div>

        </main>
        
        <TableTreino />
        
     </div>
     

  );
}

export default AddTreinos;