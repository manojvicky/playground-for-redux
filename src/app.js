import React from 'react';
// import Counter from "./counter.container";
class App extends React.Component {
   render() {
    function fluent(fxn){
      return function(...args){
       fxn.apply(this, args);
       return this;
      }
      }

      function decofluent(fluentparameter){
        return function(target, name, dec){
          dec.value=fluentparameter.call(target, dec.value);
        }
      }

      // function man(target, name, dec){
      //   console.log(target);
      //   console.log(name);
      //   console.log(dec);
      //   const fxn=dec.value;
      //   console.log("fxn", fxn);
      //   dec.value= function(...args){
      //     console.log("args", args);
      //     fxn.apply(target, args);
      //     return target;
      //   }
      // }
      
      class Person{
      @decofluent(fluent)
      setName(name, last){
      this.name=name;
      this.last=last;
      }
      @decofluent(fluent)
      getName(){
      console.log("name ==>", this.name, this.last);
      }
      };

      const p = new Person();
      p.setName("moni","toni").getName().setName("i am a","disco dancer").getName();
      console.log(p);
      
      
      return (
        <div>deco</div>
      );
   }
}
export default App;