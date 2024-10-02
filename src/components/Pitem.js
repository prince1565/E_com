import React from 'react'

import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { add } from '../store/CartSlice';


export default function Pitem(props) {
 
  


  const dispatch=useDispatch();


  const handleAdd=(product)=>{

    dispatch(add(product));
  }

  return (
    <div class="card mx-auto productcart" >
  <img src={props.imageurl} class="pimage" alt="..." />
  <div class="card-body">
    <h5 class="card-title fs-6 fw-bold">{props.title}</h5>
    {/* <p class="card-text">{props.description}</p> */}
    <p class="card-text fs-6">Rating : {props.rating}</p>
    
    <h5 class="card-title fs-6">Price:{Math.trunc(props.price)}</h5>
    
   
    <button onClick={()=> handleAdd(props.addcart)} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Add into cart</button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Product Cart</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h2>Product Added sucessfully</h2>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
  </div>
</div>
    
  )
}
