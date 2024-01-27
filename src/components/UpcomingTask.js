import React, { useState } from 'react';
import DeleteCard from './DeleteCard.js';




const UpcomingTask = () => {


  
    // const tasks = JSON.parse(localStorage.getItem("Tasks"));

    
    const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem("Tasks")));


    const deleteTask = (id)=>{
        setTasks(
          tasks.filter((t)=>(
            t.id===id?false:true
          ))
        )
      };
      const updateTask = (id)=>{
        setTasks(
          tasks.map((t)=>(
            t.id===id? {...t,complete:true} : t
          ))
        )
      };
    return (
    //     <div className="cardSection">
    //   {
    //     tasks.map((t)=>(
    //       <Card title={t.title} description= {t.description} key={t.id} 
    //       delete={()=>deleteTask(t.id)} 
          
    //        />
    //     ))
    //   }
    //  </div>
    <>
    {tasks.length > 0?
    tasks.map((t)=>(
      
        <DeleteCard title={t.title} description={t.description} key={t.id}
        delete={()=>deleteTask(t.id)} 
        update = {()=> updateTask(t.id)}
        complete={t.complete}
        />
    )):<h2>No Items</h2>}
  
    </>

    );
};

export default UpcomingTask;