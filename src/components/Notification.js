import React from 'react'
import './Notification.css';
export default function Notification() {
  return (
    <div className='Notification_main_div'>
      <div>
        <h1>Notification</h1> 
        <button>All</button>&nbsp;
        <button>Unread</button>&nbsp;
        <button>Read</button>&nbsp;
        <button>Delete</button>&nbsp;
      </div>
    </div>
  )
}
