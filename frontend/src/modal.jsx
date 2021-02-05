import React,{useState} from "react";
import { Modal } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios';

function VerticalModal(props) {
  const [newText,updateFun] = useState({
    title:props.notetitle,
    content:props.notecontent
  });

  console.log(newText+","+props.notecontent);
  function changeInput(event){
    const {name,value} = event.target;
    updateFun(prev =>{
      return {...prev,[name]:value}
    })
    console.log(newText);
  }

  function updateNote(event){
    if(!newText.title || !newText.content ) return;
    axios.put(`/${props._id}`,newText);
    window.location.reload();
    updateFun({
      title:props.notetitle,
      content:props.notecontent
    })
    event.preventDefault();
  }

  return (
    <Modal
      {...props}
      dialogClassName="modal-30w"
      centered
    >
    <Modal.Header closeButton>
    <form className="create-note" onSubmit={e => { e.preventDefault(); }}>
      <input className="modalTextArea" onChange={changeInput} name="title" value={newText.title} style={{fontWeight: "bold"}}/>
      <textarea className="modalTextArea" onChange={changeInput} name="content" value={newText.content}/>
      <Fab onClick={updateNote}><CheckIcon/></Fab>
    </form>
    </Modal.Header>
    </Modal>
  );
}


export default VerticalModal;
