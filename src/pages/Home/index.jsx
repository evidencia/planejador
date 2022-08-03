import React from 'react';
import { useNavigate } from 'react-router-dom';


import Table from '../../components/Table';

import { FaSave } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { GiBabyfootPlayers } from 'react-icons/gi';

import agenda from '../../assets/Imagens/ola.png';
import ArbitoImg from '../../assets/Imagens/referee.png';
import './styles.scss';

function Home() {

  const navigate = useNavigate();

  function acessEsportes(){
    navigate('/adicionar');
  }

  return (
      <div className='content'>
        <header>

          <div className="logoHome">
              <img src={ArbitoImg} alt="" />
          </div>

          <div className="title">
              <h2>PLANEJADOR DE TREINO</h2>
              <p>A EVOLUÇÃO DOS SEUS ATLETAS COMEÇA AQUI</p>
          </div>

          <div className="logoAgenda">
              <img src={agenda} alt="" />
          </div>

          <div className="buttons">
              <button onClick={acessEsportes}>
                <GiBabyfootPlayers color="#333" size={30}/>
              </button>

              <button>
                <FaSave color="#333" size={30}/>
              </button>

              <button>
                  <MdClose color="#333" size={30}/>
              </button>
          </div>

        </header> 

        <Table />
      </div>
  );
}

export default Home;