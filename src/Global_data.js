import React from 'react'
import Men_item from './components/Men_item'
import Kids_item from './components/Kids_item';
import Women_item from './components/Women_item';

export default function Global_data() {
const Global_data={...Men_item.Men,...Kids_item.Kids,...Women_item.women};
console.log(Global_data)
  return (
    <div>Hello</div>
  )
}
