import React from 'react'

function Pagination(props) {
    console.log("pagination props is",props.filtered)

    let numberOfPages=[]
    for(let i=1; i<=Math.ceil( props.filtered.length/props.itemsIs);i++){
        numberOfPages.push(i);
        
    }
    console.log(numberOfPages)

    function showDishesPagehandler(event){
         props.setCurrent(event.target.id)
    }
    let pages=numberOfPages.map((pageNumber)=>{
        return (
            <li id={pageNumber} onClick={showDishesPagehandler} >{pageNumber}</li>
        )
    })
  return (
    <div> 
<ul className='pagination flex'>
{pages}
</ul>
    </div>)
}

export default Pagination 