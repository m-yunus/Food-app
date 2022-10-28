import React,{useState} from 'react'
import CardDish from './CardDish';
import Pagination from './Pagination';
function FilteredDishes(props) {

console.log("your data is ghhdttt" ,props.singleDishes);

let [allMenu,setAllMenus]= useState(props.allMenus)

let [compared,setCompared]= useState([])

let [activeDish,setActiveDish]=useState("Beef")
let [currentPage,setCurrentPage]=useState(1)
let [itemsPerpage,setItemsPerPage]=useState(4)

let indexOfLastDishes= currentPage * itemsPerpage
// 1*4=4
// 2  * 4 =8

let indexofFirstDish= indexOfLastDishes -itemsPerpage

let showdishes=compared.slice(indexofFirstDish,indexOfLastDishes)

let maxFiltered=4

///active dish beef
let singleDish=props.singleDishes.map((item,index)=>{
    if(index<maxFiltered){


    
    return (
      <CardDish item={item}/>
    )}
})
function showHandler(categories){
props.setMenuCategories([])
setActiveDish(categories);
 let FilteredDishesAre=allMenu.filter((item)=>{
    return item.strCategory === categories
 }).map((item)=>{
   
    return (
        <li><img src={item.strMealThumb} alt="" /></li>
    )
 })

setCompared(FilteredDishesAre)
}



let filtered=props.Dishes.map((item)=>{
    return(
        <div >
         
            <li  className={item.strCategory==activeDish ? "active": ""}  onClick={()=>{showHandler(item.strCategory)}}>{item.strCategory}</li>
          
        </div>
    )
})



  return (
    <div className='filtered-dishes'>
<div className='container'>
    <div className="text-center">
    <h2>choose your dishes</h2>
    </div>

<div className='filterd-dishes'>

<ul>
    
    {filtered}
</ul>
</div>


<div className='filtered-dishes-results'>
<ul className='flex flex-wrap gap-30'>
    {singleDish}
{ singleDish.length !=0 ||  compared.length != 0 ? showdishes: <div className='alert'>
    <h2>sorry not found</h2>
</div> }


</ul>

</div>
<div>
    <Pagination filtered={compared} itemsIs={itemsPerpage}
    currentPage={currentPage} setCurrent={setCurrentPage}
    />
</div>
</div>
    </div>
  )
}

export default FilteredDishes