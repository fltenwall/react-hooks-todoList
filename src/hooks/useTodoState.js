import { useState } from 'react';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);
  const [finishCount,setFinishCount]= useState(0);
  const [slectedAll,setSlectedAll]= useState(false);

  return {
      todos,
      finishCount,

    addTodo: todoText => {
        setTodos([...todos, todoText]);
    },

    deleteTodo: todoIndex => {
        const newTodos = todos.filter((todo, index) => index !== todoIndex);
        setTodos(newTodos);

        const newTodosFnished = newTodos.filter((todo) => todo.flag === true);
        setFinishCount(newTodosFnished.length);

    },

    slectAllOrNot: () => {
        todos.forEach((todo) => todo.flag = !slectedAll);
        setTodos(todos);
        setSlectedAll(!slectedAll);

        if(todos.length === 0){
            alert("现在还没有任务了，请先添加任务！")
        }

        const newTodos = todos.filter((todo) => todo.flag === true);
        setFinishCount(newTodos.length);
    },

    deleteSelectedTodo: () => {
        const newTodos = todos.filter((todo) => todo.flag === false);
        setTodos(newTodos);

        const newTodosFnished = newTodos.filter((todo) => todo.flag === true);
        setFinishCount(newTodosFnished.length);

        const isFinished = todos.filter((todo) => todo.flag === true);
        if(isFinished.length === 0){
          alert("现在还没有已经完成的任务哦😯！")
        }
    },

    changeTodoFinished:todoIndex => {
        todos[todoIndex].flag = !todos[todoIndex].flag;
        setTodos(todos);

        const newTodosFnished = todos.filter((todo) => todo.flag === true);
        setFinishCount(newTodosFnished.length);
    },

  };
};
