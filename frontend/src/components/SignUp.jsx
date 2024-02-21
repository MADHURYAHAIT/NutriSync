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
import { Link } from 'react-router-dom';

const SignUp = () => {
  
  const [msg,setMsg] = useState('');

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [fnm, setFnm] = useState('');
  const [lnm, setLnm] = useState('');
  const [dob, setDob] = useState('');

  const alertLoginData = () => {
    f7.dialog.alert('Data Submitted !', () => {
    f7.loginScreen.close();
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('http://192.168.133.239:8000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
          email,
          phone,
          password,
          cpassword,
          fnm,
          lnm,
          dob,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMsg(data['msg']); 
        console.log(data);
        // Assuming your backend sends a response with a message
        // Handle the success, show an alert or redirect to a different page
      } else {
        const errorData = await response.json();
        setMsg(errorData.error); // Assuming your backend sends an error message
        // Handle the error, show an alert or provide feedback to the user
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };





  return (
    <>
      <div className='login'>
            <Page loginScreen>
              <LoginScreenTitle>NutriSync</LoginScreenTitle>
             
              <form onSubmit={handleSubmit}>
                <List form>
                  <ListInput
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                  ></ListInput>

                <ListInput
                    type="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onInput={(e) => setPhone(e.target.value)}
                  ></ListInput>

                  <ListInput
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={password}
                    onInput={(e) => setPassword(e.target.value)}
                  ></ListInput>

                  <ListInput
                    type="password"
                    name="cpassword"
                    placeholder="Re-Enter Your password"
                    value={cpassword}
                    onInput={(e) => setCpassword(e.target.value)}
                  ></ListInput>

                  <ListInput
                    type="text"
                    name="fnm"
                    placeholder="Enter first name"
                    value={fnm}
                    onInput={(e) => setFnm(e.target.value)}
                  ></ListInput>

                  <ListInput
                    type="text"
                    name="lnm"
                    placeholder="Enter last name"
                    value={lnm}
                    onInput={(e) => setLnm(e.target.value)}
                  ></ListInput>

                  <ListInput
                    type="date"
                    name="dob"
                    placeholder="Enter date of birth"
                    value={dob}
                    onInput={(e) => setDob(e.target.value)}
                  ></ListInput>

                </List>

                <div className='buttonBox'>
                    <Button type="submit"  onClick={alertLoginData}><h2>Sign Up</h2></Button>
                </div>
              </form>
              <div className='buttonBox'>
             

                <Button><Link ><p style={{color:'white',fontSize:'15px'}}>
Log in to your account</p></Link></Button>
                 
              </div>
            <List>
                 
                  <BlockFooter>
                    <p>Sign Up to NutriSync & start a new journey towards a healthier you.</p>
                  </BlockFooter>
                </List>
             
            </Page>
        </div>


    </>
  );
};

export default SignUp;
