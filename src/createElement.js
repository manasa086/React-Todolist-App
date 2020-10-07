import React from "react";
import ReactDOM from "react-dom";

const H1Tag = React.createElement("h1", { id: "title" }, "Hello, React!!");

const DivContainer = React.createElement("div", { className: "container" }, React.createElement("p", {}, "React ELement"));
/*<div class='container'>
<ul>
<li></li>
</ul>
</div>*/

const shoppingList = ["2 eggs", "milk", "bread"]


const ListContainer = React.createElement("div", { className: "container" }, React.createElement("ul", {},
    shoppingList.map((item, index) => {
        return React.createElement("li", { key: index }, item);
    })
))


const RootElement = document.querySelector("#root");

ReactDOM.render(ListContainer, RootElement);