import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {remove} from '../store/CartSlice'
import { add } from '../store/CartSlice';
import {removeproduct} from "../store/CartSlice"
import { Link, useNavigate } from 'react-router-dom';
import cartback from "../img/cartback.webp"
import { selectTotalPrice } from '../store/CartSlice';

export default function Cart() {
  let totalPrice = Math.trunc(useSelector(selectTotalPrice));
  
  const products=useSelector(state=>state.cart)
  const items=useSelector((state)=>state.cart);
  const delivery=Math.trunc((totalPrice*10)/100);
  const finalprice=totalPrice+delivery;
  Math.trunc(finalprice);
  const nav=useNavigate();
  
const dispatch=useDispatch();

const handleRemove=(productId)=>{
  dispatch(remove(productId));

}

const handleAdd=(product)=>{
  dispatch(add(product));
}

const handleRemoveproduct=(productId)=>{
  dispatch(removeproduct(productId));
}


if(items.length!=0)
  {
  return (
    
      <div className='col-sm-12'>
      <nav className="navbar ">
        <div className="col-sm-2">
        <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg><span className='ms-2'>Goto Home</span></Link>
        </div>
 
    </nav>


      <div className="row col-sm-12">
      <div className="row col-sm-9">
      {products?.map((product)=>{
          return(
            <div className="mt-3 col-6 col-md-4 col-lg-4">
          <div className="card mx-auto " style={{width:"18rem"}} key={product.id}>
          <img src={product.image} className="card-img-top" alt="..." height="250" />
          <div className="card-body">
            <h5 className="card-title">{product.title?product.title.slice(0,20):""}</h5>
            
            <p className="card-text ">Rating: {product.rating.rate}</p>
            <h5 className="card-title">Price: {Math.trunc(product.price)}</h5>
            
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
            
              <button className='btn btn-light px-2 py-2' onClick={()=>handleRemove(product.id)}>-</button>
            
              <button className='btn btn-light px-2 py-2'>{product.quantity}</button>
            
              <button className='btn btn-light px-2 py-2' onClick={()=>handleAdd(product)}>+</button>
            
          </div>
            
            

            <button className=" mx-2 btn btn-danger" onClick={()=>handleRemoveproduct(product.id)}>Remove</button>

            
          </div>
        </div>
        </div>
        
        
          )
          
          
        })}
        
    </div>
    <div className="col-sm-3 mt-5">
    <table class="table ">
    <thead>
      <tr>
        <th>
          <h2 className='ps-5'>Buy Product</h2>
        </th>
      </tr>
      <tr>
        <th className='ps-5'>product Price: </th>
        <th>{totalPrice}</th>
        
        
        
      </tr>
      <tr>
      <th className='ps-5'>Delivery Charge:</th>
      <th>{delivery}</th>
      </tr>
      <tr>
      <th className='ps-5'>Total price:</th>
      <th>{finalprice}</th>
      </tr>
      
    </thead>
    <div className="col-sm-1 mx-auto mt-3">
    <button type="button" class="btn btn-success">Checkout</button>
    </div>
      
    
  
</table>
    </div>
    </div>
   
 
  
    
    </div>
  )
}
else{
  return (
  <div col-sm-12>
      <nav className="navbar ">
    <div className="logo col-sm-4 ">
     
      <h2 className>APNA BAZZAR</h2>
    </div>
    </nav>
    <div className="col-sm-3 mx-auto mt-5" >
      <img src={cartback} alt=''className='ps-5 ms-1 cartimg' />
    </div>
    <div className="col-sm-3 mx-auto mt-2  px-4">
      <h3  style={{textAlign:"center"}}>Your cart is empty</h3>
      <p style={{textAlign:"center"}}>Add items to it now.</p>
      <Link to="/"><button className='btn btn-primary w-100' >Shop Now</button></Link>
    </div>
    </div>
  )
}

}
