class Rope{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 20
        }
    
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
       
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            
            
            stroke(48,22,8);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
             
            
        }
            
            
    }
    
}