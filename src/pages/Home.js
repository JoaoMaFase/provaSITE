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
          <section className='secao-conteudo'>
            <h1>Controle de Clientes</h1>
            <div>
              <h1>Novo Cliente</h1>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <a>Salvar</a>
            </div>
            <div>

            </div>
          </section>
        }
        {}
        {}
        {}
      </section>
    </div>
  );
}

export default Home;
