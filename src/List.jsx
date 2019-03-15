import React from 'react';

const List = ({todos, loading}) => {
    let todoList = 'Loading'
    if(!loading) todoList = todos.map(todo => <li key={todo.id}>{todo.title}</li>)
    return (
        <div>
            {todoList}
        </div>
    );
};

export default List;