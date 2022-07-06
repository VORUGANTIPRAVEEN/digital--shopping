import React from 'react'
import './Notification.css';
export default function Settings() {
  const personalfunction=()=>{
    console.log('personalfunction');
  }
  const Addressesfunction=()=>{
    console.log('Addressesfunction');
  }
  const Changefunction=()=>{
    console.log('Changefunction');
  }
  const Profilesettingsfinction=()=>{
    console.log('Profilesettingsfinction');
  }
  return (
    <div className='Settings_main_div'>
      <div>
         <h1>Account Settings</h1>
         <button onClick={personalfunction}>personal Information</button>&nbsp;
         <button onClick={Changefunction}>Change Password</button>&nbsp;
         <button onClick={Addressesfunction}>Addresses</button>&nbsp;
         <button onClick={Profilesettingsfinction}>Profile Settings</button>&nbsp;
      </div>
    </div>
  )
}
