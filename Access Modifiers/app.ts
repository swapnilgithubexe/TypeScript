class BottleMaker{
  constructor(public name: string){

  }
}
let b1 = new BottleMaker("Milton");
// when the access modifiers is set to public, we can change the attributes using dot operator.
b1.name = "Cello";

//if we use private, it will indicate the unethical way of accessing the variables, and when any child class inheriting the Bottlemaker won't be able to access private variables

class BottleMaker2{
  constructor(private name: string){

  }
}

let b2 = new BottleMaker2("HRX")
//b2.name is not accessible

class MetalBottleMaker extends BottleMaker2{
  constructor(name: string){
    super(name);

  }

  getValue(){
    // console.log(this.name);
    // Here this.name is not accessible
    
  }
}