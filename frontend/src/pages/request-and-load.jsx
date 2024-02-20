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

      {/* <div className='center'>
        <IoPersonCircleSharp className='user' />
      </div> */}
      {/* <Block strong inset>
        Name : {user.firstName} {user.lastName}
          <br/>
        User About :  {user.about}
      </Block> */}
      
      {/* <BlockTitle>User Profile</BlockTitle>
    <Card outlineMd className="demo-card-header-pic">
      <CardHeader
        valign="bottom"
        style={{
          backgroundImage: 'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
        }}
      >
        Journey To Mountains <IoPersonCircleSharp className='user' />
      </CardHeader>
      <CardContent>
        <p className="date">Posted on January 21, 2015</p>
        <p>
        Name : {user.firstName} {user.lastName}
        </p>
        <p>  User About :  {user.about}</p>
      </CardContent>
      <CardFooter>
        <Link>Like</Link>
        <Link>Read more</Link>
      </CardFooter>
    </Card> */}

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

      {/* <List strong inset dividersIos>
        {user.links.map((link, index) => (
          <ListItem
          key={index}
          link={link.url}
          title={link.title}
          external
          target="_blank"
          ></ListItem>
          ))}
      </List>

      <BlockTitle>Modals</BlockTitle>
      <Block className="grid grid-cols-2 grid-gap">
        <Button fill popupOpen="#my-popup">Popup</Button>
        <Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
      </Block> */}
    </div>
    </Page>
  );
};

export default RequestAndLoad;
