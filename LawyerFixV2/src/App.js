import React from 'react'
import { useState } from 'react'
import ClientSearch from './componenets/ClientSearch';
import LawyerLogin from './componenets/LawyerLogin';
import NewLogin from './componenets/NewLogin';
import ClientReq from './componenets/ClientReq'
import Logo from './componenets/Logo';
import LawyerDashboard from './componenets/LawyerDashboard';
import ClientDashboard from './componenets/ClientDashboard';

function App() {
  const [loginType, setloginType] = React.useState('');
  const [userUID, setUserUID] = React.useState('');
  const [Connected, setConnected] = React.useState(false);

  return (
    <div className='Lawyer-background'>
      

      <Logo/>

      <div>
      { !Connected && <LawyerLogin setConnected={setConnected} setloginType={setloginType} setUserUID={setUserUID}/>}
        {loginType ==="Lawyer" && <LawyerDashboard userUID={userUID} loginType={loginType}/>}
        {loginType === "User" && <ClientDashboard userUID={userUID} loginType={loginType}/> }
        {loginType === "Admin" && <LawyerDashboard userUID={userUID} loginType={loginType}/>}
      </div>
      
    </div> 
  );
}

export default App;