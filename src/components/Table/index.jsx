import React from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa'


import './styles.scss';

function Table() {
  return (
      <div className='content'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do clube</th>
                        <th>Nome do Professor</th>
                        <th>Categoria</th>
                        <th>Esporte</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Barcelona FC</td>
                        <td>Mourinho</td>
                        <td>Sub 21</td>
                        <td>Futebol</td>
                        <td>
                             <div>
                                <span>
                                    <FaEdit color="#333" size={16}/>
                                </span>
                                
                                <span>
                                    <FaTrash color="#333" size={16}/>
                                </span>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Real Madrid FC</td>
                        <td>Zidane</td>
                        <td>Sub 21</td>
                        <td>Futebol</td>
                        <td>
                            <div>
                                <span>
                                    <FaEdit color="#333" size={16}/>
                                </span>
                                
                                <span>
                                    <FaTrash color="#333" size={16}/>
                                </span>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Liverpool FC</td>
                        <td>Evidencia David</td>
                        <td>Sub 21</td>
                        <td>Futebol</td>
                        <td>
                            <div>
                                <span>
                                    <FaEdit color="#333" size={16}/>
                                </span>
                                
                                <span>
                                    <FaTrash color="#333" size={16}/>
                                </span>
                            </div>
                            
                        </td>
                    </tr>
                    
                </tbody>

            </table>
      </div>
  );
}

export default Table;