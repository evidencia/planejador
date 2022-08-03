import React from 'react';
import { useNavigate } from 'react-router-dom';

import Futebol from '../../assets/Imagens/esportes/futebol.jpg'
import Basquete from '../../assets/Imagens/esportes/basquete.jpg'
import Volei from '../../assets/Imagens/esportes/volei.jpg'
import Futsal from '../../assets/Imagens/esportes/futsal.jpg'
import Futvolei from '../../assets/Imagens/esportes/futvolei.jpg'
import Tenis from '../../assets/Imagens/esportes/tenis.jpg'
import VoleiPraia from '../../assets/Imagens/esportes/voleiPraia.jpg'
import Handebol from '../../assets/Imagens/esportes/handebol.jpg'

import './styles.scss';

function Esportes() {


  const navigate = useNavigate();

  function acessTreino(){
    navigate('/selecionar');
  }

  return (
      <main className='main'>
          <div onClick={acessTreino}v>
            <img src={Basquete} alt="" />
          </div>

          <div onClick={acessTreino}>
            <img src={Futebol} alt="" />
          </div>

          <div onClick={acessTreino}>
            <img src={Futsal} alt="" />
          </div>

          <div onClick={acessTreino}>
            <img src={Futvolei} alt="" />
          </div>

          <div onClick={acessTreino}>
            <img src={Handebol} alt="" />
          </div>

          <div  onClick={acessTreino}>
            <img src={Tenis} alt="" />
          </div>

          <div onClick={acessTreino}>
            <img src={Volei} alt="" />
          </div>

          <div onClick={acessTreino}>
            <img src={VoleiPraia} alt="" />
          </div>

          
      </main>
  );
}

export default Esportes;