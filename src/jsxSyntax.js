import React from "react";
import ReactDOM from "react-dom";
const name="Manasa";

const H1Tag = <h1 id = "title" > Hello,
    {name} </h1>;

const divContainer=(<div className='container'><p>Hello Manasa</p></div>); 

const shoppingList = ["2 eggs", "milk", "bread"]

const ListContainer=(
    <div className="container">
        <ul>
            {shoppingList.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
) 


const RootElement = document.querySelector("#root");

ReactDOM.render(ListContainer, RootElement);