import React, { useEffect } from 'react';
import ProductList from './ProductList';

const App = () => {
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => console.log(data))  // Esto imprimirá la respuesta en la consola del navegador
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Mi Aplicación</h1>
      <ProductList />
    </div>
  );
};

export default App;
