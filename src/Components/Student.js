import React from 'react'
// import './App.css';
import StoreData from './Store'
import {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Student() {
    const contextData = useContext(StoreData);
    const navi = useNavigate();
    console.log(contextData)
    return (
        <div>
            <div className="innerHeader">
            <div className="studheader">Students Details</div>
            <button onClick={()=> navi('/addnewstudent')} className="addStudent">Add new student</button>
            </div>
            <div className="tableContainer">
            <table cellPadding="15px" cellSpacing="50px">
               <thead> <tr>
                    <td>Name</td>
                    <td style={{textAlign:"right"}}>Age</td>
                    <td style={{textAlign:"right"}}>Course</td>
                    <td style={{textAlign:"right"}}>Batch</td>
                    <td style={{textAlign:"right"}}>Change</td>
                </tr></thead>
                <tbody>
                {contextData.stuname.map((item,index)=>{
                    return(
                        <tr key={index} style={{borderBottom:"1px solid #ccc"}}>
                            <td>{item.Name}</td>
                            <td style={{textAlign:"right"}}>{item.Age}</td>
                            <td style={{textAlign:"right"}}>{item.Course}</td>
                            <td style={{textAlign:"right"}}>{item.Batch}</td>
                            <td ><Link style={{display: 'flex', justifyContent: 'right'}} state={{data:index}} to='/editstudent'>edit</Link></td>
                        </tr>
                    )

                })}
            </tbody>
            </table>
            </div>

        </div>
    )
}

export default Student;










