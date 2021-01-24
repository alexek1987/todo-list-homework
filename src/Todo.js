import React, { useState, useEffect } from 'react';
import { Input, Modal ,Button, List, ListItem, ListItemText } from '@material-ui/core';
import './Todo.css';
import db from "./firebase"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import { useQuote } from "./useQuote";


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function Todo(props) {

  const [quote, setQuote] = useState({});
  const customStyle = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection('todos')
    .doc(props.todo.id)
    .set({
      todo: input
    }, { merge: true });
    setOpen(false);
  }


  return (
    <>

    <Modal
      open={open} onClose={e => setOpen(false)} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
      <div className={customStyle.paper}>
        <h4>Update TODO</h4>
        <p> {props.todo.todo}</p>
        <div className="update__todo">
          <form>
            <Input
              placeholder="Update..."
              value={input}
              onChange={event => setInput(event.target.value)}
            />
          </form>
          <Button
            variant="contained"
            color="secondary"
            onClick={updateTodo}>Confirm
          </Button>
        </div>
      </div>
    </Modal>

    <List className="todo__list">
      <ListItem className="todo__li">
        <ListItemText
          primary={props.todo.todo}
          secondary={quote.text + '- ' + quote.author}/>
      </ListItem>
      <Button
        variant="contained"
        color="primary"
        onClick={e => setOpen(true)}
        >
        Update Todo
      </Button>
        <DeleteForeverIcon
          onClick={event =>
          db.collection('todos')
          .doc(props.todo.id)
          .delete()}
        />
   </List>
   </>
   )
}

export default Todo;

