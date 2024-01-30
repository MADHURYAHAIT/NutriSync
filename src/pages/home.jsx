import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button
} from 'framework7-react';
import { FaBell } from "react-icons/fa";
const HomePage = () => (

  <Page name="home">
    {/* Top Navbar */}

    <Navbar title="CaloriSync">
      <NavRight>
        <Link iconIos="f7:bell" iconMd="material:bell" panelOpen="left">
          <FaBell className='bellIcon'/>
        </Link>
      </NavRight>
    </Navbar>

    

    {/* <Navbar large sliding={false}>
     
      <NavTitle sliding>NutriSync</NavTitle>
      <NavRight>
      <Link iconIos="f7:bell" iconMd="material:bell" panelOpen="left">
        <FaBell className='bellIcon'/>
      </Link>
      </NavRight>
      <NavTitleLarge><h1>430</h1><h4>Calories</h4> </NavTitleLarge>
    </Navbar> */}
      
    {/* Page content */}
    <div className='example'>
     

    <Block className='Caloriemeter'>
      <NavTitleLarge><h1>430</h1><h4>Calories</h4> </NavTitleLarge>
    </Block>
    <Block>
      
    <h3>Calorie Tracker</h3>
    </Block>
    <BlockTitle>Items</BlockTitle>
    <List strong inset dividersIos>
      <ListItem  title="Mushroom" checkbox/>
      <ListItem  title="Biryani" checkbox />
      <ListItem  title="Nan Hajma" checkbox />
      <ListItem  title="Paneer Tikka" checkbox />
      <ListItem  title="Aloo Paratha" checkbox />
      <ListItem  title="Butter Paratha" checkbox />
      <ListItem  title="Paneer Paratha" checkbox />
      <ListItem  title="Maggie" checkbox />
      <ListItem  title="Egg roll" checkbox />
      <ListItem  title="Burger" checkbox />
    </List>

    <BlockTitle>Modals</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
      <Button fill popupOpen="#my-popup">Popup</Button>
      <Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
    </Block>


    {/* <List strong inset dividersIos>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List> */}
     </div>
  </Page>
);
export default HomePage;