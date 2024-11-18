import React, { useState } from 'react';
import './App.css';
import OrderList from './components/OrderList';
import AddOrderForm from './components/AddOrderForm';

function App() {
  const [orders, setOrders] = useState([]);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="App">
      <h1>Orders Management</h1>
      <AddOrderForm onAddOrder={handleAddOrder} />
      <OrderList orders={orders} />
    </div>
  );
}

export default App;