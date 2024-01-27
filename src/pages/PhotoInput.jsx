import React, { useState, useRef } from 'react';

const PhotoInput = () => {
  const videoRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const handleCapture = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('getUserMedia is not supported in this browser');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing the camera:', error.message);
    }
  };

  const handleCaptureSubmit = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (videoRef.current) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      const capturedPhoto = canvas.toDataURL('image/png');
      setPhoto(capturedPhoto);

      // Stop the camera stream
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  return (
    <div>
      <h2>Camera Input</h2>
      {navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? (
        <button onClick={handleCapture}>Open Camera</button>
      ) : (
        <p>Your browser does not support the necessary APIs for camera access.</p>
      )}

      {photo && (
        <div>
          <h3>Preview:</h3>
          <img src={photo} alt="Captured" style={{ maxWidth: '100%' }} />
        </div>
      )}

      <button onClick={handleCaptureSubmit} disabled={!photo}>
        Submit Photo
      </button>

      <video ref={videoRef} style={{ display: 'none' }} />
    </div>
  );
};

export default PhotoInput;
