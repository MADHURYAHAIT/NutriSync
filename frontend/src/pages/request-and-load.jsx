import {React,useState,useEffect} from 'react';
import { f7,Page, Navbar, Block,Popup,View, NavRight,Link,Button} from 'framework7-react';
import { FaBell } from "react-icons/fa";
import '../css/profile.css';
import SubmitProfile from './SubmitProf';
const RequestAndLoad = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user } = props;
  const image = user.img;
  //console.log(image);

  const[flag,setFlag]=useState(0)
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      console.log('Authentication :',isAuthenticated);

    }
  }, [flag]); 

  const handleLogout = async () => {
    try {
      const response = await fetch('http://192.168.133.239:8000/signout', {
        method: 'GET', // Assuming logout endpoint is a GET request, adjust if needed
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Logout successful, you may want to redirect or handle it in your app
        console.log('Logout successful');
        setIsAuthenticated(false);
        localStorage.clear();
        localStorage.setItem('isAuthenticated', false);
        f7.dialog.alert('Logged Successfully');
        window.location.reload(2000);
      } else {
        // Logout failed, handle the error
        console.error('Logout failed');
        f7.dialog.alert('Logged Failure');
      }
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };



  return (
    <Page>
      
      <Navbar title="NutriSync">
      <NavRight>
        <Link iconIos="f7:bell" iconMd="material:bell" panelOpen="left">
          <FaBell className='bellIcon'/><span class="badge color-red">3</span>
        </Link>
      </NavRight>
    </Navbar>

      <div class = 'profile'>


<div class="cardd">
        <div class="card_background_img">
        <img src={user.banner} style={{height:'130px',width:'100%',objectFit: 'cover'}} alt="profile" />
        </div>
        <div class="card_profile_img" >
            <img src={image} style={{height:'120px',width:'120px'}} alt="profile" />
        </div>
        <div class="user_details">
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
            <p>Dob : {user.dob}</p>

        </div>
        <div class="card_count">
            <div class="count">
            <div class="fans">
                    <h3>{parseFloat(user.bmi.toFixed(1))}</h3>
                    <p>Bmi</p>
                </div>
                <div class="fans">
                    <h3>{parseFloat(user.weight).toFixed(1)}kg</h3>
                    <p>Weight</p>
                </div>
                <div class="following">
                    <h3>{parseFloat(user.height).toFixed(1)}m</h3>
                    <p>Height</p>
                </div>
                <div class="post">
                    <h3>{user.age}</h3>
                    <p>Age</p>
                </div>
            </div>
            <Block className="grid grid-cols-2 grid-gap">
            <Button fill onClick={handleLogout}>Logout</Button>
        <Button fill popupOpen=".demo-popup-push">Edit Profile</Button>
      </Block>
        </div>
    </div>
    </div>
       <Popup push className="demo-popup-push">
        <View>
          <Page>
            <Navbar  transparent>
              <NavRight>

                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>

             <SubmitProfile/>
          
          </Page>
        </View>
      </Popup>
    </Page>
  );
};

export default RequestAndLoad;
