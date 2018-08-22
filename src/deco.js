//Higher order function: which take a function as a parameter and retun another function
function compose(fn1/* function 1 as parameter*/, fn2 /* function 1 as parameter*/) {
    return function (arg) {//returning a function
        return fn1(fn2(arg));
    }
}

function addTwo(value) {
    return value + 2;
}

function multiplyTwo(value) {
    return value * 2;
}

var ans = compose(multiplyTwo, addTwo);
console.log("ans", ans(3));


//////fluent function as higher order function
function fluent(fxn){
    return function(...args){
     fxn.apply(this, args);
     return this;
    }
    }
    var Person=function(){};
    
    Person.prototype.setName= fluent(function(name, surname){
        this.name=name;
        this.surname=surname;
    });
    
    Person.prototype.getName=fluent(function(){
    console.log(this.name+" "+this.surname);
    });
    var per = new Person();
    
    console.log("name",per.setName("mani", "pani").getName().setName("vicks", "pani").getName());





    function fluent(fxn){
        return function(...args){
         fxn.apply(this, args);
         return this;
        }
        }
        function man(target, name, dec){
        console.log(target, name, dec);
        }
        
        class Person{
        @man
        setName(name, last){
        this.name=name;
        this.last=last;
        }
        
        getName(){
        console.log("name ==>", this.name, this.last);
        }
        };
        
        /* const p = new Person();
        p.setName("moni", "toni");
        p.getName(); */
        