import React,{Fragment} from "react";

var attribute="";

var buttons=[];

const But=(props)=>{
    
    var buttons=props.buttons[props.keys];
	if(buttons.length>0)
    {


    return (<Fragment>
        {
              
            
            props.buttons[props.keys].map((each,index)=>{
            const buttonclick=()=>{
                props.buttonClick(index,props.keys);
            }
            
            
            return <button onClick={buttonclick} key={index} disabled={each.attr==="enabled"?(attribute):!attribute}>{each.name}</button>
            })
            
        }
    </Fragment>);
	}
	else
    {
        return <p></p>;
    }
    
}




export default But;