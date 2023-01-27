const getCategoriesData = async () => {
  // code here
  const API = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  try {
    const Item = await fetch(API).then((res)=>res.json());
    console.log("Categories Data", Item)
  } catch (error) {
    return "something went wrong"    
  }
};

const getIngredientData = async () => {
  // code here
  const API = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  try {
    const Item = await fetch(API).then((res)=>res.json());
    console.log("Ingredient Data", Item)
  } catch (error) {
    return "something went wrong"    
  }

};

window.onload = function () {
  //  get the buttons here and add click event
  document.getElementById('get-category-data').addEventListener('click',getCategoriesData);
  document.getElementById('get-ingredient-data').addEventListener('click',getIngredientData);
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
