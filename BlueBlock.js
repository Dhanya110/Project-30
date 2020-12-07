class BlueBlock extends BaseClass {
  constructor(x, y){
    super(x,y,30,30);
    
   
  }
display(){
  
  fill(102, 255, 102)

if(this.body.speed<3){
  super.display()
}
 else {
  World.remove(world,this.body)
  push()
  this.visibility=this.visibility-5
  tint(255,this.visibility)
  //image(this.image,this.body.position.x,this.body.position.y,50,50)
  pop()
}

}
}


 