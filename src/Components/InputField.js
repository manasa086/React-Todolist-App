import React,{Fragment,useState} from "react";


const InputField=(props)=>{

    const [inputValue,setInputValue]=useState("");
    
    const updateInputField=(event)=>{
        setInputValue(event.target.value);
    }

    const addNewTask=()=>{
        if(inputValue)
            props.addTask(inputValue);
        setInputValue("");
    }

    return (
        <Fragment>
            <input type="text" onChange={updateInputField} value={inputValue} placeholder="Enter a new task"></input>
            <button onClick={addNewTask}>+</button>
        </Fragment>
    )
}




export default InputField;