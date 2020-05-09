import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from "./components/TodoFooter";
import useTodoState from './hooks/useTodoState';

import './index.css';

const App = () => {
  const { todos, addTodo, deleteTodo,slectAllOrNot,deleteSelectedTodo,changeTodoFinished,finishCount} = useTodoState([]);

  return (
    <div className="App">
        <h1>TodoList</h1>

        <TodoForm
            saveTodo={todoText => {
              const trimmedText = todoText.trim();

              if (trimmedText.length > 0) {
                addTodo({title:trimmedText,flag:false});
              }
            }}
        />

        <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            changeTodoFinished={changeTodoFinished} />

        <TodoFooter
            todos={todos}
            slectAllOrNot={slectAllOrNot}
            deleteSelectedTodo={deleteSelectedTodo}
            finishCount={finishCount}
        />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
