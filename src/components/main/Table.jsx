import React from 'react';
import styles from './Table.module.css';

const TableItem = (props) => {
  return (
    <div 
      className={styles['table-item']}
      onDoubleClick={() => props.onDeleteUser(props.id)}>
      <h3>
        <span className={styles['accent']}>&gt;&gt;</span>
        {props.name}
        </h3>
      <p>'{props.age}'</p>
    </div>
  );
}

const Table = (props) => {
  return (
    <div className={styles['Table']}>
      <div className={styles['hr-bar']} />
      {props.data.length > 0 && props.data.map((item) => (
        <TableItem 
          onDeleteUser={props.onDeleteUser}
          key={item.id}
          id={item.id}
          name={item.name}
          age={item.age}
        />
      ))}

      {props.data.length === 0 && <h3>No Entries!</h3>}
    </div>
  );
}

export default Table;