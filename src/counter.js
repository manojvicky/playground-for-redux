import React from 'react';

class Counter extends React.Component {
    constructor(){
        super();
        this.state={
          check: [true, false],
          checkboxChange: false
        }
        this.checkboxChange = this.checkboxChange.bind(this);
        this.columnRadiorender = this.columnRadiorender.bind(this);
    }

    columnRadiorender(value){
      console.log("value", value);
      const{check}=this.state;
      const{config}=this.props;
      
      let i=0;
      check.map((item, index)=>{
        if(item===true){
          i++;
        }
      });
      if(i===2){
        config.controls.map((item, index)=>{
       if(item.id === value){
         item.options.options.map((item1)=>{
           console.log("item1", item1);
           console.log("item.id", item.id);
           
         })
       }
     })
    }else{
      config.controls.map((item, index)=>{
       if(check[index] === true){
         item.options.options.map((item1)=>{
           console.log("item1", item1);
           console.log("item.id", item.id);
           
         })
       }
     })
    }
      
    }
    checkboxChange(e){
      const{config} = this.props;
      let i=0;
      let j=0;
      const check = this.state.check;
      config.controls.map((item, index)=>{
        if(item.id===e.target.value){
          check[index]=!check[index];
          this.setState({
            check: check
          })
        }
      });
      check.map((item, index)=>{
        if(item===false){
          i++;
        }
      });
      check.map((item, index)=>{
        if(item===true){
          j++;
        }
      });
      if(i===check.length){
        this.setState({
            checkboxChange: false
          })
      }
      
      if(j===2){
        this.setState({
            checkboxChange: true
          })
          this.columnRadiorender(e.target.value);
      }else{
        this.setState({
            checkboxChange: true
          })
          this.columnRadiorender(e.target.value)
      }
    }

   render() {
     const{config} = this.props;
     console.log("check", this.state.check);
     const checkbox = config.controls.map((item, index)=>{
       return(
         <label key={index}>
           <input type={item.type} key={index} value={item.id} checked={this.state.check[index]} onChange={ (e)=>this.checkboxChange(e) }/>
           {item.id}
         </label>
       );
     })
      return (
        <div>
         <div>
             {checkbox}
         </div>
         <div>
            {this.state.checkboxChange && <div>hello</div>} 
         </div>
         </div>
      );
   }
}
export default Counter;