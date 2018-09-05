import React from 'react';
import manoj from "./classDeco";
// @classDeco
// @manoj("vicky")
class App extends React.Component {
  constructor(){
    super();
    this.state={
      papa: ""
    };
  }
   render() {
    function fluent(fxn){
      debugger;
      console.log("fluent", fxn);
      return function(...args){
        console.log("this", this);
       fxn.apply(this, args);
       return this;
      }
      }

      function decofluent(fluentparameter){
        debugger;
        console.log("fluentparameter");
        return function(target, name, dec){
          console.log("inside deco");
          dec.value=fluentparameter.call(target, dec.value);
        }
      }
      
      // function man(target, name, dec){
      //   console.log(target);
      //   console.log(name);
      //   console.log(dec);
      //   // const fxn=dec.value;
      //   // console.log("fxn", fxn);
      //   // dec.value= function(...args){
      //   //   console.log("args", args);
      //   //   fxn.apply(target, args);
      //   //   return target;
      //   // }
      // }
      // console.log("check closuer0", manoj("hello"));
      class Person{
      @decofluent(fluent)
      // @manoj("man")
      setName(name, last){
      this.name=name;
      this.last=last;
      }
      @decofluent(fluent)
      // @manoj("vicky")
      getName(){
      console.log("name ==>", this.name, this.last);
      }
      };

      const p = new Person();
      p.setName("moni","toni").getName().setName("i am a","disco dancer").getName();
      // console.log(p);
      // console.log("this of papa", this);
      
      
      return (
        <div>deco</div>
      );
   }
}
export default App;