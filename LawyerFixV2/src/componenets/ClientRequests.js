import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { onValue, ref , set,getDatabase,child,get} from "firebase/database";
import { display } from '@mui/system';
import styled from '@emotion/styled';
import TableDescription from './TableDescription';


const Container = styled(Collapse)({

  ".MuiCollapse-wrapper":{
    width: 100,
    display: 'inline'
  }
  })


function Row(props) {
    
    const { request , handlingLawyer} = props;
    const [open, setOpen] = React.useState(false);
      
    //   let descriptionKey=0
    //   console.log(descriptions[index])
    let ChatID = -1
    const b = request.Chat
    console.log(b)
    console.log("mappppppp")
    const c = Object.entries(b)
    console.log(c)
    const d= c.map((item)=>(item[1]))
    console.log(d)
    // d.map((message)=>(
    //   console.log(message.Role),
    //   console.log(message.message)

    // ))
    // b.map((item)=>(
    //   console.log(item)

    // ))
    


    
    return (
      
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell align="right">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="right" component="th" scope="row">
            {request.Topic}
          </TableCell>
          <TableCell align="right">
            {handlingLawyer}
          </TableCell>
          
          
        </TableRow>
        <TableRow>
          {/* <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}> */}
            <Container in={open} timeout="auto" unmountOnExit>
            {    
              d.map((message)=>(
                console.log(message.Role),
                console.log(message.message),
                <TableDescription index={message.Role} text={message.message}/>
          
              ))
                
            }
          
            <div>
              <button className="btn-casetype" style={{ marginTop: '25px', width: '35%' , marginRight: '70%' ,marginBottom:'20px' }}>הוסף תגובה</button>
            </div>

                
            </Container>
            
         
        </TableRow>
      </React.Fragment>
    );
  }




const ClientRequests = (props) => {
    let requestID = -1
    

    return (
      <div style={{ display: 'grid', textAlign: 'center' }}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="right">בקשה</TableCell>
                <TableCell align="right">עורך דין מטפל</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
    
              {    
              props.Requests.map((request) => (   
                requestID= requestID+1,
                console.log("key check:"+requestID),
                console.log(request),
                <Row key={requestID} request={request} handlingLawyer={props.handlingLawyer}/> 
              ))
              }
            </TableBody>
          </Table>
        </TableContainer>

         <div>
            <button className="btn-casetype" style={{ marginTop: '25px', width: '25%'  }}>צור בקשה חדשה</button>
          </div>       
        
      </div>
      



    );
  }

export default ClientRequests