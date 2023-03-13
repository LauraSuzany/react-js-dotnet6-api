import React, {useState} from "react";
import './styles.css'
import api from '../../services/api'
import logoImage from '../../assets/logo.svg'
import {Link, useNavigate, useParams} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
export default function NewBook() {

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [price, setPrice] = useState('');
  const { bookId } = useParams();
  const history = useNavigate();

  async function CreatNewBook(e){
    e.preventDefault();
    const data = {
      title,
      author,
      launchDate,
      price
    }

    const accessToken = localStorage.getItem('accessToken')
    console.log(accessToken);
    try{
     const response = await api.post('/api/Book/v1', data, {
      headers: {
        Authorization: `Bearer ${accessToken}` }
      });
      console.log(response);
    }catch(error){
      alert('Erro while recording book! try again')
    }
    history('/books');
  }

  return(
    <div className="new-book-container">
      <div className="content">
        <section className="form">
          <img src={logoImage } alt= "logoImage"></img>
          <h1>Add new book</h1>
          <p>Enter book information and click on 'Add' ##########{bookId}!</p>
          <Link className="back-link" to="/books">
            <FiArrowLeft size={16} color="#251fc5"/>
            Home
          </Link>
        </section>
        <form onSubmit={CreatNewBook}>
          <input 
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
          <input 
          placeholder="Autor"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          />
          <input 
          type="date"
          value={launchDate}
          onChange={e => setLaunchDate(e.target.value)}
          />
          <input 
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          />
          <button className="button" type='submit'>Add</button>
        </form>
      </div>
    </div>
  )
}