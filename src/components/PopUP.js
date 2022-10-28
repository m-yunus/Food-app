import React from 'react'

function PopUP({closePopUphandler,currentDish,allDishes,addtoCartHandler}) {
  console.log("hkdfdioh",currentDish)
  let current=allDishes.filter((item)=>{


    return (item.strMeal == currentDish
    )
   
  }).map((menuresult)=>{
    return (
      <div className='pop-up-content-inner'>
        <div className='popup-header'>
        <img src={menuresult.strMealThumb} alt="" srcset="" />
        </div>
         <h2>{menuresult.strMeal}</h2>
         <button onClick={()=>addtoCartHandler(menuresult.strMealThumb,menuresult.strMeal)}>Order Now</button>
<h5 className='popup-close' onClick={closePopUphandler}>close</h5>
      </div>
      
    )
   
  })

  return (
    <div className='popup'>
        <div className='popup-content'>
         {current}


        </div>
    </div>
  )
}

export default PopUP