/*import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import { useState} from 'react';
import TaskListDisplay from './components/TaskListDisplay';
import Registration from './components/Registration';

function App() {
    const [taskLogs,setTaskLogs]=useState([]);
    const addTaskLog=(task)=>{
        let tasks=[...taskLogs,task];
        setTaskLogs(tasks);
    }
 
    return(
        <div>
          <Registration/>
            <TaskForm addTaskLog={addTaskLog}/>

            <TaskListDisplay tasks={taskLogs}/>
        </div>
    )
}

export default App;*/

import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import { useState} from 'react';
import TaskListDisplay from './components/TaskListDisplay';
import Registration from './components/Registration';
import Employee from './components/Employee';
import EmployeeList from './components/EmployeeList';
import SortTable from './components/SortTable';




function App() {
    const [taskLogs,setTaskLogs]=useState([]);
    const addTaskLog=(task)=>{
        let tasks=[...taskLogs,task];
        setTaskLogs(tasks);
    }
        const [employeeLogs,setEmployeeLogs]=useState([]);
        const addEmployeeLog=(emp)=>{
        let emps=[...employeeLogs,emp];
        setEmployeeLogs(emps);
    }
 
    return(
        <div>
            <SortTable/>
            <TaskForm addTaskLog={addTaskLog}/>

            <TaskListDisplay tasks={taskLogs}/>
            <Registration />
            <Employee addEmployeeLog={addEmployeeLog}/>
            <EmployeeList emp={employeeLogs}/>
        </div>
    )
}

export default App;