import { useState } from "react";

export default function Employee({addEmployeeLog}){
    
    const [employeeid,setEmployeeId]=useState();
    const [name,setName]=useState();
    const [salary,setSalary] =useState();
    const [department,setDepartment]=useState();


    const handleSubmit=(e)=>{
        addEmployeeLog([employeeid,name,salary,department]);
        console.log('form submitted'+employeeid+''+name+''+salary+''+department)
         e.preventDefault();
    }
    return(
        <form onSubmit={e=>{handleSubmit(e)}}>
            <label>ID</label>
            <br/>
              <input name='employeeid'
               type='int' 
              onChange={e=>setEmployeeId(e.target.value)}
              value={employeeid}
              />
              <br/>
              <label>Name</label>
              <br/>
              <input name='name'
              type='text'
              onChange={e=>setName(e.target.value)}
              value={name}
              />
              <br/>
              <label>Salary</label>
              <br/>
              <input name='dt'
              type='int' 
              onChange={e=>setSalary(e.target.value)}
              value={salary}
              

              />
              <br/>
              <label>Department</label>
              <br/>
              <input name='department'
              type='text'
              onChange={e=>setDepartment(e.target.value)}
              value={department}
              />
              <input type='submit' value='Add Employee'/>
        </form>
    )
    }