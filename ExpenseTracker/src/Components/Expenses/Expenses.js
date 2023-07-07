import './Expenses.css';
import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');


    const saveFilterHandler = (filterYear) => {
        setFilteredYear(filterYear);
    };

    const displayFilterYearEntries = props.expenses.filter(k => {
        return k.date.getFullYear().toString() === filteredYear;
    })

    


    return (
        <div>
            <Card className='expenses'>
                <div>
                    <ExpensesFilter selected={filteredYear} onFilterSelection={saveFilterHandler} />
                </div>
                <ExpensesChart expenses={displayFilterYearEntries}/>
                <ExpensesList items={displayFilterYearEntries}/>


            </Card>
        </div>
    );
}


export default Expenses;




/* <ExpenseItems
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            />

            <ExpenseItems
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            />

            <ExpenseItems
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
            />

            <ExpenseItems
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}
            /> */