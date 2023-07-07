import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const cancelButtonCallback = () => {
        setIsEditing(false);
    };

    const saveExpenseDataHandler = (expenseData) => {
        const receivedExpense = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onNewExpense(receivedExpense);
    };

    

    const addNewExpenseButtonHandler = () => {
        setIsEditing(true);
     };


    const [isEditing, setIsEditing] = useState(false);
    

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={addNewExpenseButtonHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelClick={cancelButtonCallback}/>}
            
        </div>
    );
};


export default NewExpense;