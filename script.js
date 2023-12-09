import { Effect } from "./effect.js";

const myVideo = document.querySelector('#myVideo');
const myCanvas = document.querySelector('#myCanvas');
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
navigator.mediaDevices.getUserMedia(
    {video:true}
).then(
    function(rawData){
        myVideo.srcObject = rawData;
        myVideo.play();
        myVideo.onloadeddata = function(){
            myCanvas.width = myVideo.videoWidth;
            myCanvas.height = myVideo.videoHeight;
            
            new Effect(myCanvas, myVideo);
        }
    }
).catch(function(err){console.log(err);})
}else {
    console.error('getUserMedia is not supported in this browser');
  }
 