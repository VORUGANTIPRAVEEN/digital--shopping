import React from 'react'

export default function Profile_Settings() {
  return (
    <div className='Profile_Settings_main_div'>
      <label>Change your profie pic</label>
      <input type="file" name="profile_pic" /><br />
      <label>Change your cover pic</label>
      <input type="file" name="cover_pic" /><br />
      <label>Change your profile name</label>
      <input type="text" name="profile_name" /><br />
      <label>Change your profile description</label>
      <input type="text" name="profile_description" /><br />
      <label>Change your profile email</label>
      <input type="text" name="profile_email" /><br />
      <label>Change your profile phone</label>
      <input type="text" name="profile_phone" /><br />
      <label>Change your profile address</label>
      <input type="text" name="profile_address" /><br />
      <button>Submit</button>
    </div>
  )
}
