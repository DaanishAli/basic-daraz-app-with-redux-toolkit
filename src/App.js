import {  Box } from '@mui/material';
import './App.css';
import FreshSale from './components/FreshSale';
import { Routes, Route } from "react-router-dom";
import Details from './components/Details';
import ShopingCart from './components/ShopingCart';
import Appbar from './components/Appbar';


function App() {
  return (
    <Box mx={10} >
      <Appbar/>
      <Routes>
        <Route path="/" element={<FreshSale />} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/shoping-cart" element={<ShopingCart/>} />
        <Route path="*" element={<h1>Sorry, Page Not Found</h1>}/>
      </Routes>
    </Box>
  );
}

export default App;
