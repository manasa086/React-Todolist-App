
import React,{Fragment} from "react";
import ReactDOM from "react-dom";
import "../styles.css";

const Status=(props)=> {
    if(props.tasks.length>0)
    {
    let CompletedTasks=0;
    let NotCompletedTasks=0;   
    let HighPrioritycount=0;
    let HighPriority=[];
    let MediumPrioritycount=0;
    let MediumPriority=[];
    let LowPrioritycount=0;
    let LowPriority=[];
    return (
        
        <ul>

        <ul><span>Completed Tasks:</span>
        {props.tasks.map((task,index)=>{
            if(task.isCompleted)
            {
                CompletedTasks++;
                return <li key={index}>{task.name}{task.isCompleted?<i>:&nbsp;&nbsp;Yes</i>:<i>:&nbsp;&nbsp;No</i>}</li>
            }
        })}
        </ul>
        <p></p>
        <ul><span>Number of Completed Tasks</span>
        <li>{CompletedTasks}</li>
        </ul>
        <p></p>
        <ul><span>Not Completed Tasks:</span>
        {props.tasks.map((task,index)=>{
            if(!task.isCompleted)
            {
                NotCompletedTasks++;
                return <li key={index}>{task.name}{task.isCompleted?<i>:&nbsp;&nbsp;Yes</i>:<i>:&nbsp;&nbsp;No</i>}</li>
            }
        })}
        </ul>
        <p></p>
        <ul><span>Number of Not Completed Tasks</span>
        <li>{NotCompletedTasks}</li>
        </ul>
        <p></p>
        <ul><span>High Priority Tasks</span>
        {
            props.ButtonsText.map((button,butindex)=>{
              button.map((but,index)=>{
                  if(but.name=="High")
                  {
                      
                      if(but.attr=="disabled")
                      {
                        let taskname=props.tasks[butindex].name;
                        let taskisCompleted=props.tasks[butindex].isCompleted;
                        HighPriority[HighPrioritycount]=[taskname];
                       
                        HighPrioritycount++;
                      }
                  }
              })  
            })
            

            
        }
        
        {
            HighPriority.map((name,index)=>{
                return <li key={index}>{name}</li>
            })
        }

        </ul>
        <p></p>
        <ul><span>Number of High Priority Tasks</span>
        <li>{HighPrioritycount}</li>
        </ul>
        <p></p>
        <ul><span>Medium Priority Tasks</span>
        {
            props.ButtonsText.map((button,butindex)=>{
              button.map((but,index)=>{
                  if(but.name=="Medium")
                  {
                      
                      if(but.attr=="disabled")
                      {
                        let taskname=props.tasks[butindex].name;
                        let taskisCompleted=props.tasks[butindex].isCompleted;
                        MediumPriority[MediumPrioritycount]=[taskname];
                        // console.log(MediumPriority)
                        MediumPrioritycount++;
                      }
                  }
              })  
            })
            

            
        }
        
        {
            MediumPriority.map((name,index)=>{
                return <li key={index}>{name}</li>
            })
        }

        </ul>
        <p></p>
        <ul><span>Number of Medium Priority Tasks</span>
        <li>{MediumPrioritycount}</li>
        </ul>
        <p></p>
        <ul><span>Low Priority Tasks</span>
        {
            props.ButtonsText.map((button,butindex)=>{
              button.map((but,index)=>{
                  if(but.name=="Low")
                  {
                      
                      if(but.attr=="disabled")
                      {
                        let taskname=props.tasks[butindex].name;
                        let taskisCompleted=props.tasks[butindex].isCompleted;
                        LowPriority[LowPrioritycount]=[taskname];
                       
                        LowPrioritycount++;
                      }
                  }
              })  
            })
            

            
        }
        
        {
            LowPriority.map((name,index)=>{
                return <li key={index}>{name}</li>
            })
        }

        </ul>
        <p></p>
        <ul><span>Number of Low Priority Tasks</span>
        <li>{LowPrioritycount}</li>
        </ul>
        <p></p>
        </ul>
        
    )
    }
    return <span>No Tasks to Display</span>
}

export default Status