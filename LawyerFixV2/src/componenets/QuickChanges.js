import React, { useEffect, useMemo, useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { getDatabase, ref, child, get, set, update, remove } from "firebase/database";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styled from '@emotion/styled';
import { Select, MenuItem } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import Message from './Message';
import { ContactSupportOutlined } from '@mui/icons-material';
import NewMessage from './NewMessage';


const DialogR = styled(Dialog)({

  ".MuiPaper-root":{
    direction:'rtl'
  }
  })

const FormControler = styled(FormControl)({

  ".MuiFormGroup-root": {
    display: 'flow-root',
    marginTop: '10px'
  }
})


const QuickChanges = (props) => {
  const [openQuickEdit, setOpenQuickEdit] = React.useState(false);
  const [openChat, setOpenChat] = React.useState(false);
  const [currStage, setCurrStage] = React.useState(props.currCaseDetails.CurrStage);
  const [statusValue, setStatusValue] = React.useState(props.currCaseDetails.Status);
  const [messages,setMessages] = React.useState(props.currCaseDetails.Chat)
  const [newLaywerMessage , setNewLaywerMessage] = useState('');

useEffect(() => {
  console.log('mess in useEffect')
  if(newLaywerMessage !== '') {
    console.log(newLaywerMessage)
    writeMessage()
    console.log('mess in if')
    setMessages([...messages, newLaywerMessage])
    setNewLaywerMessage('')
  }
},[newLaywerMessage])

  const handleChangeStatus = (event) => {
    setStatusValue(event.target.value);
  };
  const handleNewCurrStage = (event) => {
    setCurrStage(event.target.value);
  };
  const handleOpenQuickEdit = () => {
    setOpenQuickEdit(true);
  };
  const handleCloseQuickEdit = () => {
    setOpenQuickEdit(false);
  };

  const handleOpenChat = () => {
    setOpenChat(true);
  };
  const handleCloseChat = () => {
    setOpenChat(false);
  };

  const writeMessage = () => {
    const db = getDatabase();
    let plaster = 'Cases/' + props.currCaseDetails.CaseNum+ '/Chat';
    const len = messages.length
    update(ref(db, plaster), {
        [len]: {Role: newLaywerMessage.Role , Message: newLaywerMessage.Message}
    })
    // setNewLaywerMessage({Role:'Lawyer', Message:'הודעה חדשה לבדיקה'})
  }


  const randomLog = () => {
    console.log("Hello World");
  };
  const caseTypeList = Object.entries(props.currCaseTypeDetails)
  const temp = caseTypeList.filter(item => item[0] == props.currCaseDetails.CaseType)
  console.log(temp)
  function removeCase() {
    const db = getDatabase();
    let plaster = 'Cases/' + props.CaseNum;
    remove(ref(db, plaster))
    props.setRenderAllCases(true)
  }
  function updateCase() {
    const db = getDatabase();
    let plaster = 'Cases/' + props.currCaseDetails.CaseNum;
    update(ref(db, plaster), {
        CurrStage: Number(currStage),
        Status: Number(statusValue),
    })
    handleCloseQuickEdit()
    alert("תיק עודכן בהצלחה")
  }


 
  console.log({messages})
  return (
    <div>
       {props.loginType !== "User" &&
      <Tooltip title="ערוך תיק">
        <Fab color='#523A28' aria-label="edit" onClick={handleOpenQuickEdit} style={{marginLeft:'10px'}}>
          <EditIcon />
        </Fab>
      </Tooltip>}
      {props.loginType !== "User" &&
      <Tooltip title="מחק תיק">
        <Fab color='#523A28' aria-label="remove" onClick={removeCase} style={{marginLeft:'10px'}}>
          <DeleteIcon />
        </Fab>
      </Tooltip>}
      <Tooltip title="הודעות">
        <Fab color='#523A28' aria-label="massages" onClick={handleOpenChat} >
          <ChatIcon />
        </Fab>
      </Tooltip>

      <DialogR open={openQuickEdit} onClose={handleCloseQuickEdit}>
        <DialogTitle>עריכה מהירה</DialogTitle>
        <DialogContent>
          <div>
            <label>מספר תיק</label>
            <input type='text'
              className='input'
              id="casenum"
              defaultValue={props.currCaseDetails.CaseNum}
              disabled
            />
          </div>

          <div>
            <label>שם הלקוח</label>
            <input type='text'
              className='input'
              id="clientname"
              label="שם לקוח"
              defaultValue={props.currCaseDetails.ClientName}
              disabled
            />
          </div>

          <div>
            <label>סוג התיק</label>
            <input type='text'
              className='input'
              id="caseType"
              label="סוג התיק"
              defaultValue={props.currCaseDetails.CaseType}
              disabled

            />
          </div>


          <div style={{ marginTop: '10px' }}>

            <label style={{ fontSize: '17px', fontWeight: 'bold', color: '#523A28', marginLeft: '12px' }}>שלב נוכחי</label>
            <Select
              sx={{ width: '20%', height: '45px', borderRadius: '4px', border: '1px solid rgb(208, 180, 159)' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currStage}
              label="שלב נוכחי"
              onChange={handleNewCurrStage}
            >
              {/* {temp[0][1].map((stage, index) => (<MenuItem key={index} value={index}>{index}</MenuItem>))} */}
            </Select>
          </div>

          <FormControler >
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={statusValue}
              onChange={handleChangeStatus}
            >
              <label style={{ fontSize: '17px', fontWeight: 'bold', color: '#523A28', marginLeft: '12px' }}>סטטוס תיק</label>
              <FormControlLabel value="1" control={<Radio color='success' />} label="פתוח" />
              <FormControlLabel value="0" control={<Radio color='error' />} label="סגור" />
            </RadioGroup>
          </FormControler>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseQuickEdit}>ביטול</Button>
          <Button onClick={updateCase}>שלח</Button>
        </DialogActions>
      </DialogR>


      <DialogR open={openChat} onClose={handleCloseChat}>
        <DialogTitle>צא'ט</DialogTitle>
        <DialogContent>
        {     
               messages.length > 1 ? 
                messages.map((message)=>(
                  console.log(message.Role),
                  console.log(message.message),
                  <Message name={message.Role} text={message.Message}/>
                  
                ))


                : <p>אין הודעות זמינות</p>
              
              
                
            }
            {<div>
              <NewMessage setNewLaywerMessage={setNewLaywerMessage} loginType={props.loginType}/>
            </div>
              
              }

        </DialogContent>
        <DialogActions>
          <Button >נקה צא'ט</Button>
        </DialogActions>
      </DialogR>




    </div >
  )
}

export default QuickChanges