import React, { useState } from 'react'
import './Notification.css';
import Personal_information from './Personal_Information';
import Change_Password from './Change_Password';
import Addresses from './Addresses';
import Profile_Settings from './Profile_Settings';
export default function Settings() {
const [state, setState] = useState("");
  return (
    <div className='Settings_main_div'>
      <div>
         <h1>Account Settings</h1>
         <button onClick={()=>setState(<Personal_information />)}>personal Information</button>&nbsp;
         <button onClick={()=>setState(<Change_Password />)}>Change Password</button>&nbsp;
         <button onClick={()=>setState(<Addresses />)}>Addresses</button>&nbsp;
         <button onClick={()=>setState(<Profile_Settings />)}>Profile Settings</button>&nbsp;
         <div className='settingsubdiv'>{state}</div>
      </div>
    </div>
  )
}
