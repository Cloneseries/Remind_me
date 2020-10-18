import React ,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormControl, Input} from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import Todo from './Todo'
import db from './firebase';
import firebase from "firebase";

function App() {
   
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");
useEffect(() => {
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
    setTodos(snapshot.docs.map(doc => doc.data().todo))

  }) 
}, []);

  
  const add = (event) =>{
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    console.log("its working");// prevents refreshing
    setTodos([...todos, input]);
    setInput(''); //clear up the input()
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
      

      <FormControl>
        <InputLabel>✅Write a todo</InputLabel>
        <Input value = {input} onChange={event => setInput(event.target.value)}/>
      </FormControl>

      <Button disabled={!input} type = "submit"  onClick = {add} variant="contained" color="primary">
 Add Event
</Button>

      
      </form>
      <ul>
        
        {todos.map(todo =>(
          <Todo text={todo}/>
            ))}     
      </ul>
    </div>
  );
}

export default App;
