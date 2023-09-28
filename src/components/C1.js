import { useState}  from 'react';
import C2 from "./C2";

export default function C1(){
    const [list,setList]=useState([1,3,4,6,4,5]);
    return (
        <C2 list={list}/>
    )
}