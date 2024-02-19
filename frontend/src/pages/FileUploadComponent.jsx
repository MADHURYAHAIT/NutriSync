import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoMdCloudUpload } from 'react-icons/io';
import Tile from './tile';
const FileUploadComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [MyData, setMyData] = useState([]);
  const onDrop = useCallback(async (acceptedFiles) => {
    // Assuming only one file is dropped for simplicity
    const file = acceptedFiles[0];

    // Create a FormData object and append the file to it
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Make an AJAX request using fetch
      const response = await fetch('http://192.168.133.239:8000/calories', {
        method: 'POST',
        headers: {
          // Don't need to set Content-Type for FormData, it will be set automatically
        },
        body: formData,
      });

      if (response.ok) {
        // Get the response data and log it to the console
        const Data = await response.json();
        setMyData(Data);
        console.log('Response Data:', Data);

        // Update state to indicate that the file has been submitted
        setIsSubmitted(true);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <IoMdCloudUpload size={100} />
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>
          {isSubmitted
            ? `${MyData[1]['Name']} - ${MyData[1]['Calories']} `
            : "Drag 'n' drop some files here, or click to select files"
          }
        </p>

        
      )}
    </div>


  );
};

const dropzoneStyle = {
  border: '2px dashed #ccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FileUploadComponent;
