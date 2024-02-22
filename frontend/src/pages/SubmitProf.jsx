import React, { useState } from 'react';
import {
  f7,
  Page,
  Button,
  LoginScreen,
  View,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter,
  
} from 'framework7-react';

import { GiChestnutLeaf } from "react-icons/gi";
const SubmitProfile = () => {
  
  const [msg,setMsg] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');




  const handleProfSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('http://192.168.133.239:8000/bmi', {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
        body: new URLSearchParams({
        height,
        weight,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMsg(data['msg']); 
        f7.dialog.alert('Data Updated !', () => {
        f7.loginScreen.close();});
        // Assuming your backend sends a response with a message
        // Handle the success, show an alert or redirect to a different page
      } else {
        const errorData = await response.json();
        setMsg(errorData.error); 
        f7.dialog.alert('Submission Error !', () => {
        f7.loginScreen.close();});// Assuming your backend sends an error message
        // Handle the error, show an alert or provide feedback to the user
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
      f7.dialog.alert('Submission Error 505 !', () => {
        f7.loginScreen.close();});
    }
  };





  return (
    <>
      <div className='login'>
            <Page loginScreen>
              <LoginScreenTitle><GiChestnutLeaf size={'28px'} /> NutriSync</LoginScreenTitle>
             
              <form onSubmit={handleProfSubmit}>
                <List form>
    
                <ListInput
                    type="number"
                    name="height"
                    placeholder="Enter your Height in feet"
                    value={height}
                    onInput={(e) => setHeight(e.target.value)}
                  ></ListInput>

                <ListInput
                     type="number"
                     name="weight"
                     placeholder="Enter your Weight in kgs"
                     value={weight}
                     onInput={(e) => setWeight(e.target.value)}
                  ></ListInput>

                </List>

                <div className='buttonBox' >
                    <Button type="submit"><h2>Submit</h2></Button>
                </div>
              </form>
              {/* <div className='buttonBox'>
             

                <Button><p style={{color:'white',fontSize:'15px'}}>
Log in to your account</p></Button>
                 
              </div> */}
            <List>
            
                  <BlockFooter>
                    <p>Update your current weight</p>
                  </BlockFooter>
                </List>
             
            </Page>
        </div>


    </>
  );
};

export default SubmitProfile;
