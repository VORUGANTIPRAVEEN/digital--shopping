import React from 'react'
import './Search.css';
import { useState  } from 'react';
// import React from 'react'
import Men_item from './components/Men_item';
import Kids_item from './components/Kids_item';
import Women_item from './components/Women_item';
import './components/Women.css';
export default function Seach(props) {
  const Global_data=[...Men_item.Men,...Kids_item.Kids,...Women_item.women];
  const [state,setstate] =useState("");
  return (
    <div className='searech_main_div'>
        <input type="text" id="autocomplete" className='search_input_div' placeholder="Search ..." onChange={(e)=>setstate(e.target.value)}/>
        <img className='search_img_tag' src="https://img.icons8.com/color/48/000000/search.png" alt="search" />
        <div className='Main_div_search'>
        {
         
        }
        </div>
    </div>
  )
}
