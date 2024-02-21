import {React,useState,useEffect } from 'react';
import NotificationItem from '../pages/ NotificationItem';
import ToolbarSection from './toolbar';
import CircularCompletionRing from '../pages/CircularCompletionRing';
import '../css/completionRing.css';
import {
  f7,
  App,
  Panel,
  Views,
  View,
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const check_auth = async () => {

      try {
        const response = await fetch('http://192.168.133.239:8000/isAuthenticated', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', 
          },
          body: new URLSearchParams({
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const status = data['success']
          console.log("yaaay",data);
          if (status==1){
            localStorage.setItem('isAuthenticated', true);
            setIsAuthenticated(true);
            }
          else{
            localStorage.removeItem('isAuthenticated');
            setIsAuthenticated(false);
          }
        } else {
          const errorData = await response.json();
          console.error('Login check failed', errorData.error);
          // Handle failed login, display an error message, etc.
        }
      } catch (error) {
        console.error('Error during login:', error.message);
      }
};

check_auth();

 
  //fetching data from backend
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg,setMsg] = useState('');

  
  
  const handleClick = () => {
    (   <Views tabs className="safe-areas">
<View  id="info" main tab tabActive url="/about/" />
</Views>)
  };
  
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth ==false) {
      setIsAuthenticated(true);
      console.log('Bhai says',isAuthenticated);

    }
  }, []); 


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
          localStorage.setItem('isAuthenticated', true);
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


if (isAuthenticated==true) {
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
        <Toolbar tabbar icons bottom>
          <Link tabLink="#view-home"  iconIos="f7:house_fill" iconMd="material:home" text="Home" />
          <Link tabLink="#view-history" iconIos="f7:info" iconMd="material:history" text="History" />
          <Link tabLink="#view-camera" iconIos="f7:camera" iconMd="material:camera" text="Camera" />
          <Link tabLink="#view-profile" iconIos="f7:person" iconMd="material:person" text="Profile" />
          <Link tabLink="#view-info" iconIos="f7:info" iconMd="material:info" text="Info" />
        </Toolbar>
       
          {/* Tabbar for switching views-tabs */}
  
      
          <View id="view-home" main tab tabActive url="/home/" />
          <View id="view-camera" name="camera" tab url="/camera/" />
          <View id="view-info" name="AboutPage" tab url="/about/"/>
          <View id="view-history" name="HistoryPage" tab url="/history/"/>
          <View id="view-profile" name="ProfilePage" tab url="/request-and-load/user/:userId/" />
          </Views>
        
        

    </App>
  )
}
  else{
    return(
      <App { ...f7params }>
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
            <div className='buttonBox' >
                <Button type="submit"  onClick={alertLoginData}><h2>Login</h2></Button>
            </div>

            
           
          </form>
          <div className='buttonBox'>
            <Button onClick={handleClick}><p style={{color:'white',fontSize:'15px'}}>Create a new account</p></Button>
              
            </div>
        <List>
              <BlockFooter>
                <p>Login to NutriSync & start a new journey towards a healthier you.</p>
              </BlockFooter>
            </List>
        </Page>

    </div>
    </>
    </App>
      
    )
  }
}

export default MyApp;