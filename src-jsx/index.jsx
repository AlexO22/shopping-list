const React = require("react");
const ReactDOM = require("react-dom")
import MainPanel from "./MainPanel";


const hello = <div>Hello</div>;

ReactDOM.render(<MainPanel/>, document.getElementById("main-section"));

fetch('/test')
    .then(function (response) {
        return response.json();
    }).then(function (text) {
        console.log('GET response:');
        console.log(text.greeting); 
    });