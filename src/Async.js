import React from 'react';
import {Button} from "react-bootstrap";

class Async extends React.Component {
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.hitUrl = this.hitUrl.bind(this);
    }
    increment(){
        const data = this.hitUrl('https://jsonplaceholder.typicode.com/todos/1'); 
    }

    decrement(){
        this.props.actions.decrement(this.props.count-1);
    }
    hitUrl(url){
        console.log(url);
        fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error('it is 200 status')
            }
            return response;
        })
        .then(resposne=>resposne.json())
        .then(data=>console.log("data", data))
        .catch((error)=>{
            console.log(error);
        })
    }
   render() {
     
      return (
        <div>
             
            <Button onClick={this.increment} >
                  Click Me
            </Button>
            <Button onClick={this.decrement} >
                  action
            </Button>
            <div>Data: <span>{this.props.count}</span></div>
        </div>
      );
   }
}
export default Async;