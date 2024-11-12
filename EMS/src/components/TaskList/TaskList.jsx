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
          return <AcceptTask  key={id} data={elem}/>
        }

        if (elem.NewTask) {
          return <NewTask key={id} data={elem}/>
        }

        if (elem.completed) {
          return <CompleteTask key={id} data={elem}/>
        }
        if (elem.failed) {
          return <FailedTask key={id} data={elem}/>
        }
      })}
    </div>
  )
}

export default TaskList