import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';

function App(){
  const [notes,addFun] = useState([]);

  function addList(input){
    console.log(input);
    addFun(prev =>{
      console.log(prev);
      return [...prev,input];
    })
  }

  useEffect(() => {
    console.log("inside useEffect");
        axios.get(`http://localhost:5000`)
        .then (res => {
            addFun(res.data);
        })
        .catch(err => {
            console.log(err);
        })
  },[]);

  function delList(id){
    console.log(id);
    addFun(prev =>{
      return prev.filter(function(note,index){
        return index !== id;
      });
    });
  }

  return(
    <div>
    <Header></Header>
    <CreateArea onclick={addList}/>
    {
      notes.map((note,index)=>(
        <Note key={index} _id={note._id} id={index} title={note.title} content={note.content} delete={delList}></Note>))
    }
    <Footer></Footer>
    </div>
  );
}

export default App;
