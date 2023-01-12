import React, { useEffect, useMemo, useState } from 'react';
import CollapsibleTable from './CollapsibleTable'

const PreviewTable = (props) => {
  // const [previewCases,setPreviewCases] = React.useState(props.cases)
    
    return (
      <>
        <CollapsibleTable setRenderAllCases={props.setRenderAllCases} cases={props.cases} casesType={props.casesType} loginType={props.loginType}/>
      </>
      )

  
}

export default PreviewTable