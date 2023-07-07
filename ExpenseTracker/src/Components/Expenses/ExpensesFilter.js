import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  //const [enteredYear, setEnteredYear] = useState(2020);
  
  const FilterHandler = (event) => {
    props.onFilterSelection(event.target.value);
    //setEnteredYear(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={FilterHandler} value={props.selected}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;