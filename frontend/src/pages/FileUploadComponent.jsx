import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoMdCloudUpload } from 'react-icons/io';
import { IoIosCloudDone } from "react-icons/io";
import { FaFileImage } from "react-icons/fa";
import CalTile from '../pages/CalorieTile';
import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  Button,
} from 'framework7-react';

const FileUploadComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [MyData, setMyData] = useState([]);
  const [length, setLength] = useState([]);

  const onDrop = useCallback(async (acceptedFiles) => {
    const user1=localStorage.getItem('currentUser');
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      setIsLoading(true);

      const response = await fetch(`http://192.168.133.239:8000/calories?user1=${encodeURIComponent(user1)}`, {
        method: 'POST',
        headers: {},
        body: formData,
      });

      if (response.ok) {
        const Data = await response.json();
        setMyData(Data);
        const l = Object.keys(Data).length;
        setLength(l);
        console.log('Response Data:', length);

        setIsSubmitted(true);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block style={{ paddingTop:'50px' }}>
              <p> Calories per 100 gram : </p>
              {length > 0 ? (
                Object.keys(MyData).map((curElm) => (
                  <CalTile
                    title={MyData[curElm]['Name']} 
                    text={MyData[curElm]['Calories']}                
                  />
                ))
              ) : (
                <p style={{ padding: '50px' }}>No data available</p>
              )}
            </Block>
          </Page>
        </View>
      </Popup>

      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <>
            <FaFileImage  size={100} style={{paddingTop:'18px'}}/>
            <h2 className='innerbox' style={{fontSize:'28px'}}>Drop Pic Here</h2>
          </>
        ) : (
          <p>
            {isSubmitted  && !isLoading  ? (
              <div className='ib'>
                <IoIosCloudDone size={100}/>
                <h2 style={{fontSize:'24px'}}>Result ready !</h2>
                <p>Know about your food from the button below</p>
              </div>
            ) : (
              <div className='ib'>
                <IoMdCloudUpload size={100} />
                <h2 style={{fontSize:'24px'}}>Calorie Estimator Tool</h2>
                <p>Drag & drop your pic here / click to select files</p>
              </div>
            )}
          </p>
        )}
      </div>
      
      {isLoading && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>Analyzing Image...</p>
          <p>
            <span className="progressbar-infinite color-multi"></span>
          </p>
        </div>
      )}

      {isSubmitted && !isLoading &&(
        <Block>
          <Button fill popupOpen="#my-popup">View result</Button>
        </Block>
      )}
      {!isSubmitted && !isLoading && (
        <Block>
          <Button fill disabled>Know Calories</Button>
        </Block>
      )}
    </>
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
