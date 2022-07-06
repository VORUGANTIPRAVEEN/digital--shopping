import React from 'react'
import './Settings.css';
export default function Change_Password() {
  return (
    <div className='Change_Password_main_div'>
        <form>
            <label>Current Password</label>
            <input type="password" name="current_password" /><br />
            <label>New Password</label>
            <input type="password" name="new_password" /><br />
            <label>Confirm Password</label>
            <input type="password" name="confirm_password" /><br />
            <input type="submit" value="Change Password" />
        </form>
    </div>
  )
}
