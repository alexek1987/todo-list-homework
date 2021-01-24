import React, { useEffect, useState } from 'react';
import './App.css';
import './Todo.css';
import Todo from './Todo.js';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


function App() {


  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
    todo: input.charAt(0).toUpperCase() + input.substring(1, input.length),
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  setInput('');
  }

  return (
    <div className="app">
      <h1>Big Boss' Todos!</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
      </form>
      <Button
        className="add__btn"
        disabled={!input} type="submit"
        onClick={addTodo}
        variant="outlined"
        color="primary">
        Add Todo
      </Button>
      <FlipMove>
        <ul className="todo__ul">
        {todos.map(todo => (
         <Todo todo={todo} />
          ))}
        </ul>
      </FlipMove>


    </div>
  );
}

export default App;

