export default function manoj(...args) {
    // the original decorator
    console.log("args", args);
    function man(target, name, dec){
      console.log("this",target.__proto__);
      lele(target.__proto__);
      function lele(fxn){
          console.log("fxn", fxn);
          fxn.apply(target.__proto__, [{hello:"hello"}])
          return target;
      }
      console.log(name);
      console.log(dec);
    //   const fxn=dec.value;
    // console.log("fxn", fxn);
    // dec.value= function(...args){
    //   console.log("args", args);
    //   fxn.apply(target, args);
    //   return target;
    // }
    target.papa="laxman lal prajapati";
    }
    return man;
}