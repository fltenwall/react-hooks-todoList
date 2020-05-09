import React from 'react';

const TodoList = ({ todos, deleteTodo,changeTodoFinished }) => {

    if(todos.length === 0){
        return (<h2>暂时没有任务！请添加新任务！</h2>)
    }

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <input
                        type="checkbox"
                        checked={todo.flag}
                        onChange={() => {
                            changeTodoFinished(index)
                        }}
                    />
                    <span>{index}</span>
                    {todo.title}
                    <button onClick={() => {
                        deleteTodo(index);
                    }}>删除
                    </button>
                </li>
            ))}
        </ul>
    )
};

export default TodoList;
