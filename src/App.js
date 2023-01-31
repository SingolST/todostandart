import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) ||[])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  return (
    <Container>
      <Header/>
      <AddTodo todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
