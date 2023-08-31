import React from 'react';

export default function Header(props){
    console.warn("Header",props.cardData);
    return(
        <>
        <div className='cart-wrapper'>
            <span className='cart_no_item'>{props.cardData.length}</span>
            <img src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg" width="40px" height="40px"  alt="error in loading" />
        </div>
        </>
    )
}