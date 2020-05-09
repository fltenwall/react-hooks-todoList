import React from 'react';
import useInputState from '../hooks/useInputState';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
        <input type="text"
               placeholder="请输入待办事项，按回车键添加"
               onChange={onChange}
               value={value}
               id="header-input"
        />
    </form>
  );
};

export default TodoForm;
