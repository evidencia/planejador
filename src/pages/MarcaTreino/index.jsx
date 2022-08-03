import { useState } from 'react';
import Modal from 'react-modal';

import Futvolei from '../../assets/Imagens/campos/futebol/MEIO-CAMPO.png'
import jogadorAzul from '../../assets/Imagens/jogadores/futebol/EQUIPE-AZUL/2.png';
import jogadorPreto from '../../assets/Imagens/jogadores/futebol/EQUIPE-PRETA/2.png';
import jogadorVermelho from '../../assets/Imagens/jogadores/futebol/EQUIPE-VERMELHA/2.png';
import goleiro from '../../assets/Imagens/jogadores/futebol/GOLEIROS/3.png';
import bola from '../../assets/Imagens/icons/futebol/BOLA-1.png';
import { BiText, BiCategoryAlt } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { FaReply, FaRegSave, FaArrowLeft } from 'react-icons/fa';

import jogadorAmarelo1 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/1.png';
import jogadorAmarelo2 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/2.png';
import jogadorAmarelo3 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/3.png';
import jogadorAmarelo4 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/4.png';
import jogadorAmarelo5 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/5.png';
import jogadorAmarelo6 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/6.png';
import jogadorAmarelo7 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/7.png';
import jogadorAmarelo8 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/8.png';
import jogadorAmarelo9 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/9.png';
import jogadorAmarelo10 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/10.png';
import jogadorAmarelo11 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/11.png';
import jogadorAmarelo12 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/12.png';
import jogadorAmarelo13 from '../../assets/Imagens/jogadores/futebol/EQUIPE-AMARELA/13.png';


import './styles.scss';

function MarcaTreino() {

   const [modalIsOpen, setIsOpen] = useState(false);

   function handleOpenModal() {
     setIsOpen(true);
   }
 
   function handleCloseModal() {
     setIsOpen(false);
   }
 
  return (
      <div className="main-wraper">
        <div className='body-main'>

          <div className="aside-left">
            <button>
               <img src={jogadorAmarelo2} alt="" />
            </button>

            <button>
               <img src={jogadorAzul} alt="" />
            </button>

            <button>
               <img src={jogadorPreto} alt="" />
            </button>

            <button>
               <img src={jogadorVermelho} alt="" />
            </button>

            <button>
               <img src={goleiro} alt="" />
            </button>

            <button>
               <img src={bola} alt="" />
            </button>

            <button>
               <FaReply color="#000" />
            </button>

            <button>
               <BiText color="#000" />
            </button>

            <button>
               <BiCategoryAlt color="#000" />
            </button>
          </div>

          <div className="main-content">
              <img src={Futvolei} alt="" />
          </div>

          <div className="aside-right">
            <button onClick={handleOpenModal}>
               <BiText color="#000" />
            </button>

            <button>
               <FaRegSave color="#000" />
            </button>

            <button>
               <FaArrowLeft color="#000" />
            </button>

            <button>
               <MdDelete color="#000" />
            </button>
          </div>
        </div>

        <div className="footer">
            <button>
               <img src={jogadorAmarelo1} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo2} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo3} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo4} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo5} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo6} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo7} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo8} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo9} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo10} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo11} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo12} alt="" />
            </button>

            <button>
               <img src={jogadorAmarelo13} alt="" />
            </button>

         </div>    

          <Modal
            isOpen = {modalIsOpen}
            onRequestClose = {handleCloseModal}
            overlayClassName = "react-modal-overlay"
            className="react-modal-content modal"
          >
            <div className="descricao">
                <form>
                  <label>Titulo e objectivo geral da atividade</label>
                  <input type="text"/>
                  
                   <div className="time">
                     <div>
                        <label>Duração total em minutos</label>
                        <input type="text"/>
                     </div>

                     <div>
                        <label>Bloco de duração Ex: 3X7</label>
                        <input type="text"/>
                     </div>

                     <div>
                        <label>Dimensão Ex: 20X20 metros</label>
                        <input type="text"/>
                     </div>

                     <div>
                        <label>Relação numerica Ex: 5X4</label>
                        <input type="text"/>
                     </div> 
                   </div>

                   <label>
                      <strong>Descrição: </strong>
                      Descreva aqui a execução do exerciciocom suas regras, ações pontuaçoẽs e objectivos, esperados do exercicio.
                   </label>
                   <textarea name=""></textarea>
                </form>
            </div>

          </Modal>
      </div>
  );
}

export default MarcaTreino;