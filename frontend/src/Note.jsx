import React,{useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VerticalModal from "./modal";
import axios from 'axios';

function Note(props){
  const [modalShow, setModalShow] = useState(false);

  function delNote(event){
    props.delete(props.id);
    axios.delete(`/${props._id}`);
    event.preventDefault();
  }

  return(
    <div className ="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={delNote} name="deleteListId"><DeleteIcon/></button>
      <button name="editListId" onClick={() =>{console.log(modalShow);setModalShow(true)}}><EditIcon/></button>
      <VerticalModal notetitle={props.title} notecontent={props.content} show={modalShow} _id={props._id} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Note;
