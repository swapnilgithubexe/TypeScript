class BottleMakerProtected{
  constructor(protected name: string){

  }
}

class MetalBottleMakerProtected extends BottleMakerProtected{
public material = "metal";

changeName(){
  this.name = "Any name"
}
}
let b3 = new MetalBottleMakerProtected("milton");
// b3.name = "Aoyoo"
//Will give an error protected variable cant be accessed, you may call the change name value
b3.changeName();
//protected we rarely used based on needs