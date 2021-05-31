import React from "react";

import RecipePanel from "./RecipePanel";
import ShoppingListPanel from "./ShoppingListPanel";
import AddRecipeModal from "./AddRecipeModal";

class MainPanel extends React.Component {
    constructor(props, state) {
      super(props, state);

      this.state = {
        recipeList: [],
        ingredientsList: [],
        addRecipeModalOpen: false
      };

      //do this when you are passing a method as a property
      this.onAddRecipe = this.onAddRecipe.bind(this);
      this.onRecipeModalOpen = this.onRecipeModalOpen.bind(this);
      this.onRecipeModalClose = this.onRecipeModalClose.bind(this);
    }

    onAddRecipe(recipeName, recipeIngredients) {
      const updatedRecipeList = this.state.recipeList.concat(recipeName);
      const updatedIngredientList = this.state.ingredientsList.concat(recipeIngredients)
      this.setState({ recipeList: updatedRecipeList });
      this.setState({ ingredientsList: updatedIngredientList});
    }

    onRecipeModalOpen() {
      this.setState({ addRecipeModalOpen: true });
    }

    onRecipeModalClose() {
      this.setState({ addRecipeModalOpen: false });
    }

    render() {
      return <div>
        <div className="columns box">
          <h1>Main Panel</h1>
          <button
            className="button"
            id="add-new-recipe-button"
            onClick={this.onRecipeModalOpen}
          >Add New Recipe</button>
          {JSON.stringify(this.state.recipeList, null, 2)}
          {JSON.stringify(this.state.ingredientsList, null, 2)}
          <ShoppingListPanel />
          <RecipePanel />
        </div>
        {/* if the first value is true, then evaluate the second one */}
        {this.state.addRecipeModalOpen && <AddRecipeModal onAddRecipe={this.onAddRecipe} onClose={this.onRecipeModalClose}/>}
      </div>
      

    }
  }

export default MainPanel;