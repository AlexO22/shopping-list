const React = require("react");
import Ingredients from "./Ingredients";
import CookingMethod from "./CookingMethod";

class Recipe extends React.Component {
    render() {
        return <div className="box">
            <h2 className="title is-2">Recipe</h2>
            <Ingredients/>
            <CookingMethod/>
        </div>

    }
}

export default Recipe;