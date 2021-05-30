const React = require("react");
import Ingredient from "./Ingredient";

class Ingredients extends React.Component {
    render() {
        return <div>
            <h3 className="title is-3">Ingredients</h3>
            <Ingredient/>
            <Ingredient/>
            <Ingredient/>
        </div>

    }
}

export default Ingredients;