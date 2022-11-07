import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const AddTask = ({ addTask }) => {
    const [value, setValue] = useState("")
    const addItem = () => {
        addTask(value)
        setValue("")
    }
    return (
        <>
            <div className='input-container'>
                <input
                    className='input'
                    placeholder='Add a new task'
                    type='text'
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                />
                <Button
                    className='add-btn'
                    variant="success"
                    onClick={addItem}
                >Add</Button>
            </div>

        </>
    )
}

export default AddTask