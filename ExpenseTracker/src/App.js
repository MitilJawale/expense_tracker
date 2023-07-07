import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import React,{useState} from 'react';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 10,
    date: new Date(2021, 5, 12)
  },
  {
    id: 'e2',
    title: 'Health Insurance',
    amount: 20,
    date: new Date(2021, 12, 3)
  },
  {
    id: 'e3',
    title: 'Groceries',
    amount: 30,
    date: new Date(2021, 4, 25)
  },
  {
    id: 'e4',
    title: 'Movie',
    amount: 40,
    date: new Date(2021, 4, 14)
  }
];


const App = () => {

  const [addedExpense, setExpense] = useState(DUMMY_EXPENSES);
  
  const newExpenseHandler = (receivedExpense) => {
    // console.log([receivedExpense, ...addedExpense])
    setExpense((prevExpense) => {
      return [receivedExpense, ...prevExpense];
    });
  };

  


  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler}/>
      <Expenses expenses={addedExpense} />

    </div>
  );
}

export default App;
