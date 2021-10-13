import React, { memo } from 'react'
import Todo from './Todo'
import Moment from 'react-moment';

const TodoList = memo(props => {
    const { listTodos, checkAll, isCheckedAll } = props
    const date = new Date();
    return (
        <section className="main">
            <input
                className="toggle-all"
                type="checkbox"
                onChange={() => {
                    console.log('mmark done')
                    checkAll()
                }}
                checked={isCheckedAll}
            />
           <Moment style={{padding: '14px 14px', color: 'gray'}}

            format='MMMM Do YYYY'>{date}</Moment>
            <label htmlFor="toggle-all" onClick={checkAll} ></label>
            <ul className="todo-list">
                {
                    listTodos.map((todo, index) => <Todo index={index} key={todo.id} todo={todo} {...props} />)
                }
            </ul>

        </section>
    )
})

export default TodoList