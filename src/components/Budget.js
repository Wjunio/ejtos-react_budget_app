import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const [ setBudget ] = useState('');
    const { dispatch, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    
    const checkBudget = (event) => {
        
      if (event.target.value<totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending.");
      }
      if (event.target.value>20000) {
        alert("You cannot increase the budget value above 20.000.");
      }
      
      dispatch({
        type: 'SET_BUDGET',
        payload: event.target.value,
      });
      setBudget(event.target.value);
      return;
    };
    
    return (
        <div className='alert alert-secondary'>
          <label>Budget: {currency}
          <input
              required='required'
              type='number'
              id='budget'
              max="20000"
              step="10"
              defaultValue="2000"
              onChange={(event) => checkBudget(event)}
              />
          </label>
        </div>
    );
};

export default Budget;
