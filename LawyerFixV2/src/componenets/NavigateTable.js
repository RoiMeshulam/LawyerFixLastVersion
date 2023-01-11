import React from 'react'

const NavigateTable = (props) => {


  return (
    <div style={{marginBottom:'15px'}}>
        {props.loginType === "Admin" &&
        <button className="btn-group" onClick={(e) => {
                props.onClick(e, 0)  
                props.setPreviewCases(props.allCases)
            }
            }
            >
                כל התיקים
            </button>}
            {props.loginType === "Admin" &&
            <button className="btn-group" onClick={(e) => {
                props.onClick(e, 1)
                props.setPreviewCases(props.activeCases)
            }
            }>
                כל התיקים הפעילים
            </button>}
            <button className="btn-group" onClick={(e) => {
                props.onClick(e, 2)
                props.setPreviewCases(props.myCases)
            }
            }>
                התיקים שלי
            </button>
            <button className="btn-group" onClick={(e) => {
                props.onClick(e, 3)
                props.setPreviewCases(props.myActiveCases)
            }
            }>
                התיקים הפעילים שלי
            </button>



    </div>
  )
}

export default NavigateTable