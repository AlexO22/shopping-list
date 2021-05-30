const React = require("react");

class Ingredient extends React.Component {
    render() {
        return <div>
            <label className="checkbox">
                <input type="checkbox"></input>
                    Example ingredient
                </label>
        </div>

    }
}

export default Ingredient;