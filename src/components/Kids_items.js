import React from 'react'
import './Women.css';
import kidsdata from './Kids_item'
export default function Kids_items() {
 return  kidsdata.Kids.map((data,index)=> {
  return (
         <div className='womens_img_div' key={data.id.toString()}>
            <div className='women_imgs'>
                <img className='image_mens' src={data.image}  alt="Logo" />
                <div className='dress_name'>{data.item_Name}</div>
                <div className='dress_desc'>{data.item_desc}</div>
                <div><b aria-hidden="true dress_name">{data.item_cost}</b>&nbsp;<s className='offer_price dress_name'>{data.item_original_cost}</s><br /> {data.item_delivery_status}</div>
                <button className='women_btn'>Add to Cart</button>
          </div>
        </div> 
  )
 });
}
