import React from "react";


class AddRecipeModal extends React.Component{
    constructor(props, state) {
        super(props, state);

        this.state = { 
          recipeName: "",
          recipeIngredients: [],
       };

        this.onRecipeNameChange = this.onRecipeNameChange.bind(this);
        this.onIngredientsChange = this.onIngredientsChange.bind(this);
    }

    onRecipeNameChange(name) {
        this.setState({ recipeName: name });
    }

    onIngredientsChange(ingredient) {
      //https://www.robinwieruch.de/react-state-array-add-update-remove
      this.setState( state => {
        const recipeIngredients = [ingredient];
        return {
          recipeIngredients
        };
      });
    };
  
    render(){
        return <div className="modal is-active">
        <div className="modal-background" onClick={() => this.props.onClose()}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add Recipe</p>
            <button className="delete" aria-label="close" onClick={() => this.props.onClose()}></button>
          </header>
          <section className="modal-card-body">
            <h2 className="title-is-2">Recipe name</h2>
            <input
                className="input"
                type="text"
                placeholder="Recipe name"
                value={this.state.recipeName}
                onChange={(e) => this.onRecipeNameChange(e.target.value)}
            />
            <h2 className="title-is-2">Ingredients</h2>
            <input
                className="input"
                type="text"
                placeholder="Ingredient"
                value={this.state.recipeIngredients}
                onChange={(e) => this.onIngredientsChange(e.target.value)}
            />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={() => this.props.onAddRecipe(this.state.recipeName, this.state.recipeIngredients)}>Add Recipe</button>
            <button className="button" onClick={() => this.props.onClose()}>Cancel</button>
          </footer>
        </div>
      </div>
    }
}

export default AddRecipeModal;
