class Dustbin {
    constructor(x, y,height,width) {
     
      this.body = Matter.Bodies.rectangle(x, y, height,width,{isStatic:true});
      this.width = width;
      this.height = height;
      this.img = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill(255,144,85);
      rect(pos.x, pos.y, this.height,this.width);
      translate(pos.x,pos.y);
      imageMode(CENTER);
      //strokeWeight(0.5);
      image(this.img,800,598,140,137);
      pop();
    }
  };
  