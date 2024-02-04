import React from 'react';
import { Page, Navbar, Block, List, ListItem, NavRight,Link,BlockTitle,Button,Card,CardContent,CardHeader,CardFooter} from 'framework7-react';
import { FaBell } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
const RequestAndLoad = (props) => {
  const { user } = props;

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
      <div className='center'>
        <IoPersonCircleSharp className='user' />
      </div>
      <Block strong inset>
        Name : {user.firstName} {user.lastName}
          <br/>
        User About :  {user.about}
      </Block>
      
      <BlockTitle>Styled Cards</BlockTitle>
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
    </Card>



      <List strong inset dividersIos>
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
      </Block>
    </div>
    </Page>
  );
};

export default RequestAndLoad;
