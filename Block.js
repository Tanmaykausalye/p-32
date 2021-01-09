class Block{

constructor(x,y){

var options ={

density : 1.2

}
this.body = Bodies.rectangle(x,y,30,40,options)
this.width  = 30
this.height = 40

World.add(world, this.body)

}

display(){

var pos  =this.body.position

pop()

fill(63,224,208)
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)
push()
}

}