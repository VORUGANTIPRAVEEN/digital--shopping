import React from 'react'
import './Women.css';
import data from './Men_item'
export default function Men_items() {
  return  data.Men.map((vals,index)=> {
  return (
   <div className='womens_img_div'key={vals.id.toString()}>
            <div className='women_imgs'>
                <img className='image_mens' src={vals.image}  alt="Logo" />
                <div className='dress_name'>{vals.item_Name}</div>
                <div className='dress_desc'>{vals.item_desc}</div>
                <div><b aria-hidden="true dress_name">{vals.item_cost}</b>&nbsp;<span className='offer_price dress_name'>{vals.item_original_cost}</span> {vals.item_delivery_status}</div>
                <button className='women_btn'>Add to Cart</button>
          </div>
        </div> )
  });
}
