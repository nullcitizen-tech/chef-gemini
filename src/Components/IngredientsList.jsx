function IngredientsList(props) {
  const ingredientsList = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <div className="flex flex-col items-center mt-4 ">
        <h2 className="text-2xl font-medium">Ingredients on hand:</h2>
        <ul>{ingredientsList}</ul>
      </div>
      {props.ingredients.length > 4 && (
        <div className="flex justify-center items-center">
          <div className="inline-block bg-amber-100 rounded-lg">
            <div className="flex p-8 justify-between gap-8">
              <div className="text-amber-900">
                <h3>Ready for recipe</h3>
                <p>Generate a recipe from your list of ingredients</p>
              </div>
              <button
                onClick={props.getRecipe}
                className="bg-amber-500 p-[0.4rem] rounded-xl text-amber-900 hover:bg-amber-600 "
              >
                Get Recipe
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;
