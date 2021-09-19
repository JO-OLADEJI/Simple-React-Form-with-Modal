import React, { useState } from 'react';
import styles from './App.module.css';
import Form from './components/main/Form';
import Table from './components/main/Table';
import Modal from './components/UI/Modal';

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  const onAddUser = (newUser) => {
    setUsers((prev) => {
      return [ ...prev, newUser ];
    });
  }

  const onDeleteUser = (id) => {
    const allItems = [ ...users ];
    const itemIndex = users.findIndex((item) => item.id === id);
    allItems.splice(itemIndex, 1);
    setUsers(() => allItems);
  }

  const onInvalidInput = (eMessage) => {
    setError(() => eMessage);
  }

  const onCancelError = () => {
    setError(() => null);
  }


  return (
    <div className={styles['App']}>
      <h1>React Form.</h1>
      <Form 
        onAddUser={onAddUser} 
        onInvalidInput={onInvalidInput} 
      />
      <Table 
        data={users} 
        onDeleteUser={onDeleteUser} 
      />
      {error && <Modal data={error} close={onCancelError} />}
    </div>
  );
};

export default App;
