import React, { useState,useEffect } from 'react';
import {
  f7,
  Page,
  Button,
  LoginScreenTitle,
  List,
  ListInput,

  BlockFooter,
  
} from 'framework7-react';

import { GiChestnutLeaf } from "react-icons/gi";
const SubmitProfile = () => {
  
  const [msg,setMsg] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [user1, setUser1] = useState(localStorage.getItem('currentUser'));
//   useEffect(() => {
//     const user1=localStorage.getItem('currentUser');

//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//       console.log("Height Weight se fetch ",(JSON.parse(xhttp.responseText)));
//     }
//     xhttp.open("GET", "http://192.168.133.239:8000/fetchBmi?user1="+encodeURIComponent(user1), true);
//     xhttp.send();
  
// }, [height]);

  const handleProfSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    try {
      const response = await fetch(`http://192.168.133.239:8000/bmi?height=${encodeURIComponent(height)}&weight=${encodeURIComponent(weight)}&user1=${encodeURIComponent(user1)}`);
      
      if (!response.ok) {
         console.log('Network response was not ok');
         f7.dialog.alert('Submission Error!', () => {
          f7.loginScreen.close();
        });
      }
  
      const responseData = await response.text();
      console.log(responseData);
      f7.dialog.alert('Data Updated!', () => {
        f7.loginScreen.close();
      });
    } catch (error) {
      console.error('Fetch error:', error);
      console.error('Fetch error:', error);
      f7.dialog.alert('Fetch Error!', () => {
        f7.loginScreen.close();
      });
    }
  };



  return (
    <>
      <div className='login'>
            <Page loginScreen>
              <LoginScreenTitle><GiChestnutLeaf size={'28px'} /> NutriSync</LoginScreenTitle>
             
              <form onSubmit={handleProfSubmit}>
                <List>
    
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
