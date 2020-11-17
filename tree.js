class Tree{
constructor(x,y,width,height){
    var options = {
        isStatic: true
    }
   
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
     this.image=loadImage("tree.png")
}
display(){
    imageMode(CENTER); 
    image(this.image, 700,400,400,400);
    
  }
}