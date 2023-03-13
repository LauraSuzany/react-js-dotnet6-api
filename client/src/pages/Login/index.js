import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'
import './styles.css'
import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'
//props e para acessar esaber que eu estou deniniind esses valores dinamicamente
export default function Login() {
  const [userName, setUserName] = useState(''); 
  const [password, setPassword] = useState(''); 
  //Basicamente e.preventeDefault é para prefinir que de um refresh na página
  async function login(e){
    e.preventDefault();
    const data = {
      userName,
      password
    }
    try{
      const response = await api.post('api/auth/v1/signin', data)
      localStorage.setItem('userName', userName)//Pegar o que foi passado
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
      navigate('/books')
    }catch(error){
      alert('Login faild try again', error)  
    }
  }

  const navigate = useNavigate(''); 
  return (
    <div className="login-container">
      <section className="form">
      <img src={logoImage} alt="Erudio logo" />
      <form onSubmit={login}>
        <h1>Access youy Account</h1>

        <input 
        placeholder="Username"
        value={userName}
        onChange={e => setUserName(e.target.value)}
        />

        <input 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />

        <button className="button" type="submit">Login</button>
      </form>
      </section>
      <img src={padlock} alt="Login" />
    </div> 

  )
}