import { useEffect } from "react";
import { useState } from "react"
import { json, useNavigate } from "react-router";
// import './stylings/screen1.css'
import '../stylings/screen1.css'
import Navbar from "../navbar";
import { Button } from "@mui/material";
export default function Screen1(){
    var [data,setData]=useState([]);
    const navigate=useNavigate()
    // console.log('dta is',data)
    
    useEffect(()=>{
         fetch('https://api.tvmaze.com/search/shows?q=all').then(
             res=>res.json()
           
        ).then(json=>setData(json))
        
    },[])
    const navigatebutton=(l)=>{
        navigate('/movie-details',{state:l});
        localStorage.setItem("data", JSON.stringify(l));
    }
    return(
        <div className="main-container">
           
            <Navbar>Movies</Navbar>
             <div className="main-frame">

             <div className="images-frame">
           {
                data.map((image,index)=>{
                    // let newdata=data;
                    // console.log(index)
                    let imageurl=image?.show?.image?.medium;
                    
                   if(imageurl!=undefined){
                    return(
                        <div key={index} className="images-container"  >
                            <div >
                            
                            <div  >
                            <img style={{borderRadius:'20px'}} src={imageurl}></img>
                            
                            </div>
                            <div className="button-screen1">
                            <Button onClick={()=>navigatebutton(image)} style={{backgroundColor:'orange',color:'white',marginTop:'20px',textAlign:'center'}}>View</Button>
                            </div>
                        
                    </div>

                        </div>
                    )
                   }
                })
            }
           </div>
             </div>
          
    
        </div>
    )
}