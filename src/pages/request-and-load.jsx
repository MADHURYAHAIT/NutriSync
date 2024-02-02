import React from 'react';
import { Page, Navbar, Block, List, ListItem, NavRight,Link} from 'framework7-react';
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
      </Block>
      <Block strong inset>
        {user.about}
      </Block>
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
    </div>
    </Page>
  );
};

export default RequestAndLoad;
