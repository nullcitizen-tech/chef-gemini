import { useState } from "react";
import IngredientsList from "./IngredientsList";
import GeminiRecipe from "./GeminiRecipe";
import { getRecipeFromGemini } from "../../ai";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [buttonHover, setButtonHover] = useState(false);

  function colorChange() {
    setButtonHover((prevState) => !prevState);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  async function getRecipe() {
    const recipeMarkDown = await getRecipeFromGemini(ingredients);
    setRecipe(recipeMarkDown);
  }

  return (
    <main>
      <form
        action={addIngredient}
        className="flex justify-center items-center bg-whiite-100 mt-8"
      >
        <label htmlFor="ingredient"></label>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="ml-4 bg-amber-100 p-1 hover:bg-amber-200 rounded-lg">
          Add Ingredient
        </button>
      </form>
      <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      {recipe && <GeminiRecipe recipe={recipe} />}
    </main>
  );
}

export default Main;
