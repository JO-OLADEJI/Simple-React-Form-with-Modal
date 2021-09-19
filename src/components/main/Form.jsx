import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input';
import styles from './Form.module.css';

const Form = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(() => event.target.value);
  }

  const ageChangeHandler = (event) => {
    setAge(() => event.target.value);
  }

  const resetInputs = () => {
    setName(() => '');
    setAge(() => '');
  }

  const submitHandler = () => {
    // check if name is empty
    if (name.trim().length === 0) {
      props.onInvalidInput({
        title: 'Empty Name',
        message: 'Name cannot be empty. Must be at least one character.'
      });
      return;
    }

    // check if name starts with a number
    if (!isNaN(parseInt(name))) {
      props.onInvalidInput({
        title: 'Invalid Name',
        message: 'Name cannot start with a number'
      });
      return;
    }

    // check if age is empty
    if (age.length === 0) {
      props.onInvalidInput({
        title: 'Empty Age',
        message: 'Age cannot be empty.'
      });
      return;
    }

    // check if age is less than 0
    if (parseInt(age) <= 0) {
      props.onInvalidInput({
        title: 'Invalid age',
        message: 'Age cannot be less than or equal to zero'
      });
      return;
    }
    
    // if all is passed, add it to the table
    props.onAddUser({ name, age, id: Math.random().toString() });
    resetInputs();
  }

  return (
    <Card className={styles['Form']}>
      <Input 
        placeholder="name"
        value={name}
        onChange={nameChangeHandler}
      />
      <Input
        placeholder="age"
        type="number"
        value={age}
        onChange={ageChangeHandler}
      />
      <Button 
        className={styles['add-btn']}
        onClick={submitHandler}
        >
        Add User
      </Button>
    </Card>
  );
}
 
export default Form;