const React = require("react");
import ShoppingItem from "./ShoppingItem";

class ShoppingItems extends React.Component {
    render() {
        return <div>
            <h3 className="title is-3">Shoping Items</h3>
            <ShoppingItem/>
            <ShoppingItem/>
            <ShoppingItem/>
        </div>

    }
}

export default ShoppingItems;