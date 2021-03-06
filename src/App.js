import { Component } from 'react';
import './App.css';
import Layout from './Components/Layout';

const groceries = [
  {
    item: 'Milk',
    units: 'liter',
    quantity: 1,
    isPurchased: false
  },
  {
    item: 'Apples',
    units: 'lb',
    quantity: 4,
    isPurchased: false
  },
  {
    item: 'Coca-Cola',
    units: 'pack',
    quantity: 1,
    isPurchased: false
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout groceries={groceries}/>
      </div>
    );
    }
}

export default App;