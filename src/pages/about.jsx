import React from 'react';
import { Page, Navbar, Block, BlockTitle, NavRight,Link,List,ListItem } from 'framework7-react';
import { FaBell } from "react-icons/fa";
import '../css/about.css'
const AboutPage = () => (
  <Page>
   <Navbar title="NutriSync">
      <NavRight>
        <Link iconIos="f7:bell" iconMd="material:bell" panelOpen="left">
          <FaBell className='bellIcon'/>
        </Link>
      </NavRight>
    </Navbar>
    <div className='about'>
    <BlockTitle><h2>What's NutriSync ?</h2></BlockTitle>
    <Block bold inset >
      <p>
     Welcome to NutriSync, your go-to solution for effortless and effective calorie tracking. We understand that maintaining a healthy lifestyle is a journey, and we're here to support you every step of the way. Whether you're looking to lose weight, gain muscle, or simply stay on top of your nutritional goals, our app is designed to make calorie tracking simple, intuitive, and enjoyable. It will help you acheieve your desired body weight.
      </p>
    </Block>
    
     
  
    <List strong inset dividersIos>
    <ListItem
        title="Description"
        link="/description/"
        />
      <ListItem
        title="Our Team"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
        />
      <ListItem
        title="Contact Us"
        link="/load-something-that-doesnt-exist/"
        />
      <ListItem
        title="Acknowledgments"
        link="/request-and-load/user/123456/"
        />
    </List>
  </div>
  </Page>
);

export default AboutPage;
