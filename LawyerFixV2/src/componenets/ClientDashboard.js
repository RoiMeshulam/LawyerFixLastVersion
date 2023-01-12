
import * as React from 'react';
import '../index.css';
import PreviewCompClient from './PreviewCompClient';
import { onValue, ref, set, getDatabase, child, get } from "firebase/database";
import UserView from './UserView';

const ClientDashboard = (props) => {

  //   all the cases of the specific user
  const [allCases, setAllCases] = React.useState([])
  const [allClientReq, setClientReq] = React.useState([])
  const [allCasesType, setAllCasesType] = React.useState([])
  const [handlingLawyer, setHandlingLawyer] = React.useState("")
  const [allUsers, setAllUsers] = React.useState([]);
  const [flag, setFlag] = React.useState(true)
  const [myUserName, setMyUserName] = React.useState([])


  const GetAllUsersFromDB = React.useCallback(() => {
    if (true) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Users/`)).then((snapshot) => {
        if (snapshot.exists()) {
          //my current username
          const myUsernamevalue = Object.entries(snapshot.val())
          const myUsername = myUsernamevalue.filter(item => item[0] === props.userUID)
          console.log(myUsernamevalue)
          console.log(myUserName)
          setMyUserName(myUsername[0][1])
          setAllUsers(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [true])

  const GetAllCasesFromDB = React.useCallback(() => {
    if (true) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Cases/`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          const b = Object.entries(snapshot.val())
          console.log(b)
          const c = b.map((item) => item[1])
          console.log(c)
          const d = c.filter(item => item.ClientUID === props.userUID);
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

  if (flag) {
    GetAllCasesFromDB()
    GetAllCaseTypeFromDB()
    GetAllUsersFromDB()
    setFlag(false)
  }

  return (

    <div>
      <UserView myUserName={myUserName} setConnected={props.setConnected} setUserUID={props.setUserUID} setloginType={props.setloginType} />
      <PreviewCompClient allCases={allCases} clientReq={allClientReq} allCaseTypes={allCasesType} handlingLawyer={handlingLawyer} allUsers={allUsers} loginType={props.loginType} />
    </div>

  )
}

export default ClientDashboard
