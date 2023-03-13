import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Books from "./pages/Books";
import NewBook from "./pages/NewBook";
//BrowserRouter = para verificar qual a rota vai ser acessada (Garantir o roteamento correto)
//Switch = para que mais de uma rota não seja acessada simutanemanete
export default function NewRoutes() {
  return (   
          <BrowserRouter>
              <Routes>
                <Route path ='/' element={<Login/>}/>
                <Route path ='/books/' element={<Books/>}/>
                <Route path ='/book/new' element={<NewBook/>}/>
                <Route path ='/book/new/:bookId' element={<NewBook/>}/>
              </Routes>
          </BrowserRouter>
    );

}