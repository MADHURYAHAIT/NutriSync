
import '../css/camera.css'
import FileUploadComponent from './FileUploadComponent';
import { Block, Navbar, Page, NavRight, Link, Button } from 'framework7-react'
import React, { useState, useEffect, useRef } from 'react';
import { FaBell } from "react-icons/fa";

const Camera = () => {

  return (
    <Page name="camera">
      <Navbar title="NutriSync">
        <NavRight>
          <Link iconIos="f7:bell" iconMd="material:bell" panelOpen="left">
            <FaBell className='bellIcon'/><span class="badge color-red">3</span>
          </Link>
        </NavRight>
      </Navbar>

        <div className='Cam'>
            <Block>
              <p>Upload a photo to know it's calorie: </p>
            </Block>
            <Block>
                <FileUploadComponent />
            </Block>
            
        </div>
        
    </Page>
  );
};






export default Camera