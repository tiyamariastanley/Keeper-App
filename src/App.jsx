import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
  const [notes,addFun] = useState([]);

  function addList(input){
    console.log(input);
    addFun(prev =>{
      console.log(prev);
      return [...prev,input];
    })
  }

  function delList(id){
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
        <Note key={index} id={index} title={note.title} content={note.content} delete={delList}></Note>))
    }
    <Footer></Footer>
    </div>
  );
}

export default App;
