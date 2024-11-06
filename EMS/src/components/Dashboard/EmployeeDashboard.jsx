import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div>
        <div>
            <Header data={data}/>
            <TaskListNumber data={data}/>
            <TaskList data={data}/>
        </div>
    </div>
  )
}

export default EmployeeDashboard