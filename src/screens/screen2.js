import { json, useLocation, useNavigate } from "react-router"
import Navbar from "../navbar"
import { useEffect, useState } from "react";
import '../stylings/screen2.css'
import { Button, Tooltip } from "@mui/material";

export default function Screen2(){
    let location=useLocation();
    const navigate=useNavigate();
    // var[data,setdata]=useState(location.state)
    
    const NavigateButtonScreen2=(l)=>{
        navigate('/bookings',{state:l});
        
    }
    let newdata=localStorage.getItem('data');
    let datafromLocal=JSON.parse(newdata);
    console.log("newdata",datafromLocal);
    return(
        <div>
            <Navbar>Movie Details</Navbar>
         <div className="bottomnav-holder">
            <div className="bottom-nav">
                {/* <div><KeyboardBackspaceOutlinedIcon/></div> */}
                <Tooltip title='navigate up'>
                    <Button onClick={()=>navigate('/')}  style={{backgroundColor:'red',color:'white'}}>Back</Button>
                </Tooltip>
                <div className="movie-name">{datafromLocal.show.name}</div>
                <Tooltip title='Book tickets'>
                    <Button onClick={()=>NavigateButtonScreen2(datafromLocal)} style={{backgroundColor:'red',color:'white'}}>Book tickets</Button>
                </Tooltip>
         </div>
            </div>
            <div className="screen2-image-container">
                <img style={{width:'30%',height:'60%',borderRadius:'20px'}} src={datafromLocal.show.image.original}></img>
                <div className="screen2-adjcent">
                    <div className="screen2-schedule">
                        Schedule: {  datafromLocal.show.schedule.days} at {datafromLocal.show.schedule.time}
                    </div>
                   
                    <div className="screen2-schedule">
                        Score: {  datafromLocal.score} 
                    </div>
                    <div className="screen2-schedule">
                        Genres: {  datafromLocal.show.genres[0]} ,{ datafromLocal.show.genres[1]}
                    </div>
                    <div className="screen2-schedule">
                        language: {  datafromLocal.show.language} 
                    </div>
                    <div className="screen2-schedule">
                        Status: {  datafromLocal.show.status} 
                    </div>
                    <div className="screen2-schedule">
                        Runtime: {  datafromLocal.show.runtime} 
                    </div>
                    <div className="screen2-schedule">
                        Type: {  datafromLocal.show.type} 
                    </div>
                    <div className="screen2-schedule">
                        Offical Site: <a href="">{datafromLocal.show.officialSite}</a>
                    </div>
                    <div className="screen2-schedule">
                        Rating: {  datafromLocal.show.rating.average} 
                    </div>
                </div>
                
            </div>
            <div className="description-container">
                    {/* <p>{data.show.summary}</p> */}
                    <div className="description-inner">{datafromLocal.show.summary}</div>
                </div>
        </div>
    )
}