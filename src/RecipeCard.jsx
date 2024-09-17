import clsx from "clsx";
const RecipeCard =(props)=> {

  const {recipe,color} = props;
  
  return(

    
    <div className="flex flex-col ">
      <div className={clsx("text-2xl p-4 flex justify-center rounded-t-lg text-black",color)}>{recipe.name}</div>
      <div>
      <img alt="" src={recipe.image_url} className="rounded-b-lg  object-cover w-[300px] h-[240px] " />
      </div>
    </div>        
              
      
    
  );
};

export default RecipeCard;

