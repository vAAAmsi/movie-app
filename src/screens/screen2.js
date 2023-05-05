import { useLocation, useNavigate } from "react-router"
import Navbar from "../navbar"
import { useEffect, useState } from "react";
import '../stylings/screen2.css'
import { Button, Tooltip } from "@mui/material";

export default function Screen2(){
    let location=useLocation();
    const navigate=useNavigate();
    var[data,setdata]=useState(location.state)
    
    const NavigateButtonScreen2=(l)=>{
        navigate('/bookings',{state:l})
        
    }
    return(
        <div>
            <Navbar>Movie Details</Navbar>
         <div className="bottomnav-holder">
            <div className="bottom-nav">
                {/* <div><KeyboardBackspaceOutlinedIcon/></div> */}
                <Tooltip title='navigate up'>
                    <Button onClick={()=>navigate('/')}  style={{backgroundColor:'red',color:'white'}}>Back</Button>
                </Tooltip>
                <div className="movie-name">{data.show.name}</div>
                <Tooltip title='Book tickets'>
                    <Button onClick={()=>NavigateButtonScreen2(data)} style={{backgroundColor:'red',color:'white'}}>Book tickets</Button>
                </Tooltip>
         </div>
            </div>
            <div className="screen2-image-container">
                <img style={{width:'30%',height:'60%'}} src={data.show.image.original}></img>
                <div className="screen2-adjcent">
                    <div className="screen2-schedule">
                        Schedule: {  data.show.schedule.days} at {data.show.schedule.time}
                    </div>
                    {/* <div className="screen2-schedule">
                        Network: {  data.show.network.country.name} ({data.show.network.country.code})/{data.show.network.country.timezone}
                    </div> */}
                    <div className="screen2-schedule">
                        Score: {  data.score} 
                    </div>
                    <div className="screen2-schedule">
                        Genres: {  data.show.genres[0]} ,{ data.show.genres[1]}
                    </div>
                    <div className="screen2-schedule">
                        language: {  data.show.language} 
                    </div>
                    <div className="screen2-schedule">
                        Status: {  data.show.status} 
                    </div>
                    <div className="screen2-schedule">
                        Runtime: {  data.show.runtime} 
                    </div>
                    <div className="screen2-schedule">
                        Type: {  data.show.type} 
                    </div>
                    <div className="screen2-schedule">
                        Offical Site: <a href="">{data.show.officialSite}</a>
                    </div>
                    <div className="screen2-schedule">
                        Rating: {  data.show.rating.average} 
                    </div>
                </div>
                
            </div>
            <div className="description-container">
                    {/* <p>{data.show.summary}</p> */}
                    <div className="description-inner">{data.show.summary}</div>
                </div>
        </div>
    )
}