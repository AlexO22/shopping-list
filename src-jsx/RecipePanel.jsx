const React = require("react");
import Recipe from "./Recipe";

class RecipePanel extends React.Component {
    render() {
      return <div className="column box">
        <h1 className="title is-1">Recipes List</h1>
        <Recipe/>
    </div>
    }
  }

export default RecipePanel;