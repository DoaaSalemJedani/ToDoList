import React, {useState} from 'react'

export const ToDoForm = ({addTodo}) => {

    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)
        setValue("") //to reset the typing label after submitting the task
    }
    return (
        <form className='ToDoForm' onSubmit={handleSubmit}>

            <input type="text" className='todo-input' value={value} placeholder='Whats on your to-do list today?' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}