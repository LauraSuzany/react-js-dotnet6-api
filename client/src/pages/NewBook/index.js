import React, {useEffect, useState} from "react";
import './styles.css'
import api from '../../services/api'
import logoImage from '../../assets/logo.svg'
import {Link, useNavigate, useParams} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

export default function NewBook() {

  const [id, setId] = useState(null);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [price, setPrice] = useState('');
  const { bookId } = useParams();
  const history = useNavigate();

  const accessToken = localStorage.getItem('accessToken')

  const authorization =  {
    headers: {
      Authorization: `Bearer ${accessToken}` }
    }
  
    
    const addOrUpdade = bookId ? 'Update' : 'Add';

    useEffect(() => {
      if(bookId) LoadBook()});
   
  
  
    async function LoadBook(){
      try{
       const response =  await api.get(`api/book/v1/${bookId}`, authorization);
        let adjusteLaunchDate = response.data.launchDate.split("T", 10)[0]
        //dar um split(divide) em T para separar a data que está em formato UtC e pegar a primeira parte  
       setAuthor(response.data.author);
       setTitle(response.data.title);
       setLaunchDate(adjusteLaunchDate);
       setPrice(response.data.price);
      }catch(error){
          alert('Error recovering book! try again!')
          history('/books');
      }
    }
  
  
  async function SaveOrUpdate(e){
    e.preventDefault();
    const data = {
      title,
      author,
      launchDate,
      price
    }
      
    try{
      if(bookId) {
        data.id = id;
        await api.put('/api/Book/v1', data, authorization);
      }else{
        await api.post('/api/Book/v1', data, authorization);
      }

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
          <p>Enter book information and click on 'Add'!</p>
          <Link className="back-link" to="/books">
            <FiArrowLeft size={16} color="#251fc5"/>
            Home
          </Link>
        </section>
        <form onSubmit={SaveOrUpdate}>
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
          <button className="button" type='submit'>{`${addOrUpdade}`}</button>
        </form>
      </div>
    </div>
  )
}