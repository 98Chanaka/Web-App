import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navbar, Footer} from './pages/layout';
import {Home} from './pages/home';
import { Products } from './pages/products';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';


function App(){
  return(
    <>

    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
    
    
  
    
    </>
    

  );
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
