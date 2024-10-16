import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../context/ProductsContext';

const Header = () => {
  const { isPopulated, setIsPopulated, checkPopulation } = useContext(ProductsContext);

  useEffect(() => {
    checkPopulation();
  }, []);

  const handlePopulateDB = () => {
    fetch('http://127.0.0.1:8000/add-products', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          checkPopulation();
        }
      })
      .catch(error => console.error('Error populating products:', error));
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">POS System</h1>
      <button
        onClick={handlePopulateDB}
        disabled={isPopulated}
        className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ${isPopulated ? 'bg-gray-500 cursor-not-allowed' : ''}`}
      >
        Populate DB
      </button>
    </header>
  );
};

export default Header;
