import React from 'react';

export default function Home(props){
    console.warn("Home",props.cardData);
    return(
        <>
        <h1>My Cart</h1>
        <div className='cart'>
            <div className='img-wrapper'>
                <img src="https://www.sahivalue.com/product-images/14+pro+max.jpg/293890000021697778/600x600" width="200px" height="200px" alt="error in loading"/>
            </div>
            <div className='text-wrapper'>
               <span>I-Phone</span>
               <span>Price : 80,000</span>
            </div>
            <div className='btn-wrapper'>
                <button onClick={()=>props.addToCartHandler({price:10000,name:'I-phone'})}>Add to cart</button>
            </div>
        </div>
        </>
    )
}