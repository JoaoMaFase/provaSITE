import { useState } from 'react';
import './Home.scss';

function Home() {
  const [page,setPage] = useState(1)
  return (
    <div className="home">
      <section className='home-menu'>
        <div className='menu-logo-box'>
          <img src='/logo.png' alt='Logo'/>
          <img src='/logo2.png' alt='Logo'/>
        </div>

        <div className='menu-options'>
          <a onClick={() => setPage(1)} className={page == 1 ? 'hovered' : 'not-hovered'}><img src='/home.svg'/>Home</a>
          <a onClick={() => setPage(2)} className={page == 2 ? 'hovered' : 'not-hovered'}><img src='/user.svg'/>Clientes</a>
          <a onClick={() => setPage(3)} className={page == 3 ? 'hovered' : 'not-hovered'}><img src='/car.png'/>Veículos</a>
          <a onClick={() => setPage(4)} className={page == 4 ? 'hovered' : 'not-hovered'}><img src='/key.png'/>Locação</a>
        </div>
      </section>
      <section className='home-conteudo'>
        <div className='inicial-bar'>
          <h1>Olá, que bom que você voltou!</h1>
          <div className='user-box'>
            <img src='/icon.png'/>
          </div>
        </div>
        <h1>ÁREA ADMINISTRATIVA</h1>
        {page == 1 &&
          <div className='conteudo-mae'>
            <section className='secao-conteudo'>
              <h1>Controle de Clientes</h1>
              <div className='secao-forms-um'>
                <h1>Novo Cliente</h1>
                  <div className='input-box'>
                    <input type='text' placeholder='Bruno'/>
                    <label>Nome</label>
                  </div>
                  <div className='input-box'>
                    <label>Email</label>
                    <input type='text' placeholder='bruno@gmail.com'/>
                  </div>
                  <div className='input-box'>
                    <label>Telefone</label>
                    <input type='text' placeholder='(11) 99938-5764'/>
                  </div>
                  <div className='input-box'>
                    <label>CPF</label>
                    <input type='text' placeholder='323.323.232-33'/>
                  </div>
                  <div className='input-box'>
                    <label>CNH</label>
                    <input type='text' placeholder='06856723546897'/>
                  </div>
                <a>SALVAR</a>
              </div>
              <div>

              </div>
            </section>

            <section className='secao-lista'>
              <h1>Lista de Clientes</h1>
              <div className='input-box'>
                <label>Nome</label>
                <input type='text' placeholder='Bruno'/>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Nome</th>           
                    <th>CPF</th> 
                    <th>CNH</th> 
                    <th>Telefone</th> 
                    <th>Email</th> 
                  </tr>
                </thead>
                <tbody>
                  <tr className='conteudo-tabela'>
                    <td>
                      João Paulo do Nascimento Souza
                    </td>
                    <td>
                      495.426.828.16
                    </td>
                    <td>
                      01234567891
                    </td>
                    <td>
                      (11) 94453-2220
                    </td>
                    <td>
                      nascc.joao@gmail.com
                    </td>
                    <img className='edit' src='/edit.svg'/>
                    <img className='delete' src='/trash.svg'/>
                  </tr>
                  <tr className='conteudo-tabela'>
                    <td>
                      João Paulo do Nascimento Souza
                    </td>
                    <td>
                      495.426.828.16
                    </td>
                    <td>
                      01234567891
                    </td>
                    <td>
                      (11) 94453-2220
                    </td>
                    <td>
                      nascc.joao@gmail.com
                    </td>
                    <img className='edit' src='/edit.svg'/>
                    <img className='delete' src='/trash.svg'/>
                  </tr>
                  <tr className='conteudo-tabela'>
                    <td>
                      João Paulo do Nascimento Souza
                    </td>
                    <td>
                      495.426.828.16
                    </td>
                    <td>
                      01234567891
                    </td>
                    <td>
                      (11) 94453-2220
                    </td>
                    <td>
                      nascc.joao@gmail.com
                    </td>
                    <img className='edit' src='/edit.svg'/>
                    <img className='delete' src='/trash.svg'/>
                  </tr>
                  <tr className='conteudo-tabela'>
                    <td>
                      João Paulo do Nascimento Souza
                    </td>
                    <td>
                      495.426.828.16
                    </td>
                    <td>
                      01234567891
                    </td>
                    <td>
                      (11) 94453-2220
                    </td>
                    <td>
                      nascc.joao@gmail.com
                    </td>
                    <img className='edit' src='/edit.svg'/>
                    <img className='delete' src='/trash.svg'/>
                  </tr>
                  <tr className='conteudo-tabela'>
                    <td>
                      João Paulo do Nascimento Souza
                    </td>
                    <td>
                      495.426.828.16
                    </td>
                    <td>
                      01234567891
                    </td>
                    <td>
                      (11) 94453-2220
                    </td>
                    <td>
                      nascc.joao@gmail.com
                    </td>
                    <img className='edit' src='/edit.svg'/>
                    <img className='delete' src='/trash.svg'/>
                  </tr>
                </tbody>
              </table>
              
            </section>
          </div>
        }
        {}
        {}
        {}
      </section>
    </div>
  );
}

export default Home;
