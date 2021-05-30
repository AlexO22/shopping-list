const React = require("react");
import ShoppingItemCategory from "./ShoppingItemCategory";

class ShoppingListPanel extends React.Component {
    render() {
      return <div className="column box">
      <h1 className="title is-1">Shopping List</h1>
      <ShoppingItemCategory/>
  </div>
      

    }
  }

export default ShoppingListPanel;