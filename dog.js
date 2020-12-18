class  Dog{
constructor (x,y,width,height) {
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
       this.image1 = loadImage("sprites/dog1.png");
    this.image2 = loadImage("sprites/dog2.png");
    this.image3 = loadImage("sprites/dog3.png");
    World.add(world,this.body);

}
    display(){
        var pos = this.body.position
    var dog_sprite = createSprite(pos.x,pos.y,this.width,this.height);
    dog_sprite.addImage(this.image1);
    }
}