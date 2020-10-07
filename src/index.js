import React, { Fragment,useState } from "react";
import ReactDOM from "react-dom";
import Title from "./Components/Title";
import List from "./Components/List";
import InputField from "./Components/InputField";
import Status from "./Components/Status";
import DropDownList from "./Components/DropDownList";
import Filter from "./Components/Filter";

const App=(props)=>{
    var [ButtonsText,setButtons]=useState([[{name:"High",
    attr:"enabled"},{name:"Medium",attr:"enabled"},{name:"Low",attr:"enabled"}],[{name:"High",
    attr:"enabled"},{name:"Medium",attr:"enabled"},{name:"Low",attr:"enabled"}],[{name:"High",
    attr:"enabled"},{name:"Medium",attr:"enabled"},{name:"Low",attr:"enabled"}]]);
    var [tasks,setTasks]=useState([{name:"Buy NewsPaper",isCompleted:false},
    {name:"Car Wash",isCompleted:true},
    {name:"Buy Groceries",isCompleted:false}]);
    var[FilteredData,setFilterData]=useState("");
// window.tasks=tasks;
// window.setTasks=setTasks;
    
const toggle=(toggleindex)=>{
   
    setTasks(
        tasks.map((task,index)=>{
            if(toggleindex===index)
            {
                return {
                    ...task,
                    isCompleted:!task.isCompleted,
                }
            }

            return task;
        })
    );
    
}
let filtereddata="";
const FilterData=(filterdata)=>{
    filtereddata=filterdata;
	console.log(filtereddata)
   if(filtereddata=="Completed Tasks")
   {
       setFilterData(tasks.filter((task)=>{
           return task.isCompleted===true;
       }));
   }
   if(filtereddata=="Not Completed Tasks")
   {
       setFilterData(tasks.filter((task)=>{
           return task.isCompleted===false;
       }));
   }
   if(filtereddata=="High Priority Tasks")
   {
      let buttonstext=[]; 
      let count=0;
      ButtonsText.map((button,butindex)=>{
        button.map((but,index)=>{
            if(but.name=="High")
            {
                
                if(but.attr=="disabled")
                {
                  let taskname=tasks[butindex].name;
                  let taskisCompleted=tasks[butindex].isCompleted;
                  buttonstext[count]=[taskname];
                 
                  count++;
                }
            }
        })  
      })
      //console.log(buttonstext);
      setFilterData(buttonstext.map((button)=>{
        return {name:button};
      }));
   }
   if(filtereddata=="Medium Priority Tasks")
   {
      let buttonstext=[]; 
      let count=0;
      ButtonsText.map((button,butindex)=>{
        button.map((but,index)=>{
            if(but.name=="Medium")
            {
                
                if(but.attr=="disabled")
                {
                  let taskname=tasks[butindex].name;
                  let taskisCompleted=tasks[butindex].isCompleted;
                  buttonstext[count]=[taskname];
                 
                  count++;
                }
            }
        })  
      })
      //console.log(buttonstext);
      setFilterData(buttonstext.map((button)=>{
        return {name:button};
      }));
   }
   if(filtereddata=="Low Priority Tasks")
   {
      let buttonstext=[]; 
      let count=0;
      ButtonsText.map((button,butindex)=>{
        button.map((but,index)=>{
            if(but.name=="Low")
            {
                
                if(but.attr=="disabled")
                {
                  let taskname=tasks[butindex].name;
                  let taskisCompleted=tasks[butindex].isCompleted;
                  buttonstext[count]=[taskname];
                 
                  count++;
                }
            }
        })  
      })
      //console.log(buttonstext);
      setFilterData(buttonstext.map((button)=>{
        return {name:button};
      }));
   }

}

const deleteTask=(index,taskname)=>{
    console.log(index,taskname);
    setTasks(tasks.filter((task)=>{
        return taskname!==task.name;
    }));
    // console.log(ele)
}


const addTask=(newTask)=>{
    setTasks([...tasks,{
        name:newTask,
        isCompleted:false}]);
    setButtons([...ButtonsText,[{name:"High",
    attr:"enabled"},{name:"Medium",attr:"enabled"},{name:"Low",attr:"enabled"}]]);
}
var buttontext=[]
const buttonClick=(Disableindex,keys)=>{
    setButtons(ButtonsText.map((button,index)=>{
        if(keys===index)
        {
            
            button.map((task,index)=>{
                if(Disableindex===index)
                {
                 
                    button[index]={name:button[index].name,attr:"disabled"};
                    
                }
                else
                {
                    button[index]={name:button[index].name,attr:"enabled"};
                }
                return task;
            })
            return button;
    }
    else
    {
        return button;
        
    } 
        
    }));
}

    return (
        <div>
        <InputField addTask={addTask}/>
        <Title title={props.title}/>
        
        <List items={tasks} toggleTask={toggle} buttons={ButtonsText} buttonClick={buttonClick} deleteTask={deleteTask}></List>
        <Title title="Status of all Tasks"></Title>
        <Status tasks={tasks} ButtonsText={ButtonsText}/>
        <DropDownList FilterData={FilterData}/>
        <Filter FilteredData={FilteredData} filtereddata={filtereddata} tasks={tasks} ButtonsText={ButtonsText}/>
        
    </div>
    
    )};


    ReactDOM.render(<App title="TodoList App" />,document.querySelector("#root"));