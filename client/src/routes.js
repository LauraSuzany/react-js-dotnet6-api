import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Book from "./pages/Book";
//BrowserRouter = para verificar qual a rota vai ser acessada (Garantir o roteamento correto)
//Switch = para que mais de uma rota não seja acessada simutanemanete
export default function NewRoutes() {
  return (   
          <BrowserRouter>
              <Routes>
                <Route path ='/' element={<Login/>}/>
                <Route path ='/book' element={<Book/>}/>
              </Routes>
          </BrowserRouter>
    );

}