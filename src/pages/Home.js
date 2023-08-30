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
        {page == 2 &&
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
                    <th className='um'>Nome</th>           
                    <th className='dois'>CPF</th> 
                    <th className='tres'>CNH</th> 
                    <th className='quatro'>Telefone</th> 
                    <th className='cinco'>Email</th> 
                  </tr>
                </thead>
                <tbody>
                  <tr className='conteudo-tabela'>
                    <td className='um'>João Paulo do Nascimento Souza Vieira Santana Almeida Brito</td>
                    <td className='dois'>495.426.828.16</td>
                    <td className='tres'>01234567891</td>
                    <td className='quatro'>(11) 94453-2220</td>
                    <td className='cinco'>nascc.joao@gmail.com</td>
                    <div>
                      <img className='edit' src='/edit.svg'/>
                      <img className='delete' src='/trash.svg'/>
                    </div>
                      
                  </tr>
                  <tr className='conteudo-tabela'>
                    <td>João Paulo do Nascimento Souza</td>
                    <td>495.426.828.16</td>
                    <td>01234567891</td>
                    <td>(11) 94453-2220</td>
                    <td>nascc.joao@gmail.com</td>
                    <div>
                      <img className='edit' src='/edit.svg'/>
                      <img className='delete' src='/trash.svg'/>
                    </div>
                  </tr>
                  <tr className='conteudo-tabela'>
                    <td>João Paulo do Nascimento Souza</td>
                    <td>495.426.828.16</td>
                    <td>01234567891</td>
                    <td>(11) 94453-2220</td>
                    <td>nascc.joao@gmail.com</td>
                    <div>
                      <img className='edit' src='/edit.svg'/>
                      <img className='delete' src='/trash.svg'/>
                    </div>
                  </tr>
                  <tr className='conteudo-tabela'>
                    <td>João Paulo do Nascimento Souza</td>
                    <td>495.426.828.16</td>
                    <td>01234567891</td>
                    <td>(11) 94453-2220</td>
                    <td>nascc.joao@gmail.com</td>
                    <div>
                      <img className='edit' src='/edit.svg'/>
                      <img className='delete' src='/trash.svg'/>
                    </div>
                  </tr>
                  <tr className='conteudo-tabela'>
                    <td>João Paulo do Nascimento Souza</td>
                    <td>495.426.828.16</td>
                    <td>01234567891</td>
                    <td>(11) 94453-2220</td>
                    <td>nascc.joao@gmail.com</td>
                    <div>
                      <img className='edit' src='/edit.svg'/>
                      <img className='delete' src='/trash.svg'/>
                    </div>
                  </tr>
                </tbody>
                   
              </table>
                
              
            </section>
          </div>
        }
        {page == 3 &&
          <div className='conteudo-mae'>
          <section className='secao-conteudo'>
            <h1>Controle de Veículos</h1>
            <div className='secao-forms-um'>
              <h1>Novo Veículo</h1>
                <div className='input-box'>
                  <input type='text' placeholder='Carro'/>
                  <label>Tipo</label>
                </div>
                <div className='input-box'>
                  <label>Modelo</label>
                  <input type='text' placeholder='HB20'/>
                </div>
                <div className='input-box'>
                  <label>Marca</label>
                  <input type='text' placeholder='Hyundai'/>
                </div>
                <div className='input-box'>
                  <label>Ano</label>
                  <input type='text' placeholder='2016'/>
                </div>
                <div className='input-box'>
                  <label>Placa</label>
                  <input type='text' placeholder='ABC-000'/>
                </div>
              <a>SALVAR</a>
            </div>
          </section>
          <section className='secao-lista'>
            <h1>Lista de Veículos</h1>
            <div className='input-box'>
              <label>Modelo, Marca ou Placa</label>
              <input type='text' placeholder='Prius'/>
            </div>
            <table>
              <thead>
                <tr>
                  <th className='um'>Modelo</th>           
                  <th className='dois'>Marca</th> 
                  <th className='tres'>Ano</th> 
                  <th className='quatro'>Tipo</th> 
                  <th className='cinco'>Placa </th> 
                </tr>
              </thead>
              <tbody>
                <tr className='conteudo-tabela'>
                  <td className='um'>CG 160 Titan</td>
                  <td className='dois'>Honda</td>
                  <td className='tres'>2016</td>
                  <td className='quatro'>Moto</td>
                  <td className='cinco'>ABC-126</td>
                  <div>
                      <img className='edit' src='/edit.svg'/>
                      <img className='delete' src='/trash.svg'/>
                  </div>
                </tr>
                <tr className='conteudo-tabela'>
                  <td className='1'>CG 160 Titan</td>
                  <td className='2'>Honda</td>
                  <td className='3'>2016</td>
                  <td className='4'>Moto</td>
                  <td className='5'>ABC-126</td>
                  <div>
                      <img className='edit' src='/edit.svg'/>
                      <img className='delete' src='/trash.svg'/>
                  </div>
                </tr>
                <tr className='conteudo-tabela'>
                  <td className='1'>CG 160 Titan</td>
                  <td className='2'>Honda</td>
                  <td className='3'>2016</td>
                  <td className='4'>Moto</td>
                  <td className='5'>ABC-126</td>
                  <div>
                      <img className='edit' src='/edit.svg'/>
                      <img className='delete' src='/trash.svg'/>
                  </div>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        }
        {}
        {}
      </section>
    </div>
  );
}

export default Home;
