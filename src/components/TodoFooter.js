import React from "react";

const TodoFooter = ( { todos,slectAllOrNot,deleteSelectedTodo,finishCount } )=>{

    return (
        <div id="footer">
            <div id="footer-left">
                <input
                    type="checkbox"
                    onChange={slectAllOrNot}
                    checked={finishCount === todos.length && todos.length > 0}
                />
                <span>全选/取消全选</span>
            </div>
            <div id="footer-right">
                <span>已完成{finishCount}项/总计{todos.length}件</span>
                <button onClick={deleteSelectedTodo}>删除已完成</button>
            </div>


        </div>
    );
};

export default TodoFooter;
