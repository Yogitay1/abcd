import React ,{useEffect, useState} from "react";



export default function Greeting(props){
    const [message,setMessage] = useState('hello there from use state hook')

    const [ctr,setCtr]=useState(0);
    useEffect(()=>{console.log(message);
    //based on ctr(counter) value == 3 we are apply effect of changing the 
     //the state of message
     if(ctr === 3){
        setMessage('ctr changed 3 times , now apply effect');

     }
    },[ctr]);

    const increment=()=>{
        setCtr(ctr+1);
    }
    return (
        <div className="container"><h1>{ctr}{message}</h1></div>
    )

    
}