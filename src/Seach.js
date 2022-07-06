import React from 'react'
import './Search.css';
export default function Seach(props) {
  return (
    <div className='searech_main_div'>
        <input type="text" id="autocomplete" className='search_input_div' placeholder="Search ..."/>
        <img className='search_img_tag' src="https://img.icons8.com/color/48/000000/search.png" alt="search" />
    </div>
  )
}
