import React, { useEffect, useState } from 'react'
import Title from './Title'
import CollapsibleTable from './CollapsibleTable'
import CreateNewCaseType from './CreateNewCasseType'
import AddLawyer from './AddLawyer'
import { onValue, ref , set,getDatabase,child,get} from "firebase/database";
import CaseTypeTable from './CaseTypeTable'
import CreateNewCase from './CreateNewCase'
import EditCase from './EditCase'
import ClientRequests from './ClientRequests'
import AddUser from './AddUser'
import LawyerRequests from './LawyerRequests'
import NavigateTable from './NavigateTable'
import PreviewTable from './PreviewTable'
import NavigateRequests from './NavigateRequests'
import PreviewRequestsTable from './PreviewRequestsTable'


const PreviewComp = (props) => {
    const [previewIndex,setPreviewIndex] = React.useState(0);
    const [previewCases,setPreviewCases] = React.useState(props.allCases);
    const [previewReqIndex,setPreviewReqIndex] = React.useState(0);
    const [previewRequests,setPreviewRequests] = React.useState(props.myRequests);
    const [searchCases,setSearchCases] = React.useState([])

     //OnClick in Navigation conponent -> change the previewIndex 
  const changeIndex = (e,index) => {
    e.preventDefault();
    setPreviewIndex(index);
  }

  const changeReqIndex = (e,index) => {
    e.preventDefault();
    setPreviewReqIndex(index);
  }

  useEffect(()=>{
    setPreviewCases(props.allCases)

  },[props.allCases])




    if(props.preview === 0){
        return (
            <div className='container'>
                <Title title={"תיקים"}/>
                <NavigateTable previewCases={previewCases} onClick={changeIndex} allCases={props.allCases} activeCases={props.activeCases} myCases={props.myCases} myActiveCases={props.myActiveCases} setPreviewCases={setPreviewCases} loginType={props.loginType} setSearchCases={setSearchCases} previewIndex={previewIndex}/>
                <PreviewTable setRenderAllCases={props.setRenderAllCases} preview={previewIndex} cases={previewCases} casesType={props.allCaseTypes} loginType={props.loginType} />
            </div>
          )
    }

    else if(props.preview===1){

        console.log(props.allCaseTypes)
        const casesTypeprop = props.allCaseTypes
        const b = Object.entries(casesTypeprop)
        const c = b.map((item) => item[1])
        const d = b.map((item) => item[0])
        return (
            <div className='container'>
                <Title title={"כל סוגי התיקים"}/>
                <CaseTypeTable casesType={c} casesTypeNames={d}/>

            </div>
          )
    }
    else if(props.preview===2){

        return (
            <div className='container'>
                <Title title={"יצירת תיק חדש"} />
                <CreateNewCase userUID={props.userUID} currCaseTypeDetails={props.allCaseTypes} currUsers={props.allUsers} currHandlingLawyers={props.allLawyers}/>
            </div>
          )
    }
    else if(props.preview===3){
        return (
            <div className='container-casetype'>
                <Title title={"יצירת סוג תיק חדש"}/>
                <CreateNewCaseType/>
            </div>
          )
    }
    else if(props.preview===5){
        return (
            <div className='container'>
                <Title title={"הוספת עורך דין"}/>
                <AddUser userType={'Lawyer'} />
            </div>
          )

    }

  
    else{
        return (
            <div className='container'>
                <Title title={"עריכת תיק קיים"}/>
                <EditCase allCases={props.allCases} currCaseTypeDetails={props.allCaseTypes}/>
            </div>
          )
    }

  
}

export default PreviewComp