import React from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa'
import { IoMdEye } from 'react-icons/io'



import './styles.scss';

function Table() {
  return (
      <div className='content'>
            <table>
                <thead>
                    <tr>
                        <th></th>

                        <th>Titulo</th>
                        <th>Relações Numerica</th>
                        <th>Blocos</th>
                        <th>Dimensão</th>
                        <th>Descrição</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                             <div>
                                <span>
                                    <IoMdEye color="#333" size={16}/>
                                </span>
                                <span>
                                    <FaEdit color="#333" size={16}/>
                                </span>
                                
                                <span>
                                    <FaTrash color="#333" size={16}/>
                                </span>
                            </div>
                        </td>
                        <td>Exercio 1</td>
                        <td>10</td>
                        <td></td>
                        <td>Meio campo</td>
                        <td>Regras, movimentações e funções</td>
                        
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <span>
                                    <IoMdEye color="#333" size={16}/>
                                </span>
                                <span>
                                    <FaEdit color="#333" size={16}/>
                                </span>
                                
                                <span>
                                    <FaTrash color="#333" size={16}/>
                                </span>
                            </div>
                        </td>
                        <td>Exercio 2</td>
                        <td>10</td>
                        <td></td>
                        <td>Meio campo</td>
                        <td>Regras, movimentações e funções</td>                      
                    </tr>
                    
                </tbody>

            </table>
      </div>
  );
}

export default Table;