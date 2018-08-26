import React from 'react';
import NewComponent from "./NewComponent";
let config={
  header:"this is header",
  notifications:["notifications 1", "notifications 2", "notifications 3", "notifications 4"]
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      config: {
        header:"this is header",
        notifications:["notifications 1", "notifications 2", "notifications 3", "notifications 4"]
      }
    };
    this.fxn=this.fxn.bind(this);
  }

    fxn(){
     
      let random = Math.floor(4*Math.random());
      
          console.log("timer", random)
          
          switch(random){
            case 0: { 
                    config={
                      header:"this is header",
                      notifications:["notifications 1"]
                    }
                    break;
                  }
            case 1: {
                    config={
                      header:"this is header",
                      notifications:["notifications 1", "notifications 2"]
                    }
                      break;
            }
            case 2: {
                    config={
                      header:"this is header",
                      notifications:["notifications 1", "notifications 2", "notifications 3"]
                    }
                      break;
                    }
            case 3: {
                    config={
                      header:"this is header",
                      notifications:["notifications 4", "notifications 1", "notifications 2", "notifications 3"]
                    }
                      break;
                    }
          }
          this.setState({
        config: config
      });
        }
        

   render() {
    // setInterval(this.fxn(), 3000);
      return (
        <div>
          <NewComponent config={this.state.config}/>
          <button className="clickbutton" onClick={this.fxn}>click me</button>
        </div>
      );
   }
}
export default App;