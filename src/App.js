import react from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {Incomeexpenses} from './components/Incomeexpenses';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div >
     <Header />
     <div className='conatiner'>
       <Balance/>
       <Incomeexpenses/>
       <TransactionList/>
       <AddTransaction/>
       </div>
    </div>
  );
}

export default App;
