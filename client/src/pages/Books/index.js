import React from "react";
import './styles.css';
import logoImage from '../../assets/logo.svg';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'

export default function Books() {
  return (
    <div className="book-container">
      <header>
        <img src={logoImage} alt="logo" />
        <span>Bem-vinda, <strong>Laura</strong>!</span>
        <a className="button" href="/book/new">Adicionar novo livro</a>
        <button type="button">
          <FiPower size={18} color="#251fCS5"/>
        </button>
      </header>
      <h1>Register books</h1>
      <ul>
        <li>
          <strong>Title:</strong>
          <p>Docker deep dive</p>
          <strong>Autor:</strong>
          <p>Nigel Poult</p>
          <strong>Price:</strong>
          <p>R$47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2007</p>
          <button type="button"> 
            <FiEdit size={20} color="#251FC5"/>
            <FiTrash2 size={20} color="#251FC5"/>
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker deep dive</p>
          <strong>Autor:</strong>
          <p>Nigel Poult</p>
          <strong>Price:</strong>
          <p>R$47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2007</p>
          <button type="button"> 
          <FiEdit size={20} color="#251FC5"/>
          <FiTrash2 size={20} color="#251FC5"/>
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker deep dive</p>
          <strong>Autor:</strong>
          <p>Nigel Poult</p>
          <strong>Price:</strong>
          <p>R$47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2007</p>
          <button type="button"> 
          <FiEdit size={20} color="#251FC5"/>
          <FiTrash2 size={20} color="#251FC5"/>
          </button>
        </li>
      </ul>
    </div>
  );
}
