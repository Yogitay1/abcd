import React ,{useState,useEffect} from 'react'

const emps=[
                    {empId:1001,empName:'Rahul',empSal:9000,empDep:'JAVA',empjoiningdate:'6/12/2014'},
                    {empId:1002,empName:'Vikash',empSal:11000,empDep:'ORAAPS',empjoiningdate:'6/12/2017'},
                    {empId:1003,empName:'Uma',empSal:12000,empDep:'JAVA',empjoiningdate:'6/12/2010'},
                    {empId:1004,empName:'Sachin',empSal:11500,empDep:'ORAAPS',empjoiningdate:'11/12/2017'},
                    {empId:1005,empName:'Amol',empSal:7000,empDep:'.NET',empjoiningdate:'1/1/2018'},
                    {empId:1006,empName:'Vishal',empSal:17000,empDep:'BI',empjoiningdate:'9/12/2012'},
                    {empId:1007,empName:'Rajita',empSal:21000,empDep:'BI',empjoiningdate:'6/7/2014'},
                    {empId:1008,empName:'Neelima',empSal:81000,empDep:'TESTING',empjoiningdate:'6/17/2015'},
                    {empId:1009,empName:'Daya',empSal:1000,empDep:'TESTING',empjoiningdate:'6/17/2016'} 
            ];

export default function SortTable(){
    const [data,setData]=useState([]);
    const [sortType,setSortType]=useState('empId');

    useEffect(()=>{
        const sortArray=type=>{
            const types={
                empId:'empId',
                empName:'empName',
                empSal:'empSal',
                empDep: 'empDep',
                empjoiningdate: 'empjoiningdate'
            };
            setSortType(type)
            const sortProperty=types[type];
            const sorted=[...emps].sort((a,b)=>
            
            a[sortProperty]-b[sortProperty]);
            setData(sorted)

            emps.sort((a,b) => (a.empName > b.empName) ? 1 : -1) 
            //setData(sortName)
            emps.sort((a,b)=> (a.empDep > b.empDep)? 1: -1)
            //setData(sortDept)

        }
        sortArray(sortType);
    },[sortType]);

    return(
    <table border='5'>
            <thead>
                <tr>
                    <th value='empId' ><button type='button'onClick={(e)=>setSortType(e.target)} >Emp ID</button></th>
                    <th value='empName'><button type='button'onClick={(e)=>setSortType(e.target)} >Emp Name</button></th>
                    <th value='empSal' ><button type='button'onClick={(e)=>setSortType(e.target)} >Emp Salary</button></th>
                    <th value='empDep'><button type='button'onClick={(e)=>setSortType(e.target)} >Emp Department</button></th>
                    <th value='empjoiningdate' ><button type='button'onClick={(e)=>setSortType(e.target)} >Emp Joining Date</button></th>
                </tr>
            </thead>
            <tbody>
            {data.map((emp)=>{
                return <tr key={emp.empId}>
                    <td>{emp.empId}</td>
                    <td>{emp.empName}</td>
                    <td>{emp.empSal}</td>
                    <td>{emp.empDep}</td>
                    <td>{emp.empjoiningdate}</td>
                </tr>
            }
            )}
            </tbody>
            
            

        </table>
    )

}