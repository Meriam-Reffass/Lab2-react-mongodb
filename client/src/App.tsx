import React, { useState } from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v1 as uuid } from 'uuid';

import './App.css';
function App() {
  const [items, setItems] = useState<Array<{ id: string, name: string }>>(
    [
      { id: uuid(), name: 'Eggs' },
      { id: uuid(), name: 'Milk' },
      { id: uuid(), name: 'Steak' },
      { id: uuid(), name: 'Water' }
    ]
  )

  return (
    <div className="App"> 
        <AppNavBar />
        <ShoppingList />
    </div>
  );
}

export default App;
