import { useState } from "react";

export default function TaskForm({addTaskLog}){
    
    const [taskDesc,setTaskDesc]=useState();
    const [name,setName]=useState();
    const [date,setDate] =useState();


    const handleSubmit=(e)=>{
        addTaskLog([taskDesc,name,date]);
    console.log('form submitted'+taskDesc+''+name+''+date)
    e.preventDefault();
    }
    return(
        <form onSubmit={e=>{handleSubmit(e)}}>
            <label>Task</label>
            <br/>
              <input name='taskDesc'
               type='text' 
              onChange={e=>setTaskDesc(e.target.value)}
              value={taskDesc}
              />
              <br/>
              <label>performed by</label>
              <br/>
              <input name='userName'
              type='text'
              onChange={e=>setName(e.target.value)}
              value={name}
              />
              <br/>
              <label>Date</label>
              <br/>
              <input name='dt'
              type='date' 
              onChange={e=>setDate(e.target.value)}
              value={date}
              />
              <input type='submit' value='Log Task'/>
        </form>
    )
    }