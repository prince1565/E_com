import React from 'react'
import { useState,useEffect } from 'react';
import men1 from '../img/men1.png';
import womenp from '../img/womenp.png';
import Pitem from "./Pitem";

import Jewelery from '../img/jewelery.jpg';
import bike from '../img/bike.jpg';
import Spinner from './Spinner';


export default function Menu() {

const [productitem, setproductitem] = useState(null);
const [spinner, setspinner] = useState(false);


  const callApi=()=>{
   
    setspinner(true);
    
    fetch(`https://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(json => setproductitem(json));
      setTimeout(() => {
        setspinner(false);
      }, 750);
      
  }

  

  useEffect(() => {
    callApi();
  }, [])
  
  return (
    <div className="col-sm-12">
        <div class="col-sm-12 mx-auto menum">
      <br/><br/>
      
    </div>

 
    <div className="col-sm-1 mx-auto">
      {spinner===true?<Spinner/>:""}
    </div>
    <div className="row my-3 col-sm-12">
    
        {productitem?.map((element) => {
          return (
           
            <div className="col-6 col-md-4 my-3" key={element.id}>
               
              <Pitem
                title={element.title.slice(0, 20)}
                description={element.description.slice(0, 25)}
                imageurl={element.image}
                price={element.price}
                rating={element.rating.rate}
                addcart={element}
              />
            </div>
          );
        })}
      </div>



    </div>
  )
}
