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
import CircularCompletionRing from './CircularCompletionRing';
import '../css/completionRing.css';
import { FaFire } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
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
      
    {/* Page content */}
    <div className='example'>
    
  
    
    <Block className='Caloriemeter'>
    <div className='div3'>
      <h3>Today</h3>
    </div>
      <NavTitleLarge><FaFire id='fire' /><h1>1730</h1><h4>Net Calories</h4> </NavTitleLarge>
      <CircularCompletionRing radius={179} strokeWidth={7} percentage={86} />
     
      <div className='div1'>
        <NavTitleLarge>  <FaRunning id='icon' /> <h1>130</h1><h4>Calorie Burn</h4></NavTitleLarge>
        <CircularCompletionRing radius={70} strokeWidth={5} percentage={46} />
      </div>

      <div className='div2'>
        <NavTitleLarge>  <FaPizzaSlice  id='icon' /> <h1>530</h1><h4>Calorie Intake</h4></NavTitleLarge>
        <CircularCompletionRing radius={70} strokeWidth={5} percentage={46} />
      </div>

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