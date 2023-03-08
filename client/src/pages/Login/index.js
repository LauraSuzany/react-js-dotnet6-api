import React from "react";
import './styles.css'
import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'
//props e para acessar esaber que eu estou deniniind esses valores dinamicamente
export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
      <img src={logoImage} alt="Erudio logo" />
      <form action="">
        <h1>Access youy Account</h1>
        <input placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button className="button" type="submit">Login</button>
      </form>
      </section>
      <img src={padlock} alt="Login" />
    </div> 

  )
}