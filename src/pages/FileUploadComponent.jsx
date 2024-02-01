import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoMdCloudUpload } from 'react-icons/io';

const FileUploadComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the file, e.g., send it to a server
    console.log(acceptedFiles);
    // Update state to indicate that the image has been submitted
    setIsSubmitted(true);
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
            ? 'Image submitted successfully!'
            : "Drag 'n' drop some files here, or click to select files"}
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
