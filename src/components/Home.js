import React from 'react';

export default function Home(){
    return(
        <>
        <div className='cart-wrapper'>
            <img src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg" width="40px" height="40px"  alt="error in loading" />
        </div>
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
                <button>Add to cart</button>
            </div>
        </div>
        </>
    )
}