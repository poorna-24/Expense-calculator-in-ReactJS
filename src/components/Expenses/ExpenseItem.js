import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  //   const [title, setTitle] = useState(props.id); //first value title=value itself and second array= updating value
  //   const clickHandler = () => {
  //     setTitle('updated!!');
  //     console.log(title);
  //   };
  return (
    <li>
      <Card className="expense-item ">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
        {/* <button onClick={clickHandler}>Button</button> */}
      </Card>
    </li>
  );
};
export default ExpenseItem;
