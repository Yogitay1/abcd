import React ,{useState,useEffect} from 'react'


const emps=[
    {
        id:2,
        name:'Rajesh',
        salary:60000
    },
    {
        id:1,
        name:'Preethi',
        salary:35000
    },
    {
        id:9,
        name:'Sahas',
        salary:45500
    },
    {
        id:7,
        name:'Ashok',
        salary:50000
    },
]

export default function SortData(){
    const [data,setData]=useState([]);
    const [sortType,setSortType]=useState('id');

    useEffect(()=>{
        const sortArray=type=>{
            const types={
                id:'id',
                name:'name',
                salary:'salary'
            };
            const sortProperty=types[type];
            const sorted=[...emps].sort((a,b)=>a[sortProperty]-b[sortProperty]);
            setData(sorted)

            emps.sort((a, b) => (a.name > b.name) ? 1 : -1)

        }
        sortArray(sortType);
    },[sortType]);

    return(
        <div className='App'>
            <select onChange={(e)=>setSortType(e.target.value)}>
            <option value="id">Id</option>
            <option value="name">Name</option>
            <option value="salary">Salary</option>
            </select>
            {data.map(emp=>(
                <div key={emp.id} style={{margin:'30px'}}>
                <div>{`Id is ${emp.id}`}</div>
                <div>{`name is ${emp.name}`}</div>
                <div>{`salary is ${emp.salary}`}</div>
                </div>
                
                
                ))}
        </div>
    )
}