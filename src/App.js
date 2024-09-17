import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import RecipeCard from "./RecipeCard.jsx";
import {useState} from "react";
import clsx from "clsx";



const App = () => {

  const [recipe,setRecipe] = useState(null);
  const [randomColor,setRandomColor] = useState("bg-pink-400");

  const changeButtonColor=()=>{
  const bgColorsArray=["bg-green-400","bg-yellow-400","bg-pink-400","bg-blue-400"];

 setRandomColor(bgColorsArray[Math.floor(Math.random() * (bgColorsArray.length+1))] );
  
}

  const recipeFetcher=()=>{
    changeButtonColor();
    fetch("https://api.react-formula.com/learning-api/demos/using-fetch/recipes")
      .then((response)=>response.json())
      .then((data)=> setRecipe(data))
  }
  
  return (
   <div className="h-screen flex justify-center items-center ">
   
    <div className=" w-full max-w-sm flex flex-col justify-center items-center">

      {recipe ? <RecipeCard color={randomColor} recipe={recipe} /> :<FontAwesomeIcon className="fa-spin m-20 p-16" icon={faSpinner} />}

      <button
        onClick ={recipeFetcher}
        className= {clsx("p-2 m-2  rounded-lg border-2 border-black text-black",randomColor)}
        >
      Random Recipe</button>
  </div>
   
   </div>
    );
};

export default App;
