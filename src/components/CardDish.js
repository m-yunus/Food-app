import React from 'react'

function CardDish({showPopuphandler,item}) {



  return (
    

<li >
    <a href="javaScript:;" onClick={()=>showPopuphandler(item.strMeal,item.strMealThumb)}>
    <img src={item.strMealThumb}  />
    
    <h4> {item.strMeal}</h4></a>
    </li>
    
  )
}

export default CardDish