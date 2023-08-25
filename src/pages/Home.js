import './Home.scss';

function Home() {
  return (
    <div className="home">
      <section className='home-menu'>
        <div className='menu-logo-box'>
          <img src='/logo.png' alt='Logo'/>
          <img src='/logo2.png' alt='Logo'/>
        </div>

        <div className='menu-options'>
          <a><img src='/home.svg'/>Home</a>
          <a><img src='/user.svg'/>Clientes</a>
          <a><img src='/car.png'/>Veículos</a>
          <a><img src='/key.png'/>Locação</a>
        </div>
      </section>
      <section className='home-conteudo'>
        <div className='inicial-bar'>
          <h1>Olá, que bom que você voltou!</h1>
          <div className='user-box'>
            <img src='/icon.png'/>
          </div>
        </div>
        {}
        {}
        {}
        {}
      </section>
    </div>
  );
}

export default Home;
