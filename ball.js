class Ball {
  constructor(x, y,r) {
    var options = {
        'restitution' : 0,
        'friction' : 1,
        'density' :1.2 
    }
    this.body = Bodies.circle(x, y,r, options);
    this.radius = r;
    
    World.add(world, this.body);
    this.image = loadImage("polygon.png");
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius,this.radius);
    pop();
  }
};
