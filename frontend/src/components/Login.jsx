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

const LoginPg = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const alertLoginData = () => {
    f7.dialog.alert('Email: ' + email + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await  fetch('http://192.168.133.239:8000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Adjust the content type if needed
        },
        body: new URLSearchParams({
          'email': email,
          'password': password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login Successful:', data);
        // Handle successful login, e.g., redirect to a new page
      } else {
        const errorData = await response.json();
        console.error('Login Failed:', errorData.error);
        console.log('Login Failed Bhai');
        // Handle failed login, display an error message, etc.
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };


  return (
    <>
      <div className='login'>
          {/* <Button fill loginScreenOpen="#my-login-screen">
            Login Screen
          </Button> */}


       
      
            <Page loginScreen>
              <LoginScreenTitle>Nutrisync</LoginScreenTitle>
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
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={password}
                    onInput={(e) => setPassword(e.target.value)}
                  ></ListInput>
                </List>
                <div className='buttonBox'>
                    <Button type="submit"  ><h2>Login</h2></Button>
                </div>
                </form>

                
              


                <List>
                 
                  <BlockFooter>
                    <p>Login to NutriSync & start a new journey towards a healthier you.</p>
                  </BlockFooter>
                </List>
             
            </Page>
      
     
      </div>
    </>
  );
};

export default LoginPg;
