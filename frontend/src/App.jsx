import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';
import Loading from "./loading";

function App(){
  const [notes,addFun] = useState([]);
  const [loading,loadingFun] = useState(true);
  const [error,errorFun] = useState();

  function addList(input){
    console.log(input);
    addFun(prev =>{
      console.log(prev);
      return [...prev,input];
    })
  }

  useEffect(() => {
    console.log("inside useEffect");
        axios.get("/api")
        .then (res => {
            addFun(res.data);
            console.log(notes);
            loadingFun(false);
        })
        .catch(err => {
            console.log(err);
            errorFun(err);
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
    <div>
    { loading?<Loading></Loading>:(
                 error?<p>{error}</p>
                 :
      notes.map((note,index)=>(
        <Note key={index} _id={note._id} id={index} title={note.title} content={note.content} delete={delList}></Note>
      ))
    )
    }
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
