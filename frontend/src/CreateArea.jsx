import React,{useState} from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

function CreateArea(props) {
  const [inputtext,inputfn] = useState({
    title:"",
    content:""
  });

  const [hideTitle,titleFn] = useState({
    rows : 1,
    hide : true
  });

  function addInput(event){
    const {name,value} = event.target;
    inputfn(prev =>{
      return {...prev,[name]:value}
    })
    console.log(inputtext);
  }

  function addNote(event){
    props.onclick(inputtext);
    if(!inputtext.title || !inputtext.content ) return
    axios.post("/api",inputtext);

    inputfn({
      title:"",
      content:""
    });
    event.preventDefault();
  }

  function showTitle(){
    titleFn({
      title : false,
      rows : 3
    })
  }

  return (
    <div>
      <form className="create-note" onSubmit={e => { e.preventDefault(); }}>
        <input type={hideTitle.hide?"hidden":"none"} onChange={addInput} name="title" value={inputtext.title} placeholder="Title" style={{fontWeight: "bold"}}/>
        <textarea onClick={showTitle} onChange={addInput} name="content" value={inputtext.content} placeholder="Take a note..." rows={hideTitle.rows} />
        <Zoom in={!hideTitle.hide}>
          <Fab onClick={addNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
