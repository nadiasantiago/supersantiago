import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ItemListConteiner from '../../components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from '../../components/ItemDetailConteiner/ItemDetailConteiner';

const Initial = () => {
  return (
  <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListConteiner/>} />
        <Route exact path='/category/:id' element={<ItemListConteiner/>}/>
        <Route exact path='/item/:id' element={<ItemDetailConteiner/>}/>
      </Routes>
  </BrowserRouter>
  );
}
export default Initial