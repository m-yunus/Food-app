import React,{useContext, useState} from 'react'
import AddtoCart from './AddtoCart';
import CardDish from './CardDish';
import PopUP from './PopUP'
import { AllmenuContext } from './Menu';


function SpecialDishes(props) {
const Allmenus=useContext(AllmenuContext)


let [showPopup,setShowpopup]=useState(false)
let [currentDish,setCurrentDish]=useState('')
let[addtocartItem,setAddtoCartItem]=useState([])
    let maxspecial=8;
    let special=Allmenus.map((item,index)=>{
        if (index<maxspecial){

            return(
            
               <CardDish item={item} showPopuphandler={showPopuphandler}/>
         )

        }
       
    })

function showPopuphandler(MealName){
  setCurrentDish(MealName)
  
    setShowpopup(true)
}

function closePopUphandler(){
    setShowpopup(false)
}
function addtoCartHandler(img,item){
setAddtoCartItem([...addtocartItem,{
    "image":img,
    "items":item
}])
}

  return (

    <section className='special-dishes'>
{showPopup && <PopUP addtoCartHandler={addtoCartHandler} closePopUphandler={closePopUphandler}currentDish={currentDish} allDishes={Allmenus}/>}
        <div className="container">
<AddtoCart addtocartItem={addtocartItem}/>
            <div className="special-dishes-content text-center">
            <h2> Our specialDishes are</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ad quia soluta deserunt veritatis fugit unde reiciendis, quasi quibusdam cumque? </p>
            </div>
            <div className="special-dishes-list">

            <ul className='flex flex-wrap gap-30 '>
                    {special}
                </ul>
            </div>
               
        </div>
   


    </section>
   
  )



}

export default SpecialDishes