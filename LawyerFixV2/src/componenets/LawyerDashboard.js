
import * as React from 'react';
import '../index.css';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Navigation from './Navigation';
import PreviewComp from './PreviewComp';




const LawyerDashboard = ({userUID, loginType}) => {

  // const previewComponent
  
  const [previewIndex,setPreviewIndex] = React.useState(0);
  const [allCases, setAllCases] = React.useState([]);
  const [allCaseTypes, setAllCaseTypes] = React.useState([]);
  const [allClientReq, setAllClientReq] = React.useState([]);
  const [allLawyers, setAllLawyers] = React.useState([]);
  const [activeCases, setActiveCases] = React.useState([]);
  const [allUsers, setAllUsers] = React.useState([]);
  const [renderAllCases, setRenderAllCases] = React.useState(false);
  const [myCases,setMyCases]= React.useState([])
  const [myActiveCases,setMyActiveCases]= React.useState([])
  const [myRequests,setMyRequestsCases]= React.useState([])



  console.log(userUID)



  //OnClick in Navigation conponent -> change the previewIndex 
  const changeIndex = (e,index) => {
    e.preventDefault();
    setPreviewIndex(index);
  }

  return (
    <div>
        <Grid container spacing={1} >
            <Grid item xs={9}>
              <Item>
                <PreviewComp userUID={userUID} loginType={loginType} setRenderAllCases={setRenderAllCases} preview={previewIndex} allUsers={allUsers} allCases={allCases} allCaseTypes={allCaseTypes} allClientReq={allClientReq} allLawyers={allLawyers} activeCases={activeCases} myCases={myCases} myActiveCases={myActiveCases} myRequests={myRequests} />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Navigation userUID={userUID} onClick={changeIndex} renderAllCases={renderAllCases} setRenderAllCases={setRenderAllCases} loginType={loginType} setAllUsers={setAllUsers} setAllCases={setAllCases} setAllCaseTypes={setAllCaseTypes} setAllClientReq={setAllClientReq} setAllLawyers={setAllLawyers} setActiveCases={setActiveCases} setMyCases={setMyCases} setMyActiveCases={setMyActiveCases} setMyRequestsCases={setMyRequestsCases}/>
              </Item>
            </Grid>
          </Grid>
    </div>

  )
}

export default LawyerDashboard