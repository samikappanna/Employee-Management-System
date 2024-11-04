import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <div>
            <Header />
            <TaskListNumber/>
            <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashboard