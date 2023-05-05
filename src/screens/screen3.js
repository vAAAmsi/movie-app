import { useLocation, useNavigate } from "react-router"
import Navbar from "../navbar"
import { useState } from "react";
import '../stylings/screen3.css'
import { Button, TextField, Tooltip } from "@mui/material";
import Swal from "sweetalert2";
export default function Screen3(){
    let location=useLocation();
    const data=useState(location.state);
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [age,setAge]=useState();
    const [gender,setGender]=useState();
    const [number,setNumber]=useState();
    
    const Submitbutton=(e)=>{
        e.preventDefault();
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('gender',gender)
        localStorage.setItem('number',number);
        Swal.fire(
            {
                title:'successfully Booked the tickets',
                icon:'success'
            }
        )
        navigate('/')
    }
   
    

    return(
        <div>
            <Navbar>Booking</Navbar>
            <div className="screen3submain" >
            <div  className="screen3-bottomnav">
                <Tooltip title='navigate up'>
                
                <Button onClick={()=>navigate('/')} style={{backgroundColor:'red',color:'white'}}>Back</Button>
                </Tooltip>
                
                <div style={{display:'flex',gap:'5px'}}>
                    <div style={{fontSize:'30px',color:'black'}}>Movie name: </div>
                    <div style={{color:'red',fontSize:'30px'}}>"{data[0].show?.name}"</div>
                </div>
                <div ></div>
            </div>
            </div>
            
            <div className="screen3form">
                
                <div className="screen3-cont ">
                    <form onSubmit={Submitbutton} >
                    <div className="screen3text">Please Enter The Following Details</div>
                            <TextField onChange={(e)=>{setName(e.target.value)}}  style={{marginTop:'20px',width:'90%',marginLeft:'10px'}} required label='name '></TextField>
                            <TextField onChange={(e)=>{setAge(e.target.value)}} style={{marginTop:'20px',width:'90%',marginLeft:'10px'}} required label='age '></TextField>
                            <TextField onChange={(e)=>{setGender(e.target.value)}} style={{marginTop:'20px',width:'90%',marginLeft:'10px'}} required label='gender '></TextField>
                            <TextField onChange={(e)=>{setNumber(e.target.value)}} style={{marginTop:'20px',width:'90%',marginLeft:'10px'}} required label='no of tickets '></TextField>
                            <div className="screen3submit">
                                <Button type="submit" style={{backgroundColor:'red',color:'white'}}>Submit</Button>
                            </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}