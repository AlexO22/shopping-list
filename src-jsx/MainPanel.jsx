const React = require("react");

import RecipePanel from "./RecipePanel";
import ShoppingListPanel from "./ShoppingListPanel";

class MainPanel extends React.Component {
    render() {
      return <div className="columns box">
        <h1>Main Panel</h1>
        <ShoppingListPanel />
        <RecipePanel />
      </div>
      

    }
  }

export default MainPanel;