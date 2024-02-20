import React from 'react'

const toolbar = () => {
  return (
  <Toolbar tabbar icons bottom>
    <Link tabLink="#view-home"  iconIos="f7:house_fill" iconMd="material:home" text="Home" />
    <Link tabLink="#view-history" iconIos="f7:info" iconMd="material:history" text="History" />
    <Link tabLink="#view-camera" iconIos="f7:camera" iconMd="material:camera" text="Camera" />
    <Link tabLink="#view-profile" iconIos="f7:person" iconMd="material:person" text="Profile" />
    <Link tabLink="#view-info" iconIos="f7:info" iconMd="material:info" text="Info" />
  </Toolbar>
  )
}

export default toolbar