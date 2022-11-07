import React from 'react'
import { Button } from 'react-bootstrap'

const ListTask = ({task,removeTask,index}) => {
  return (
      <>
          <div className='list-task'>
              {task.title}
              <Button onClick={()=>{removeTask(index)}}  variant="success" className='delete-btn' >Delete</Button>
         </div>
    </>
  )
}

export default ListTask