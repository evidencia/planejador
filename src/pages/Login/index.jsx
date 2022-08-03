import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './styles.scss';


function Login() {

  const navigate = useNavigate();

  function acessHome(){
    navigate('/home');
  }

  return (
      <div className="container">
          <div className="content">
            <form>
              <input type="text" placeholder='Nome do usuario' autoFocus />
              <input type="password" placeholder='Sua senha' />
              <input type="submit" value='Entrar'  onClick={acessHome}/>
            </form>
            <p>Ainda não tem uma conta? <Link to="">Criar conta</Link></p>
          </div>
      </div>
  );
}

export default Login;