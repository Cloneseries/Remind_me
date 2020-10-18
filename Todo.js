//rfce react functional componant expo
import './Todo.css'
import React from 'react'
import { ListItem, List, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core';

function Todo(props) {
    return (
        //<div>
        <List className="todo_list">
        <ListItem>
            <ListItemAvatar>
                
            </ListItemAvatar>
            <ListItemText primary={props.text} secondary ="Deadline⏰" />
        </ListItem>
        </List>
        //</div>
    ) 
}

export default Todo

