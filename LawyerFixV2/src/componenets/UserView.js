import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const UserView = (props) => {
    const logOutFromUser = () => {
        props.setConnected(false)
        props.setUserUID('')
        props.setloginType('')
      };
    return (
        <div>
            {props.myUserName ?
                <p>Hello {props.myUserName.Name}</p>
                :
                <p>Hello</p>
            }
            <Tooltip color='#f44336' title="התנתק">
                <Fab onClick={logOutFromUser} color='#f44336' aria-label="Logout">
                    <ExitToAppIcon />
                </Fab>
            </Tooltip>
        </div>
    )
}

export default UserView