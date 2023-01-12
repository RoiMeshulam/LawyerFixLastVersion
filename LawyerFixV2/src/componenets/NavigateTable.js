import React from 'react'
import Search from './Search'

const NavigateTable = (props) => {

    const searchCases = (e,searchInput) => {
        console.log("searchCases")
        console.log(searchInput)
        e.preventDefault();
        console.log(props.previewIndex)
        if(props.previewIndex===0){
            console.log("cond 0")
            const temp = props.allCases
            console.log(temp)
            const casesByName = temp.filter(item => item.ClientName === searchInput)
            const casesByCaseNum = temp.filter(item => item.CaseNum === searchInput)
            if(casesByName.length > 0 ){
                props.setPreviewCases(casesByName)
            }
            else if(casesByCaseNum.length > 0){
                props.setPreviewCases(casesByCaseNum)
            }
            else{
                props.setPreviewCases([])
            }
        } 
        else if(props.previewIndex===1){
            console.log("cond 1")
            const temp = props.activeCases
            console.log(temp)
            const casesByName = temp.filter(item => item.ClientName === searchInput)
            const casesByCaseNum = temp.filter(item => item.CaseNum === searchInput)
            if(casesByName.length > 0 ){
                props.setPreviewCases(casesByName)
            }
            else if(casesByCaseNum.length > 0){
                props.setPreviewCases(casesByCaseNum)
            }
            else{
                props.setPreviewCases([])
            }
        }
        else if(props.previewIndex===2){
            console.log("cond 2")
            const temp = props.myCases
            console.log(temp)
            const casesByName = temp.filter(item => item.ClientName === searchInput)
            const casesByCaseNum = temp.filter(item => item.CaseNum === searchInput)
            if(casesByName.length > 0 ){
                props.setPreviewCases(casesByName)
            }
            else if(casesByCaseNum.length > 0){
                props.setPreviewCases(casesByCaseNum)
            }
            else{
                props.setPreviewCases([])
            }
        }
        else{
            console.log("cond 3")
            const temp = props.myActiveCases
            console.log(temp)
            const casesByName = temp.filter(item => item.ClientName === searchInput)
            const casesByCaseNum = temp.filter(item => item.CaseNum === searchInput)
            if(casesByName.length > 0 ){
                props.setPreviewCases(casesByName)
            }
            else if(casesByCaseNum.length > 0){
                props.setPreviewCases(casesByCaseNum)
            }
            else{
                props.setPreviewCases([])
            }
        }

        
    }

  return (
    <div>
        <div style={{marginBottom:'15px'}}>
            {props.loginType === "Admin" &&
            <button className={props.previewIndex==0 ? "btn-clicked" : "btn-not-clicked"} onClick={(e) => {
                    props.onClick(e, 0)  
                    props.setPreviewCases(props.allCases)
                }
                }
                >
                    כל התיקים
                </button>}
                {props.loginType === "Admin" &&
                <button className={props.previewIndex==1 ? "btn-clicked" : "btn-not-clicked"} onClick={(e) => {
                    props.onClick(e, 1)
                    props.setPreviewCases(props.activeCases)
                }
                }>
                    כל התיקים הפעילים
                </button>}
                <button className={props.previewIndex==2 ? "btn-clicked" : "btn-not-clicked"} onClick={(e) => {
                    props.onClick(e, 2)
                    props.setPreviewCases(props.myCases)
                }
                }>
                    התיקים שלי
                </button>
                <button className={props.previewIndex==3 ? "btn-clicked" : "btn-not-clicked"} onClick={(e) => {
                    props.onClick(e, 3)
                    props.setPreviewCases(props.myActiveCases)
                }
                }>
                    התיקים הפעילים שלי
                </button>



        </div>

        <div>
            <Search previewCases={props.previewCases} setPreviewCases={props.setPreviewCases} onClick={searchCases} />
        </div>
    </div>
  )
}

export default NavigateTable