export default function EmployeeList(props){
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Department</th>
                </tr>
            </thead>
            {props.emp.map((element,index)=>{
                return <tr>
                    <th>{element[0]},{index}</th>
                    <th>{element[1]},{index}</th>
                    <th>{element[2]},{index}</th>
                    <th>{element[3]},{index}</th>
                </tr>
            })}
        </table>
    )   
}