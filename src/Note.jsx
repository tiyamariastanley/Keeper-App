import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

function Note(props){
  function delNote(event){
    props.delete(props.id);
    axios.delete(`http://localhost:5000/${props._id}`);
    event.preventDefault();
  }

  return(
    <div className ="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={delNote} name="deleteListId"><DeleteIcon/></button>
    </div>
  );
}

export default Note;
