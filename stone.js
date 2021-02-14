class stone{
    constructor(x, y) {
        var options = {'isStatic':true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 40;
        this.height = 40;
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}