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

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg,setMsg] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const alertLoginData = () => {
    f7.dialog.alert('Status: ' + msg + '<br>Email : ' + email, () => {
    f7.loginScreen.close();
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await  fetch('http://192.168.133.239:8000/signup', {
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
        const data =  response.json();
        const status = data['success']
        if (status==1) {
          setIsAuthenticated(true);
          setMsg(data['msg']);
          console.log('Login Successful:',isAuthenticated);
          // Handle successful login, e.g., redirect to a new page
        }
        else {
            setIsAuthenticated(false);
            setMsg(data['msg']);
            console.log('Login Unsuccessfull:',isAuthenticated);
          // Handle failed login, display an error message, etc.
        }
      } else {
        const errorData = await response.json();
        console.error('Login Failed:', errorData.error);
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
              <LoginScreenTitle><h1>NutriSync</h1></LoginScreenTitle>
              <h3>Create a New Account today !</h3>
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
                    <Button type="submit"  onClick={alertLoginData}><h2>SignUp</h2></Button>
                </div>
              </form>
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
