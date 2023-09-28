import Data from "./Data";
import './C2.css'

export default function C2(props){

    return (<div className="c2">
        <h1>list of data from c1</h1>
        {props.list.map((elements,index)=>(
            <Data element={elements} index={index}/>
        ))}
        </div>)
    
}