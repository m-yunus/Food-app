import React,{useState,useEffect} from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";

export const AllmenuContext=React.createContext()
function Menus(){

//creating usecontext



//use state 
 let [menu,setMenu]=useState([])
let [categories,setCategories]=useState([])
let[loading,setLoading]=useState(true)
let[MenuCategory,setMenuCategories]=useState([])

//  caling API

async function getMenu(){
    let Api_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
         let response= await fetch(Api_URL)
         let data= await response.json();
   
         setMenu(data.meals)
         setLoading(false);

}
//getting all categories

async function getCategories(){

let Api="https://www.themealdb.com/api/json/v1/1/categories.php"
let fetching= await fetch(Api);
let fet_data=await fetching.json()
console.log("fetching data is" ,fet_data.categories)
setCategories(fet_data.categories)

}

async function getOnlyOneDish(){

    let Api="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
    let fetching= await fetch(Api);
    let categorydata=await fetching.json()
    console.log("onlyoneDish",categorydata.meals);
    setMenuCategories(categorydata.meals)
    
    }
    


useEffect(()=>{
    
   
     getMenu();

    getCategories();
    getOnlyOneDish();
    },[])



return(
    <div>
<Hero />
<AllmenuContext.Provider value={menu}>
{/* conditional rendering */}
{!loading ? (<SpecialDishes />):(<div className="loader"><h1>Loading...</h1></div>)}
    
    {!loading ? (<FilteredDishes Dishes={categories} allMenus={AllmenuContext} singleDishes={MenuCategory} setMenuCategories={setMenuCategories}/>):null}

    </AllmenuContext.Provider>
    
    </div>
)
}

export default Menus;