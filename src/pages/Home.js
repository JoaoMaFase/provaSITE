import { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
import { Link } from 'react-scroll';

function Home() {
  // variável de renderização condicional
  const [page,setPage] = useState(2)
  
  // variáveis de gerenciamento de clientes
  const [clientes,setClientes] = useState ('')
  const [nome,setNome] = useState('')
  const [email,setEmail] = useState('')
  const [telefone,setTelefone] = useState('')
  const [cpf,setCpf] = useState('')
  const [cnh,setCnh] = useState('')
  const [pesquisaCliente,setPesquisaCliente] = useState('')
  const [button,setButton] = useState('SALVAR')
  const [idEditable,setIdEditable] = useState(0)

  // variáveis de gerenciamento de veículos
  const [pesquisaVeiculo,setPesquisaVeiculo] = useState('')
  const [car,setCar] = useState('')
  const [modelo,setModelo] = useState('')
  const [marca,setMarca] = useState('')
  const [ano,setAno] = useState('')
  const [placa,setPlaca] = useState('')
  const [buttonCar,setButtonCar] = useState('SALVAR')
  const [veiculos,setVeiculos] = useState('')
  const [idVeiculoEdit,setVeiculoId] = useState('')
  const [tiposVeiculos,setTiposVeiculos] = useState('')

  async function BuscarClientes(){
    try {
      let url = ''
      if(pesquisaCliente != ''){
        console.log(pesquisaCliente)
        url = 'http://localhost:5000/cliente/busca?nome='+ pesquisaCliente
      }
      else{
        url = 'http://localhost:5000/cliente/todos'
      }
      let r = await axios.get(url)
      setClientes(r.data)
    } catch (error) {
      console.log(error)
    }
    
  }

  async function InserirClientes(){
    try {
      let body = {
        nome: nome, 
        email: email, 
        telefone: telefone, 
        cpf: cpf, 
        cnh: cnh
      }
      let url = 'http://localhost:5000/cliente'
      let r = await axios.post(url,body)
      setClientes(r.data)
      BuscarClientes()
      setNome('')
      setEmail('')
      setTelefone('')
      setCpf('')
      setCnh('')
    } catch (error) {
      console.log(error)
    }
  }

  async function DeletarClientes(id){
    let url = 'http://localhost:5000/cliente/' + id
    await axios.delete(url) 
    BuscarClientes()
  }
  
  function EditarInput(id,nome,cpf,cnh,telefone,email){
    setIdEditable(id)
    setButton('EDITAR')
    setNome(nome)
    setCpf(cpf)
    setCnh(cnh)
    setTelefone(telefone)
    setEmail(email)
  }
  async function EditarCliente() {
    try {
      let url = 'http://localhost:5000/cliente/' + idEditable
      let body = {
        nome: nome, 
        email: email, 
        telefone: telefone, 
        cpf: cpf, 
        cnh: cnh
      }
      await axios.put(url,body)
      setButton('SALVAR')
      setIdEditable(0)
      setNome('')
      setEmail('')
      setTelefone('')
      setCpf('')
      setCnh('')
      BuscarClientes()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (page == 2){
      BuscarClientes()
    }
    else if (page == 3){
      BuscarVeiculos()
    }
  }, [pesquisaCliente, pesquisaVeiculo])
  async function BuscarTipoVeiculos(){
    try {
      let url = 'http://localhost:5000/tipo/veiculo'
      let response = await axios.get(url)
    } catch (error) {
      console.log(error)
    }
  }

  async function BuscarVeiculos(){
    try {
      let url = ''
      if (pesquisaVeiculo){
        url = 'http://localhost:5000/veiculo/todos'
        let response = await axios.get(url)
        setVeiculos(response)
      }
      else{
        url = 'http://localhost:5000/veiculo/busca?mmp=' + pesquisaVeiculo
        let response = await axios.get(url)
        setVeiculos(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  function EditarInputVeiculo(id,carro,modelo,marca,ano,placa){
    setButtonCar('EDITAR')
    setVeiculoId(id)
    setCar(carro)
    setModelo(modelo)
    setMarca(marca)
    setAno(ano)
    setPlaca(placa)
  }

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
              <h1>
                Página inicial
              </h1>
              <p>Boa tarde, meu principe</p>
            </section>
          </div>
        }
        {page == 2 &&
          <div className='conteudo-mae'>
            <section className='secao-conteudo'>
              <h1>Controle de Clientes</h1>
              <div className='secao-forms-um'>
                  <h1>Novo Cliente</h1>
                  <div className='input-box'>
                    <input type='text' placeholder='Bruno' value={nome} onChange={e => setNome(e.target.value)}/>
                    <label>Nome</label>
                  </div>
                  <div className='input-box'>
                    <label>Email</label>
                    <input type='text' placeholder='bruno@gmail.com' value={email} onChange={e => setEmail(e.target.value)}/>
                  </div>
                  <div className='input-box'>
                    <label>Telefone</label>
                    <input type='text' placeholder='(11) 99938-5764' value={telefone} onChange={e => setTelefone(e.target.value)}/>
                  </div>
                  <div className='input-box'>
                    <label>CPF</label>
                    <input type='text' placeholder='323.323.232-33' value={cpf} onChange={e => setCpf(e.target.value)}/>
                  </div>
                  <div className='input-box'>
                    <label>CNH</label>
                    <input type='text' placeholder='06856723546897' value={cnh} onChange={e => setCnh(e.target.value)}/>
                  </div>
                  <div className='btn-div'>
                    <a onClick={button == 'SALVAR' ? () => InserirClientes() : () => EditarCliente()}>{button}</a>
                    {button == 'EDITAR' &&
                      <a className='cancel-button' onClick={() => {setNome('');setCpf('');setCnh('');setEmail('');setTelefone('');setButton('SALVAR')}}>CANCELAR</a>
                    } 
                  </div>
              </div>
            </section>

            <section className='secao-lista'>
              <h1>Lista de Clientes</h1>
              <div className='input-box'>
                <label>Nome</label>
                <input type='text' placeholder='Bruno' value={pesquisaCliente} onChange={e => setPesquisaCliente(e.target.value)}/>
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
                {clientes.length ?
                  clientes.map((item => 
                (
                  <tr id={item.id} className='conteudo-tabela'>
                    <td>{item.nome}</td>
                    <td>{item.cpf}</td>
                    <td>{item.cnh}</td>
                    <td>{item.telefone}</td>
                    <td>{item.email}</td>
                    <td className='td-img'><Link to='inicial-bar' smooth={true} duration={500}><img className='edit' src='/edit.svg' onClick={() => EditarInput(item.id,item.nome,item.cpf,item.cnh,item.telefone,item.email)}/></Link></td>
                    <td className='td-img'><img className='delete' src='/trash.svg' onClick={() => DeletarClientes(item.id)}/></td>
                  </tr>
                )))
              : <tr className='conteudo-tabela'>
                  <td className='td-not-found'>
                    <h1 className='not-found'>
                      Usuário não encontrado/inexistente
                    </h1>
                  </td>
                </tr>
              }
                  
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
                  <input type='text' placeholder='Carro' onChange={(e) => setCar(e.target.value)}/>
                  <label>Tipo</label>
                </div>
                <div className='input-box'>
                  <label>Modelo</label>
                  <input type='text' placeholder='HB20' onChange={(e) => setModelo(e.target.value)}/>
                </div>
                <div className='input-box'>
                  <label>Marca</label>
                  <input type='text' placeholder='Hyundai' onChange={(e) => setMarca(e.target.value)}/>
                </div>
                <div className='input-box'>
                  <label>Ano</label>
                  <input type='text' placeholder='2016' onChange={(e) => setAno(e.target.value)}/>
                </div>
                <div className='input-box'>
                  <label>Placa</label>
                  <input type='text' placeholder='ABC-000' onChange={(e) => setPlaca(e.target.value)}/>
                </div>
                <div className='btn-div'>
                  <a onClick={buttonCar == 'SALVAR' ? () => InserirClientes() : () => EditarCliente()}>{buttonCar}</a>
                  {buttonCar == 'EDITAR' &&
                    <a className='cancel-button' onClick={() => {setCar('');setModelo('');setMarca('');setAno('');setPlaca('');setButtonCar('SALVAR')}}>CANCELAR</a>
                  } 
                </div>
            </div>
          </section>
          <section className='secao-lista'>
            <h1>Lista de Veículos</h1>
            <div className='input-box'>
              <label>Modelo, Marca ou Placa</label>
              <input type='text' placeholder='Prius' value={pesquisaVeiculo} onChange={(e) => setPesquisaVeiculo(e.target.value)}/>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Modelo</th>           
                  <th>Marca</th> 
                  <th>Ano</th> 
                  <th>Tipo</th> 
                  <th>Placa </th> 
                </tr>
              </thead>
              <tbody>
                <tr className='conteudo-tabela'>
                  <td>CG 160 Titan</td>
                  <td>Honda</td>
                  <td>2016</td>
                  <td>Moto</td>
                  <td>ABC-126</td>
                  <td className='td-img'><Link to='inicial-bar' smooth={true} duration={500}><img className='edit' src='/edit.svg' onClick={() => EditarInputVeiculo(item.id,item.nome,item.cpf,item.cnh,item.telefone,item.email)}/></Link></td>
                  <td className='td-img'><img className='delete' src='/trash.svg' onClick={() => DeletarClientes(item.id)}/></td>
                </tr>
                
              </tbody>
            </table>
          </section>
        </div>
        }
      </section>
    </div>
  );
}

export default Home;
