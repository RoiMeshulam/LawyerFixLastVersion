import React from 'react'
import CollapsibleTable from './CollapsibleTable'

const PreviewTable = (props) => {

    console.log("in preview table")
    console.log("כל סוגי התיקים 1")
    console.log(props.casesType)
    // all cases
    // if (props.preview==0){
    return (
        <CollapsibleTable setRenderAllCases={props.setRenderAllCases} cases={props.cases} casesType={props.casesType} loginType={props.loginType}/>
      )
    // }
    // // all active cases
    // else if (props.preview == 1){
    //     return (
    //         <CollapsibleTable setRenderAllCases={props.setRenderAllCases} cases={props.cases} casesType={props.allCaseTypes} />
    //       )
    // }
    // // my active cases
    // else if(props.preview == 2){
    //     return (
    //         <CollapsibleTable setRenderAllCases={props.setRenderAllCases} cases={props.cases} casesType={props.allCaseTypes} />
    //       )
    // }
    // // my cases
    // else{
    //     return (
    //         <CollapsibleTable setRenderAllCases={props.setRenderAllCases} cases={props.cases} casesType={props.allCaseTypes} />
    //       )
    // }
  
}

export default PreviewTable