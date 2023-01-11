import React from 'react'

const NavigateRequests = (props) => {
    return (
        <div style={{marginBottom:'15px'}}>
             {props.loginType === "Admin" &&
            <button className="btn-group" onClick={(e) => {
                    props.onClick(e, 0)  
                    props.setPreviewRequests(props.allClientReq)
                }
                }
                >
                    ההודעות שלי
                </button>}
                {props.loginType === "Admin" &&
                <button className="btn-group" onClick={(e) => {
                    props.onClick(e, 1)
                    props.setPreviewRequests(props.myRequests)
                }
                }>
                    כל ההודעות
                </button>}
                
    
    
        </div>
      )
}

export default NavigateRequests