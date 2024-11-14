import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const authData = useContext(AuthContext);   
    const tasks = authData[0]; // Assuming authData[0] is the array of tasks

    return (
        <div className='bg-[#1c1c1c] p-4 rounded mt-9  '>
                 <div className='bg-red-600 py-2 px-4 flex justify-between rounded'>
                    <h3 className='w-1/5'>Employee Name</h3>
                    <h3 className='w-1/5'>New Task</h3>
                    <h3 className='w-1/5'>Active Task</h3>
                    <h3 className='w-1/5'>Completed</h3>
                    <h3 className='w-1/5'>Failed</h3>
                </div>
            <div className='overflow-auto'>
            {tasks.map((task, index) => (
                <div key={task.id || index} className='border-2 border-emerald-400 py-2 px-4 flex justify-between rounded'>
                    <h2 className='w-1/5 text-white'>{task.firstName}</h2>
                    <h3 className='w-1/5 text-blue-600'>{task.taskCounts.newTask}</h3>
                    <h5 className='w-1/5 text-yellow-400'>{task.taskCounts.active}</h5>
                    <h5 className='w-1/5 text-green-600'>{task.taskCounts.completed}</h5>
                    <h5 className='w-1/5 text-red-600'>{task.taskCounts.failed}</h5>
                </div>
            ))}
            </div>
        </div>
    );
};

export default AllTask;
