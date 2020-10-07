import React,{Fragment} from "react";
import "../styles.css";

const Filter=(props)=>{
    // console.log(props.filtereddata)
    // console.log(props.FilteredData);
    if(props.FilteredData.length>0)
    {
	console.log(props.FilteredData);
    return(
        <ul>
        {props.FilteredData.map((filter,index)=>{
            return <li key={index}>{filter.name}</li>
        })}
        </ul>
    )
    }
    return "";


}


export default Filter;