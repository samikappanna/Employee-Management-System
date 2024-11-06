import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 w-screen'>
        <div className='w-[45%] p-10 bg-red-400 ml-5 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='w-[45%] p-10 bg-emerald-400 ml-5 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='w-[45%] p-10 bg-yellow-400 ml-5 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='w-[45%] p-10 bg-orange-400 ml-5 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber