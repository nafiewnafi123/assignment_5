const getMealInput = () => {
    const mealInput = document.getElementById("input-meal").value;
    const ingredients = document.getElementById("meal-ingredients");
    ingredients.style.display = "none";
  
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`;
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const mealListDiv = document.getElementById("meal-list");
        let mealsInput = data.meals;
        let mealList = "";
        mealsInput.forEach((element) => {
          mealList += ` 
            <div onClick="getIngredients('${element.strMeal}')" class="meal-card">
              <img class="card-img-top" src="${element.strMealThumb}" />
              <div class="card-body">
                <h5 class="card-title text-center">${element.strMeal}</h5>
              </div>
            </div>
            `;
        });
        mealListDiv.innerHTML = mealList;
      })
      .catch(function () {
        const mealError = document.getElementById("meal-list");
        let mealErrorString = "";
        mealErrorString = `<h2 class="meal-error">Sorry!We don't find any meal..</h2>`;
        mealError.innerHTML = mealErrorString;
      });
   
  };
 
  
  
  const getIngredients = (mealsIngredients) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsIngredients}`;
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const meal = data.meals;
        ingredientsOfMeal(meal[0]);
      });
  };
 
  
  
  const ingredientsOfMeal = (mealsIngredients) => {
    const ingredientsDiv = document.getElementById("meal-ingredients");
    ingredientsDiv.style.display = "block";
    ingredientsDiv.innerHTML = `
    <div class="meal-ingredients">
       <img src="${mealsIngredients.strMealThumb}" alt="" />
          <h2>${mealsIngredients.strMeal}</h2>
           <h3>Ingredients</h3>
          <ul >
            <li>${mealsIngredients.strIngredient1}</li>
            <li>${mealsIngredients.strIngredient2}</li>
            <li>${mealsIngredients.strIngredient3}</li>
            <li>${mealsIngredients.strIngredient4}</li>
            <li>${mealsIngredients.strIngredient5}</li>
            <li>${mealsIngredients.strIngredient6}</li>
            <li>${mealsIngredients.strIngredient7}</li>
            <li>${mealsIngredients.strIngredient8}</li>
            <li>${mealsIngredients.strIngredient9}</li>
            <li>${mealsIngredients.strIngredient10}</li>
          </ul>
         
          <h3>Instructions</h3>
          <p>${mealsIngredients.strInstructions}</p>
    </div>
    
    `;
  };
 
