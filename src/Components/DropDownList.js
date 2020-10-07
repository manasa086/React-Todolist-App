import React,{Fragment,useState} from "react";



const DropDownList=(props)=>{

    const [DropDownValue,setInputValue]=useState("");
    
    const handleChange=(event)=>{
        
        setInputValue(event.target.value);
    }
    const FilterData=()=>{
        if(DropDownValue)
            props.FilterData(DropDownValue);
        setInputValue("");
    }

    return (
        
        <Fragment>
            
        <h1>Filter Tasks</h1>
        <select onChange={handleChange}>
            <option value="default">--Select Option for Filtering--</option>
            <option value="Completed Tasks">Completed Tasks</option>
            <option value="Not Completed Tasks">Not Completed Tasks</option>
            <option value="High Priority Tasks">High Priority Tasks</option>
            <option value="Medium Priority Tasks">Medium Priority Tasks</option>
            <option value="Low Priority Tasks">Low Priority Tasks</option>
        </select>
        <button onClick={FilterData}>Filter Submit</button>
        </Fragment>
    )
   
    
}


export default DropDownList;