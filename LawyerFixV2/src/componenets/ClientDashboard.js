
import * as React from 'react';
import '../index.css';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import NavigationClient from './NavigationClient';
import PreviewCompClient from './PreviewCompClient';
import { onValue, ref , set,getDatabase,child,get} from "firebase/database";




const ClientDashboard = (props) => {

  // const previewComponent
  
  const [previewIndex,setPreviewIndex] = React.useState(0);
//   all the cases of the specific user
  const [allCases, setAllCases] = React.useState([])
  const [allClientReq,setClientReq] = React.useState([])
  const [allCasesType,setAllCasesType] = React.useState([])
  const [handlingLawyer,setHandlingLawyer] = React.useState("")
  const [allUsers, setAllUsers] = React.useState([]);
  const [flag , setFlag] = React.useState(true)
  

  const GetAllUsersFromDB = React.useCallback(() => {
    if (true) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `Users/`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log("allusers")
                console.log(snapshot.val())
                setAllUsers(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}, [true])

const GetAllCasesFromDB= React.useCallback(() => {
if (true) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Cases/`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            const b = Object.entries(snapshot.val())
            console.log(b)
            const c = b.map((item) => item[1])
            console.log(c)
            const d = c.filter(item=> item.ClientUID === props.userUID);
            setAllCases(d)
            
            
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
}, [true])


const GetAllCaseTypeFromDB = React.useCallback(() => {
if (true) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `CaseType/`)).then((snapshot) => {
        if (snapshot.exists()) {
          setAllCasesType(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
}, [true])

if(flag){
  GetAllCasesFromDB()
  GetAllCaseTypeFromDB()
  setFlag(false)
}
  



  // //OnClick in Navigation conponent -> change the previewIndex 
  // const changeIndex = (e,index) => {
  //   e.preventDefault();
  //   setPreviewIndex(index);
  // }
  return (
    
    <div>
        {/* <Grid container spacing={1} >
            <Grid item xs={9}>
              <Item>
                 <PreviewCompClient preview={previewIndex} allCases={allCases} clientReq={allClientReq} allCaseTypes={allCasesType} handlingLawyer={handlingLawyer} allUsers = {allUsers} />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <NavigationClient onClick={changeIndex} setClientReq={setClientReq} setAllCases={setAllCases} setCasesType={setAllCasesType} userUID={props.userUID} setHandlingLawyer={setHandlingLawyer} allUsers={allUsers} setAllUsers={setAllUsers} />
              </Item>
            </Grid>
          </Grid> */}


          <PreviewCompClient allCases={allCases} clientReq={allClientReq} allCaseTypes={allCasesType} handlingLawyer={handlingLawyer} allUsers = {allUsers}  loginType={props.loginType}/>


    </div>

  )
}

export default ClientDashboard
