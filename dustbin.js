class dustbin{
    constructor(){
        var options = {
            isStatic:true
        }
        
        this.height = 350;
        this.lBody = Bodies.rectangle(550,650,30,100,options);
        this.rBody = Bodies.rectangle(700,650,30,100,options);
        this.bBody = Bodies.rectangle(625,695,150,30,options);
        this.thickness = 30;
        this.baseWidth = 180;
        this.image = loadImage("dustbingreen.png");
      World.add(world,this.lBody);
      World.add(world,this.rBody);
      World.add(world,this.bBody);
    }
    display(){

        var lPos = this.lBody.position;
        var rPos = this.rBody.position;
        var bPos = this.bBody.position

       
        

        push();
        translate(bPos.x, bPos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.baseWidth,this.height);
        pop();

    }
}