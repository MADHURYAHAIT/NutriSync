import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoMdCloudUpload } from "react-icons/io";
const FileUploadComponent = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the file, e.g., send it to a server
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
        <IoMdCloudUpload size={100} />
      <input {...getInputProps()} />
      {isDragActive ? (
       
        <p>Drop the files here...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
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
