import React, { useEffect } from 'react'
import '../css/camera.css'
const camera = () => {
    useEffect(() => {
        /*
Please try with devices with camera!
*/

/*
Reference: 
https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
https://developers.google.com/web/updates/2015/07/mediastream-deprecations?hl=en#stop-ended-and-active
https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos
*/

// reference to the current media stream
var mediaStream = null;

// Prefer camera resolution nearest to 1280x720.
var constraints = { 
  audio: false, 
  video: { 
    width: {ideal: 640}, 
    height: {ideal: 480},
    facingMode: "environment"
  } 
}; 

async function getMediaStream(constraints) {
  try {
    mediaStream =  await navigator.mediaDevices.getUserMedia(constraints);
    let video = document.getElementById('cam');    
    video.srcObject = mediaStream;
    video.onloadedmetadata = (event) => {
      video.play();
    };
  } catch (err)  {    
    console.error(err.message);   
  }
};

async function switchCamera(cameraMode) {  
  try {
    // stop the current video stream
    if (mediaStream != null && mediaStream.active) {
      var tracks = mediaStream.getVideoTracks();
      tracks.forEach(track => {
        track.stop();
      })      
    }
    
    // set the video source to null
    document.getElementById('cam').srcObject = null;
    
    // change "facingMode"
    constraints.video.facingMode = cameraMode;
    
    // get new media stream
    await getMediaStream(constraints);
  } catch (err)  {    
    console.error(err.message); 
    alert(err.message);
  }
}

function takePicture() {  
  let canvas = document.getElementById('canvas');
  let video = document.getElementById('cam');
  let photo = document.getElementById('photo');  
  let context = canvas.getContext('2d');
  
  const height = video.videoHeight;
  const width = video.videoWidth;
  
  if (width && height) {    
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);    
    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  } else {
    clearphoto();
  }
}

function clearPhoto() {
  let canvas = document.getElementById('canvas');
  let photo = document.getElementById('photo');
  let context = canvas.getContext('2d');
  
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);
  var data = canvas.toDataURL('image/png');
  photo.setAttribute('src', data);
}

document.getElementById('switchFrontBtn').onclick = (event) => {
  switchCamera("user");
}

document.getElementById('switchBackBtn').onclick = (event) => {  
  switchCamera("environment");
}

document.getElementById('snapBtn').onclick = (event) => {  
  takePicture();
  event.preventDefault();
}

clearPhoto();
    }, [])
  return (
    <Page name="Camera">
        <Navbar title="Camera" />
        <div class="panel">
        <button id="switchFrontBtn">Front Camera</button>
        <button id="switchBackBtn">Back Camera</button>
        <button id="snapBtn">Snap</button>
        </div>
        <div style="width:100%">

        <video id="cam" autoplay muted playsinline>Not available</video>
        <canvas id="canvas" style="display:none"></canvas>  
        <img id="photo" alt="The screen capture will appear in this box."/>  
        </div>
    </Page>
  )
}

export default camera