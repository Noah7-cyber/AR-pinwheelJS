import { getLocationWithColor } from "./utils.js";
import { average } from "./utils.js";
export class Effect{
    constructor(canvas, video){
        this.canvas = canvas;
        this.video = video;
        this.ctx = this.canvas.getContext("2d");
        this.pinwheel = new Pinwheel();
        this.#animate();
    }
    #animate(){
        const {ctx, canvas, video} =this;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const locs = getLocationWithColor(imgData, {r:0, g:0, b:255});
        // console.log(imgData);
        // debugger;
        // ctx.fillStyle = "yellow";
        // locs.forEach(loc => {
        //     ctx.fillRect(loc.x, loc.y, 1, 1);
        // })
        if(locs.length>0){
            const center = average(locs);
            // ctx.fillStyle = "red";
            // ctx.arc(center.x, center.y, 5, 0, Math.PI*2);
            // ctx.fill()
            const size = locs.length;
            this.pinwheel.update(ctx, center, size);
        }
        requestAnimationFrame(this.#animate.bind(this));

    }
}