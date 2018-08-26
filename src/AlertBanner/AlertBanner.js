import React from 'react';
var layer = document.createElement("div");

// static show= (type, config)=>{
// let childDiv = React.createElement('div');
// let childLayer = layer.appendChild();
// ReactDOM.render(<AlertBanner type={type} config={config}/>,childLayer);
// }
export default class AlertBanner extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      show: !this.state.show
    });
  }
   render() {
     console.log("this", this);
     const {type, config} = this.props;
     const {header, notifications} = config;
     let allnotifications = notifications.map((item, index)=>{
       return(
       <div className="eachnoti" key={index}>
        {item}
       </div>
       );
     });
      return (
        <div>
        <div className="alert w3-container w3-center w3-animate-opacity">
        <div><span className="firstIcon" style={{width: "20px"}}>FI</span>
        <span className="header">{header}</span>
        <button className="lastIcon" type="button" style={{width: "100px"}} onClick={this.handleClick}>button</button>
        </div>
        </div>
        {
          this.state.show &&
          <div className="drop">
            {allnotifications}
          </div>
        }
        </div>
      );
   }
}