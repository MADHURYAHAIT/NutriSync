import React, { useState, useEffect } from 'react';
import NotificationItem from '../pages/ NotificationItem';
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
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  
    const handleNotificationClick = () => {
      // Handle click logic here
    };


  // Login screen demo data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
  const alertLoginData = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  f7ready(() => {


    // Call F7 APIs here
  });

  return (
    <App { ...f7params }>

        {/* Left panel with cover effect*/}
        <Panel left cover dark>
          <View>
            <Page>
              <Navbar title="Notifications"/>
              <Block>Block</Block>
              <NotificationItem
                title="Notification Title"
                text="Notification Text"
                onClick={handleNotificationClick}
              />
              <NotificationItem
                title="Notification Title"
                text="Notification Text"
                onClick={handleNotificationClick}
              />
              
            </Page>
          </View>
        </Panel>


        {/* Right panel with reveal effect*/}
        {/* <Panel right reveal dark>
          <View>
            <Page>
              <Navbar title="Right Panel"/>
              <Block>Right panel contendddt goes here</Block>
            </Page>
          </View>
        </Panel> */}


        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}

          <Toolbar tabbar icons bottom>
            <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconMd="material:home" text="Home" />
            <Link tabLink="#view-history" iconIos="f7:info" iconMd="material:history" text="History" />
            <Link tabLink="#view-camera" iconIos="f7:camera" iconMd="material:camera" text="Camera" />
            <Link tabLink="#view-info" iconIos="f7:info" iconMd="material:info" text="Info" />
            <Link tabLink="#view-settings" iconIos="f7:gear" iconMd="material:settings" text="Settings" />
          </Toolbar>

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-home" main tab tabActive url="/" />

          {/* Catalog View */}
          <View id="view-camera" name="camera" tab url="/camera/" />

          <View id="view-info" name="AboutPage" tab url="/about/"/>

          <View id="view-history" name="HistoryPage" tab url="/history/"/>
          
          {/* Settings View */}
          <View id="view-settings" name="settings" tab url="/settings/" />

          </Views>

      {/* Popup */}
      <Popup id="my-popup">
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
      </Popup>

      <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type="text"
                name="username"
                placeholder="Your username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              ></ListInput>
              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Some text about login information.<br />Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  )
}
export default MyApp;