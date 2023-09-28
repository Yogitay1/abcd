export default function TaskListDisplay(props){
    return (
        <table>
            <thead>
                <tr>
                    <th>Task Description</th>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
            </thead>
            {props.tasks.map((element,index)=>{
                return <tr>
                    <th>{element[0]},{index}</th>
                    <th>{element[1]},{index}</th>
                    <th>{element[2]},{index}</th>
                </tr>
            })}
        </table>
    )   
}