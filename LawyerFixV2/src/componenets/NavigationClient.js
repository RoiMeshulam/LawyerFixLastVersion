import React from 'react'
import { useState } from 'react';
import { onValue, ref , set,getDatabase,child,get} from "firebase/database";



const NavigationClient = ( props ) => {
    const [defaultScreen,setDefaultScreen]= useState(true);
    

    const GetAllUsersFromDB = React.useCallback(() => {
        if (true) {
            const dbRef = ref(getDatabase());
            get(child(dbRef, `Users/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log("allusers")
                    console.log(snapshot.val())
                    props.setAllUsers(snapshot.val());
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
                // console.log(d)
                props.setAllCases(d)
                
                
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
                // console.log(snapshot.val());
                props.setCasesType(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}, [true])


const GetAllClientReqFromDB = React.useCallback(() => {
    if (true) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `ClientReq/`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                const b = Object.entries(snapshot.val())
                console.log("check entries")
                console.log(b)
                const c = b.map((item) => item[1])
                console.log(c)
                const d = c.filter(item=> item.ClientUID === props.userUID);
                console.log(d)
                const lawyerUID = d[0].LawyerUID
                props.setHandlingLawyer(lawyerUID)
                // console.log(lawyerUID)
                // console.log(props.allUsers)
                GetAllUsersFromDB()
                props.setClientReq(d);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    }, [true])

    if(defaultScreen){
        console.log("defaultscreenn")
        GetAllCasesFromDB()
        GetAllCaseTypeFromDB()
        GetAllUsersFromDB()
        GetAllClientReqFromDB()
        setDefaultScreen(false)
    }

  return (
    <div className='container-btn'>
        <button className="btn-group" onClick={(e)=> {
          props.onClick(e,0)
          GetAllCasesFromDB()
        }
          
          }
          >
          התיקים שלי
        </button>
        <button className="btn-group" onClick={(e)=> {
          props.onClick(e,1)
          GetAllClientReqFromDB()

        //   GetAllCasesFromDB()
        }
        
         }>
          יצירת קשר
        </button>

  </div>
  )
}

export default NavigationClient
