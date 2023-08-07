import React from 'react'
import { useNavigate } from 'react-router-dom'
import StoreData from './Store'
import { useContext } from 'react'

function AddNewStudent() {
  const navigator = useNavigate()
  const context = useContext(StoreData)
  console.log(context)
  const newStu = {
    Name: '',
    Age: '',
    Course:'',
    Batch:''

  }
  const handleChange=(e)=>{
    newStu[e.target.name]=e.target.value
  }

  const handleClick = () =>{
    context.stuName.push(newStu);
    navigator('/student')
  }
  const handleCancel=()=>{
    navigator('/student')
}
    return (
      <>
      <div>
          <h1>
              Add New Student
          </h1>
          
          <div className="form_box"> 
          <div className="temp">
              <div>
              <label htmlFor="name">Name</label>
          <input type="text" id='name'name='Name' placeholder="enter name" onChange={handleChange}/>
              </div>
          <div>
          <label htmlFor="age">Age</label>
          <input type="number" id='age' name='Age' placeholder="enter age" onChange={handleChange}/>
          </div>
         
          </div>
         <div className="temp">
          <div>
          <label htmlFor="course">Batch</label>
          <input type="text" id='course' name='Course' placeholder="enter course" onChange={handleChange}/>
          </div>
        
         <div>
         <label htmlFor="batch">Course</label>
          <input type="text" id='batch' name='Batch' placeholder="enter batch" onChange={handleChange}/>
         </div>
         
          </div>
          <div>
          <button type="button" onClick={handleClick}>Add Student</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
          </div>
      </div>
      </>
  )
}
export default AddNewStudent