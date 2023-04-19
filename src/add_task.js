import React from "react";
import { useState } from "react";
import useTaskValue from "./task-list";

function Add_task(){
    // var task=['complete my work',];
    var content='';    

    const [tasks,AddTask] = useState('');
    function changeContent(e){
       content = e.target.value;
    }
    function handleSubmit(e){
        // task.push(content);
        // console.log(task)
        
    }
    // const arrayDataItems = task.map((i) => console.log(i));
    // console.log(arrayDataItems)
    
    return(

        <div>
            <input className="input" onChange={ (e) => {
                AddTask(e.target.value); 
                console.log( content,"content ", e.target.value, "e" )
                }}>
            </input>

            <button type="submit" onClick={setValue} >Add</button>
            <div>
                {getContentValue()}
            </div>
        </div>
    )
}

export default Add_task;