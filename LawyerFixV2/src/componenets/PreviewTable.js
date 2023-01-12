import React, { useEffect, useMemo, useState } from 'react';
import CollapsibleTable from './CollapsibleTable'
import Search from './Search'

const PreviewTable = (props) => {
  const [previewCases,setPreviewCases] = React.useState(props.cases)


    console.log("in preview table")
    console.log("כל סוגי התיקים 1")
    console.log(previewCases)

    useEffect(() => {
      console.log('preview table in useEffect')
      console.log(props.cases)
      
    },[props.cases])
    
    return (
      <>
        <CollapsibleTable setRenderAllCases={props.setRenderAllCases} cases={props.cases} casesType={props.casesType} loginType={props.loginType}/>
      </>
      )

  
}

export default PreviewTable