export class Pinwheel{
    constructor(){
        this.x = null;
        this.y = null;
        this.size = null;
    }
    update(ctx, center, size){
        this.x = center.x;
        this.y = center.y;
        this.size = size;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -this.size/2);
        ctx.lineTo(this.size/4, 0);
        ctx.closePath();
        ctx.fillStyle ="orange";
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}