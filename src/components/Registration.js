import { render } from "@testing-library/react"
import React from "react";

export default class Registration extends React.Component{

constructor(props){
super(props);
this.state={
    passed:false,
    marks:60
};
}
submitForm=()=>{
    console.log(this.state.passed+''+this.state.marks);
}
handleInputChange=(event)=>{
    const target =event.target;
    const value=target.type === 'checkbox' ? target.checked :target.value;

    const name=target.name;
    this.setState({
        [name]:value
    })
}

render(){
    return (
    <form onSubmit={this.submitForm}>
        <label>Has pass exam</label>
        <input
        type="checkbox"
        name="passed"
        checked={this.state.passed}
        onChange={this.handleInputChange}
        />
        <br/>
        {this.state.passed &&
           <label>marks obtained
           <input type="number"
           name="marks"
           value={this.state.marks}
           onChange={this.handleInputChange}/>
           </label> 
}
<input type="submit" value="submit"/>
<h1>{this.state.passed} {this.state.marks}</h1>
</form>
    );
}
}
