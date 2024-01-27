import Header from './components/Header.js';
import CustomInput from './components/CustomInput.js';
import CustomButton from './components/CustomButton.js';
import Card from './components/Card.js';
import { useEffect, useState } from 'react';

const getLocalitems = ()=>{
  let list = localStorage.getItem("Tasks");
  if(list){
    return JSON.parse(localStorage.getItem("Tasks"));
  }else{
    return [];
  }
}

function Home() {

  const [add,setAdd] = useState(false);
  const handleInput = (e)=>{
    e.preventDefault();
    setAdd(!add);
  };

  const [tasks,setTasks] = useState(getLocalitems());
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const addToCard = ()=>{
    const id = tasks.length === 0?1:tasks.length+1;
    const taskDetail = {
      id:id,
      title:title,
      description:description,
      complete:false,
    };
    setTasks([...tasks,taskDetail]);
  };

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
  
  useEffect(()=>{
    localStorage.setItem("Tasks",JSON.stringify(tasks))
  },[tasks])

  return (
    <>

<div className="main">
     <div className="inputSection">
      <Header click= {handleInput}/>
      {add===true? 
      <>
      <CustomInput value={title} placeholder="Enter Task" task="Title" change = {(e)=> setTitle(e.target.value)}/>
      <CustomInput value={description} placeholder="Enter Description" task="Description" 
      change = {(e)=> setDescription(e.target.value)}/>

      <div className="btnWrapper">
      <CustomButton name = 'Save Task' color='white' bg='#1877F2' click={addToCard}/>
      <CustomButton name = 'Cancel' color='white' bg='red' click={()=> {setTitle('');setDescription('')}}/>
     </div>
      </>:null
      }

     </div>

     <div className="cardSection">
      {
        tasks.map((t)=>(
          <Card title={t.title} description= {t.description} key={t.id} 
          delete={()=>deleteTask(t.id)} 
          complete={t.complete}
          update = {()=> updateTask(t.id)}
           />
        ))
      }
     </div>

      
    </div>
    </>
  );
}

export default Home;
