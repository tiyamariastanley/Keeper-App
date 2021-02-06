import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';

function App(){
  const [notes,addFun] = useState([]);
  const [isLoading,load] = useState(true);

  function addList(input){
    console.log(input);
    addFun(prev =>{
      console.log(prev);
      return [...prev,input];
    })
  }

  useEffect(() => {
    console.log("inside useEffect");
        axios.get(`/`)
        .then (res => {
            addFun(res.data);
        })
        .then(response => {
        load(false);
        console.log("response :", response);
        })
        .catch(err => {
            load(false);
            console.log(err);
        })
        setTimeout(
        function() {
         load(false);
        },3000);
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
    {isLoading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div>
          <CreateArea onclick={addList}/>
          {
            notes.map((note,index)=>(
              <Note key={index} _id={note._id} id={index} title={note.title} content={note.content} delete={delList}></Note>))
          }
        </div>)}
    <Footer></Footer>
    </div>
  );
}

export default App;
