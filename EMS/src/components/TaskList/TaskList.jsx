import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
const TaskList = ({ data }) => {
  return (

    <div id='tasklist' className='h-80 w-full mt-10 py-5 flex justify-start items-center gap-5 flex-nowrap overflow-x-auto px-5'>
      {data.tasks.map((elem,id) => {
        if (elem.active) {
          return <AcceptTask  key={id}/>
        }

        if (elem.NewTask) {
          return <NewTask key={id}/>
        }

        if (elem.completed) {
          return <CompleteTask key={id}/>
        }
        if (elem.failed) {
          return <FailedTask key={id}/>
        }
      })}
    </div>
  )
}

export default TaskList