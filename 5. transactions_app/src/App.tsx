import React from 'react';
import TransactionList from './components/TransactionList';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <TransactionList />
    </div>
  );
}

export default App;
