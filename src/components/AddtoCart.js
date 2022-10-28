import React from 'react'

function AddtoCart({addtocartItem}) {

   let Cart= addtocartItem.map((cartItem)=>{
        return(
            <div>
<img src={cartItem.image} alt="" srcset="" />
        <h6>{cartItem.items}</h6>
            </div>
        )
    })


  return (
    <div className='add-to-cart-wrapper'>
       <div className='add-to-cart-item'>
        {Cart}

       </div>
    </div>
  )
}

export default AddtoCart