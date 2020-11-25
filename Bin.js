class Bin {
    constructor(x, y, width, height) {
      var options = {
          restitution:0,
          friction:1.0,
          density:0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      stroke("black");
      strokeWeight(1);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
  }
  