 import React from "react";
export default class UnControlledComponent extends React.Component{

constructor(props){
    super(props);
    this.userName=React.createRef();
}

submitHandler=(event)=>{console.log(this.userName.current.value);event.preventDefault();}
render(){
    return(
        <form onSubmit={this.submitHandler}>
            <label>Username</label>
            <input type='text' ref={this.userName}/>
            <br/>
            <input type='submit' value='submit'/>
        </form>
    )
}}