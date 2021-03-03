class Paper {
  constructor(x, y,radius) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Matter.Bodies.circle(x, y, radius,{ options});
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.img = loadImage("paper.png");
    
    World.add(world, this.body);
  }

display(){
  var pos =this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  // rectMode(CENTER);
  // strokeWeight(4);
  // stroke("purple");
  // fill("green");
  // rect(0, 0, this.width, this.height);
  image(this.img,pos.x,pos.y,this.radius,this.radius);
  pop();
  
}
};
