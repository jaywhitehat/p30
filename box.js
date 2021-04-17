class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          friction:1.0,
          density:1.0          
      }

      this.visibility = 255;

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push ();
      translate (pos.x,pos.y);
      angleMode (RADIANS);
      rotate (angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("red");
      fill("black");
      rect(0,0,this.width, this.height);      
      this.Visiblity=this.Visiblity-5;
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop ();
    }
  }