import React from 'react';
import { Page, Navbar, Block, List, ListItem, NavRight,Link,BlockTitle,Button} from 'framework7-react';
import { FaBell } from "react-icons/fa";
import '../css/profile.css';

const RequestAndLoad = (props) => {
  const { user } = props;
  const image = user.img;
  console.log(image);
  return (
    <Page>
      
      <Navbar title="NutriSync">
      <NavRight>
        <Link iconIos="f7:bell" iconMd="material:bell" panelOpen="left">
          <FaBell className='bellIcon'/>
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
            <p>Plan : Weight Loss</p>
        </div>
        <div class="card_count">
            <div class="count">
                <div class="fans">
                    <h3>{user.weight}</h3>
                    <p>Weight</p>
                </div>
                <div class="following">
                    <h3>{user.height}</h3>
                    <p>Height</p>
                </div>
                <div class="post">
                    <h3>{user.age}</h3>
                    <p>Age</p>
                </div>
            </div>
            <Block className="grid grid-cols-2 grid-gap">
        <Button fill popupOpen="#logout">Logout</Button>
        <Button fill loginScreenOpen="#my-login-screen">Edit Profile</Button>
      </Block>
        </div>
    </div>
    </div>
    </Page>
  );
};

export default RequestAndLoad;
