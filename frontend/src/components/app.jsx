import {React,useState } from 'react';
import NotificationItem from '../pages/ NotificationItem';
import ToolbarSection from './toolbar';

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
  LoginScreenTitle,
  List,
  ListInput,
  BlockFooter,
  Toolbar,
  NavRight,
  ListItem,
  Link,
  Button,
  Block,

} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  //fetching data from backend
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg,setMsg] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await  fetch('http://192.168.133.239:8000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
        body: new URLSearchParams({
          'email': email,
          'password': password,
        }),
      });

      if (response.ok) {
        const data =  await response.json();
        const status = await data['success']
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

  
   
    const handleNotificationClick = () => {
      f7.dialog.alert('Notification Clicked');
    };

    const [calorie, setCalorie] = useState([]);
   
    const alertLoginData = () => {
      f7.dialog.alert('Status: ' + msg + '<br>Email : ' + email+'<br>Pass :'+password, () => {
      f7.loginScreen.close();
      });
    };



  // Framework7 Parameters
  const f7params = {
    name: 'NutriSync', // App name
      theme: 'auto', // Automatic theme detection
      colors: {
        primary: '#910A67',
      },

      // App store
      store: store,
      // App routes
      routes: routes,
  };



  return (
    <App { ...f7params }>

        {/* Left panel with cover effect*/}
        <Panel left cover dark>
          <View>
            <Page>
              <Navbar title="Notifications"/>
              <Block>Block</Block>
              <NotificationItem
                title="Drink Water"
                text="Drink about 300ml of water"
                onClick={handleNotificationClick}
              />

              <NotificationItem
                title="Run 200m"
                text="Target Burn 100 calories"
                onClick={handleNotificationClick}
              />

              <NotificationItem
                title="Sleep Well"
                text="Minimum target minimum 8 hours"
                onClick={handleNotificationClick}
              />

            </Page>
          </View>
        </Panel>
      

       


        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
        {isAuthenticated ? (
          <>
          <View main tab tabActive url="/home/" />
          <ToolbarSection/>
          </>
        ) : ( 
        <>  
        
        <div className='login'>   

          <Page loginScreen>
            <LoginScreenTitle>NutriSync</LoginScreenTitle>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}>
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
                  <Button type="submit"  onClick={alertLoginData}><h2>Login</h2></Button>
              </div>

              
             
            </form>
            <div className='buttonBox'>
              <Button Link='/signup/'><p style={{color:'white',fontSize:'15px'}}>Create a new account</p></Button>
                
              </div>
          <List>
                <BlockFooter>
                  <p>Login to NutriSync & start a new journey towards a healthier you.</p>
                </BlockFooter>
              </List>
          </Page>

      </div>
      </>
        
        )}
      

          {/* Tabbar for switching views-tabs */}
         
         

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          {/* <View main tab tabActive url="/" /> */}
          {/* Catalog View */}
          <View id="view-home" name="home" tab url="/home/" />
          <View id="view-camera" name="camera" tab url="/camera/" />
          <View id="view-info" name="AboutPage" tab url="/about/"/>
          <View id="view-history" name="HistoryPage" tab url="/history/"/>
          <View id="view-profile" name="ProfilePage" tab url="/request-and-load/user/:userId/" />

          </Views>

      {/* Popup */}
      {/* <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup> */}
    </App>
  )
}
export default MyApp;