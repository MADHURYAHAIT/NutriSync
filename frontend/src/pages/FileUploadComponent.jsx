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
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';
import Tile from './tile';
const FileUploadComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [MyData, setMyData] = useState([]);
  const [length, setLength] = useState([]);
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
        const l = Object.keys(Data).length;
        setLength(l);
        console.log('Response Data:', length);


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
    <>
    <div {...getRootProps()} style={dropzoneStyle}>

       <Popup id="my-popup">
              <View>
                <Page>
                  <Navbar title="Popup">
                    <NavRight>
                      <Link popupClose>Close</Link>
                    </NavRight>
                  </Navbar>
                  <Block style={{ padding: '40px' }}>
                   
                    { 
                    
                    length > 0 ? (
                     
                      Object.keys(MyData).map((curElm)=>(
                          <>
                          <CalTile
                            title={MyData[curElm]['Name']} 
                            text={MyData[curElm]['Calories']}                       
                            />
                          </>
                    
                       )
                       )
                      
                    ) : (
                      <p style={{ padding: '50px' }}>No data available</p>
                    )}
                  </Block>
                  
              </Page>
            </View>
          </Popup>

     
      <input {...getInputProps()} />
      {isDragActive ? (
        <>
        <FaFileImage  size={100} style={{paddingTop:'18px'}}/>
        <h2 className='innerbox' style={{fontSize:'28px'}}>Drop Pic Here</h2>
       
        </>
      ) : (
        <p>
          {isSubmitted
            ? (
              <div className='ib'>
             
              <IoIosCloudDone size={100}/>
              <h2 style={{fontSize:'24px'}}>File Submitted !</h2>
              <p>Know about your food from the button below</p>
              </div>
            )
            : (
              <div className='ib'>
               <IoMdCloudUpload size={100} />
               <h2 style={{fontSize:'24px'}}>Calorie Estimator Tool</h2>
               <p>Drag & drop your pic here / click to select files</p>
              </div>)
          }
        </p>

        
      )}
    </div>
    {isSubmitted
            ? (
              <>
              <Block>
                    <Button fill popupOpen="#my-popup">Know Calories</Button>
              </Block>
            </>
            )
            :  (<Block>
                <Button fill disabled >Know Calories</Button>
                </Block>)
          }
   
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
