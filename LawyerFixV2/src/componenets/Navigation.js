import React from 'react'
import { useState, useEffect } from 'react';
import { onValue, ref, set, getDatabase, child, get } from "firebase/database";






const Navigation = (props) => {
    const [defaultScreen, setDefaultScreen] = useState(true);
    console.log(props.loginType)


    const GetAllCasesFromDB = React.useCallback(() => {
        if (true) {
            const dbRef = ref(getDatabase());
            get(child(dbRef, `Cases/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const b = Object.entries(snapshot.val())
                    const c = b.map((item) => item[1])
                    // c all cases
                    // d allactivecases
                    const d = c.filter(item => item.Status === 1);
                    props.setAllCases(c)
                    props.setActiveCases(d)
                    const myCases = c.filter(item => item.LawyerUID == props.userUID)
                    const myActiveCases = d.filter(item => item.LawyerUID == props.userUID)
                    console.log("all cases")
                    console.log(c)
                    console.log("all active cases")
                    console.log(d)
                    console.log("my cases")
                    console.log(myCases)
                    console.log("my active cases")
                    console.log(myActiveCases)
                    props.setMyCases(myCases)
                    props.setMyActiveCases(myActiveCases)




                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [true])

    const GetAllUsersFromDB = React.useCallback(() => {
        if (true) {
            const dbRef = ref(getDatabase());
            //get all users
            get(child(dbRef, `Users/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const myUsernamevalue = Object.entries(snapshot.val())
                    const myUsername = myUsernamevalue.filter(item => item[0] === props.userUID)
                    //my personal user
                    props.setMyUserName(myUsername[0][1])
                    //rest of the users
                    props.setAllUsers(snapshot.val());
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [true])


    const GetAllCaseTypeFromDB = React.useCallback(() => {
        if (true) {
            const dbRef = ref(getDatabase());
            get(child(dbRef, `CaseType/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    props.setAllCaseTypes(snapshot.val());
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [true])

  

    if (defaultScreen) {
        console.log("defaultscreenn")
        GetAllCasesFromDB()
        GetAllCaseTypeFromDB()
        GetAllUsersFromDB()
        setDefaultScreen(false)
    }

    useEffect(() => {
        if (props.renderAllCases) {
            GetAllCasesFromDB()
            GetAllCaseTypeFromDB()
            GetAllUsersFromDB()
            console.log("I've rendered it")
            props.setRenderAllCases(false)
        }
    }, [props.renderAllCases]);


    return (
        <div className='container-btn'>
            <button className="btn-group" onClick={(e) => {
                props.onClick(e, 0)
                GetAllCasesFromDB()
            }

            }
            >
                תיקים
            </button>
            <button className="btn-group" onClick={(e) => {
                props.onClick(e, 1)
                GetAllCaseTypeFromDB()
            }
            }>
                כל סוגי התיקים
            </button>


            <hr
                style={{
                    background: '#D0B49F',
                    color: '#D0B49F',
                    height: '3px',
                    width: '100%'
                }}
            />

            <button className="btn-group" onClick={(e) => {
                props.onClick(e, 2)
                GetAllCaseTypeFromDB()
                GetAllUsersFromDB()
            }
            }>
                יצירת תיק חדש
            </button>
            <button className="btn-group" onClick={(e) => {
                props.onClick(e, 3)
            }
            }>
                יצירת סוג תיק חדש
            </button>
            {/* <button className="btn-group" onClick={(e) => {
                props.onClick(e, 4)
                GetAllCasesFromDB()
                GetAllCaseTypeFromDB()

            }
            }>
                עריכת תיק קיים
            </button> */}
             {props.loginType === "Admin" &&
            <hr
                style={{
                    background: '#D0B49F',
                    color: '#D0B49F',
                    height: '3px',
                    width: '100%'
                }}
            />}
            {props.loginType === "Admin" &&
                <button className="btn-group" onClick={(e) =>
                    props.onClick(e, 5)}>
                    הוספת עורך דין
                </button>}

            {/* <button className="btn-group" onClick={(e) => {
                props.onClick(e, 6)
                GetAllClientReqFromDB()
            }
            }>
                בקשות לקוח
            </button> */}

        </div>
    )
}

export default Navigation
