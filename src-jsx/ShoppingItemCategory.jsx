const React = require("react");
import ShoppingItems from "./ShoppingItems";

class ShoppingItemCategory extends React.Component {
    render() {
        return <div className="box">
            <h2 className="title is-2">Shopping Item Category</h2>
            <ShoppingItems/>
        </div>
    }
}

export default ShoppingItemCategory;