import React, { useState, useEffect } from "react";
import './styles.css';
import logoImage from '../../assets/logo.svg';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'
import {useNavigate} from 'react-router-dom';
import api from '../../services/api';

//()=>DeleteBook(book.id) é para impedir que apague todos os regostros de uma vez ao recarregar a pagina(?)

export default function Books() {

  const userName = localStorage.getItem('userName');
  const accessToken = localStorage.getItem('accessToken')
  const [books, setbooks] = useState([]);
  const history = useNavigate();

  useEffect(()=>{
      api.get('/api/Book/v1/asc/20/1', {
        headers: {
          Authorization: `Bearer ${accessToken}` 
        }
      }).then(response => {setbooks(response.data.list)
        })
  }, [accessToken]);

  async function Logout(){
    try {
      await api.get(`/api/auth/v1/revoke`, {
        headers: {
          Authorization: `Bearer ${accessToken}`}
        });
        localStorage.clear();
        history('/');
    }catch(error){
      alert('Logout fieled! Try Again.')
    }
  }

  async function EditBook(id){
    try {
    history(`/book/new/${id}`)
    }catch(error){
      alert('Edit book fieled! Try Again.')
    }
  }

  async function DeleteBook(id){
    try {
      await api.delete(`/api/Book/v1/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`}
        });

        setbooks(books.filter(book => book.id !== id))
    }catch(error){
      alert('Delete fieled! Try Again.')
    }
  }

  return (
    <div className="book-container">
      <header>
        <img src={logoImage} alt="logo" />
        <span>Bem-vinda, <strong>{userName.toUpperCase()}</strong>!</span>
        <a className="button" href="/book/new">Adicionar novo livro</a>
        <button type="button">
          <FiPower onClick={Logout} size={18} color="#251fCS5"/>
        </button>
      </header>
      <h1>Register books</h1>
      <ul>
        {books.map(book=> (
        <li key={book.id}>
          <strong>Title:</strong>
          <p>{book.title}</p>
          <strong>Autor:</strong>
          <p>{book.author}</p>
          <strong>Price:</strong>
          <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(book.price)}</p>
          <strong>Release Date:</strong>
          <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>

          <button type="button"> 
          <FiEdit onClick={() => EditBook(book.id)} size={20} color="#251FC5"/>
          </button>
          
          <button onClick={()=>DeleteBook(book.id)}>
          <FiTrash2 size={20} color="#251FC5"/>
          </button>

        </li>
        ))}
      </ul>
    </div>
  );
}
