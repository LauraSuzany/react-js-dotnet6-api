import React from "react";
import './styles.css'
import logoImage from '../../assets/logo.svg'


export default function Book (){
  return (
    <div className="book-container">
      <header>
        <img src={logoImage} alt="logo"/> 
        <span>Welcome, <strong>Laura</strong>!</span>
        <link className="button" to="/book/new">Add new book</link>
        <button type="button"></button>

      </header>
    </div>
  )
}