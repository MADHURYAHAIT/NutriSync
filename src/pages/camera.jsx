
import '../css/camera.css'
import FileUploadComponent from './FileUploadComponent';
import { Block, Navbar, Page } from 'framework7-react'
import React, { useState, useEffect, useRef } from 'react';
const Camera = () => {



  return (
    <Page name="camera">
        <Navbar title="Camera" backLink="Back" />
        
        <div className='Cam'>
            <block>
                <h1>Camera</h1>
            </block>
            <Block>
                <FileUploadComponent />
            </Block>
        </div>
      
    </Page>
  );
};






export default Camera