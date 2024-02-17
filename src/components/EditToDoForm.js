import React, {useState} from 'react'

export const EditToDoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id)
        setValue("") //to reset the typing label after submitting the task
    }
    return (
        <form className='ToDoForm' onSubmit={handleSubmit}>

            <input type="text" className='todo-input' value={value} placeholder='Edit Task' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Edit Task</button>
        </form>
    )
}