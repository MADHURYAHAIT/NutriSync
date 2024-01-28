
import '../css/camera.css'
import { Block, Navbar, Page } from 'framework7-react'
import React, { useState, useEffect, useRef } from 'react';
const Camera = () => {


//   return (
//     <div>
//         <Page name="camera">
//             <Navbar title="Camera" backLink="Back" />
//             <Block strong>
//             <div class="panel">
//                 <button id="switchFrontBtn">Front Camera</button>
//                 <button id="switchBackBtn">Back Camera</button>
//                 <button id="snapBtn">Snap</button>
//             </div>
//             <div>
//             <video id="cam" autoplay muted playsinline>Not available</video>
//             <canvas id="canvas" style="display:none"></canvas>   
//                 <img id="photo" alt="The screen capture will appear in this box."/>  

//             </div>

//             </Block>

//         </Page>
//     </div>
//   )
// }




//   const [mediaStream, setMediaStream] = useState(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const photoRef = useRef(null);

//   const constraints = {
//     audio: false,
//     video: {
//       width: { ideal: 640 },
//       height: { ideal: 480 },
//       facingMode: "environment"
//     }
//   };

//   useEffect(() => {
//     getMediaStream(constraints);

//     // Cleanup function
//     return () => {
//       if (mediaStream) {
//         const tracks = mediaStream.getTracks();
//         tracks.forEach(track => track.stop());
//       }
//     };
//   }, []); // Empty dependency array ensures useEffect runs only once

//   const getMediaStream = async (constraints) => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia(constraints);
//       setMediaStream(stream);
//       videoRef.current.srcObject = stream;
//       videoRef.current.onloadedmetadata = () => {
//         videoRef.current.play();
//       };
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   const switchCamera = async (cameraMode) => {
//     try {
//       if (mediaStream) {
//         const tracks = mediaStream.getTracks();
//         tracks.forEach(track => track.stop());
//       }

//       videoRef.current.srcObject = null;

//       constraints.video.facingMode = cameraMode;

//       await getMediaStream(constraints);
//     } catch (err) {
//       console.error(err.message);
//       alert(err.message);
//     }
//   };

//   const takePicture = () => {
//     const canvas = canvasRef.current;
//     const video = videoRef.current;
//     const photo = photoRef.current;
//     const context = canvas.getContext('2d');

//     const height = video.videoHeight;
//     const width = video.videoWidth;

//     if (width && height) {
//       canvas.width = width;
//       canvas.height = height;
//       context.drawImage(video, 0, 0, width, height);
//       const data = canvas.toDataURL('image/png');
//       photo.setAttribute('src', data);
//     } else {
//       clearPhoto();
//     }
//   };

//   const clearPhoto = () => {
//     const canvas = canvasRef.current;
//     const photo = photoRef.current;
//     const context = canvas.getContext('2d');

//     context.fillStyle = "#AAA";
//     context.fillRect(0, 0, canvas.width, canvas.height);
//     const data = canvas.toDataURL('image/png');
//     photo.setAttribute('src', data);
//   };

  return (
    <Page name="camera">
        <Navbar title="Camera" backLink="Back" />

      {/* <video id="cam" ref={videoRef}></video>
      <canvas id="canvas" ref={canvasRef}></canvas>
      <img id="photo" ref={photoRef} alt="User's photo" />
      <Block>
            <button onClick={clearPhoto}>Clear Photo</button>
        <button fill onClick={() => switchCamera("user")}>Switch to Front Camera</button>
        <button onClick={() => switchCamera("environment")}>Switch to Back Camera</button>
        <button onClick={takePicture}>Take Picture</button>
      </Block> */}
    </Page>
  );
};






export default Camera