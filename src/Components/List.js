import React,{Fragment} from "react";
import But from "./But";
import "../styles.css";

const List=(props)=>{


    
    return (
            <ul>
               
                
    

            {props.items.map((task,index)=>{
                const onListClick=()=>{
                   props.toggleTask(index);
                }
                const onDeleteTask=()=>{
                    props.deleteTask(index,task.name);
                }

                  return (<Fragment key={index}><li onClick={onListClick}key={index}>{task.name}{task.isCompleted? <i>:&nbsp;&nbsp;Yes</i>:<i>:&nbsp;&nbsp;No</i>}
                  &nbsp;&nbsp;
                  </li><span onClick={onDeleteTask}>Delete Task</span><But buttons={props.buttons} keys={index} buttonClick={props.buttonClick}></But></Fragment>)
            })}
        </ul>
    );
}



export default List