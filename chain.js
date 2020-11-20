class chain{
    constructor(bodyA,bodyB){
        var Options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:19,
            stiffness:0.2
        }
        this.chain=Constraint.create(Options)
World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}