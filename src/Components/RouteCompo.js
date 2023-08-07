import React,{useState} from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Contact from './Contact';
import Home from './Home';
import StoreData from './Store';
import Student from './Student';
import AddNewStudent from './AddNewStudent';
import EditStudent from './EditStudent';

function RouteCompo() {
    const [studentData , setStudentData] = useState([
        {Name:'John' , Age:23 , Course:"MERN" , Batch:"oct" , Change:"Edit" },
        {Name:'Mike' , Age:24 , Course:"MEAN" , Batch:"sept" , Change:"Edit" },
        {Name:'Harry' , Age:23 , Course:"Python" , Batch:"oct" , Change:"Edit" },
        {Name:'Kate' , Age:26 , Course:"JS" , Batch:"nov" , Change:"Edit" },
        {Name:'Pal' , Age:22 , Course:"MERN" , Batch:"dec" , Change:"Edit" },

    ])
    return (
        <>
          <BrowserRouter>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/Student'}>Student</NavLink>
          <NavLink to={'/Contact'}>Contact</NavLink>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/Student' element={
                  <StoreData.Provider value={{stuname: studentData , updateStud: setStudentData}}>
                      <Student/>
                  </StoreData.Provider>
             }/>
              <Route path='/AddNewStudent' element={
                  <StoreData.Provider value={{stuName: studentData , updateStud: setStudentData}}>
                      <AddNewStudent/>
                  </StoreData.Provider>
             }/>
              <Route path='/editstudent' element={
                  <StoreData.Provider value={{stuName: studentData , updateStud: setStudentData}}>
                      <EditStudent/>
                  </StoreData.Provider>
             }/>
          </Routes>
          </BrowserRouter>  
        </>
    )
}

export default RouteCompo;
