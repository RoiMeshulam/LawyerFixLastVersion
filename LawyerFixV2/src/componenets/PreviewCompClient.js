import React, { useState , useEffect } from 'react'
import Title from './Title'
import CollapsibleTable from './CollapsibleTable'
import CreateNewCaseType from './CreateNewCasseType'
import AddLawyer from './AddLawyer'
import { onValue, ref , set,getDatabase,child,get} from "firebase/database";
import CaseTypeTable from './CaseTypeTable'
import CreateNewCase from './CreateNewCase'
import EditCase from './EditCase'
import ClientRequests from './ClientRequests'



const PreviewCompClient = (props) => {

    return (
        <div className='container'>
            {/* <Title title={"כל התיקים"}/> */}
            <CollapsibleTable cases={props.allCases} casesType={props.allCaseTypes} loginType={props.loginType} />
            
        </div>
        )


  
    // if(props.preview === 0){
    //     return (
    //         <div className='container'>
    //             <Title title={"כל התיקים"}/>
    //             <CollapsibleTable cases={props.allCases} casesType={props.allCaseTypes} />
                
    //         </div>
    //       )
    // }
  
    

    // else{
       
    //     // find handling lawyer name
    //     const b = Object.entries(props.allUsers)
    //     const c = b.filter(item=> item[0] === props.handlingLawyer);
    //     const d = c.map((item) => item[1])
    //     const lawyerName = d[0].Name 
    //     console.log(props.clientReq)
        
        
    //     return (
    //         <div className='container'>
    //             <Title title={"בקשות לקוח"}/>
    //             <ClientRequests Requests={props.clientReq} handlingLawyer={lawyerName}/>
                
    //         </div>
    //       )
    // }

  
}

export default PreviewCompClient