import React from 'react';
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import Background from './img/background.jpeg'
import ProfilePic from './img/profile.jpeg'
import BackgroundVideo from './img/Background_Loop.mp4'
import {BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";


function LandingPage() {
    return (
        <div className='LandingPage'>
            <div className='center-image'>
                <video autoPlay loop muted id='video'>
                    <source src={BackgroundVideo} type='video/mp4'/>
                </video>

                <div className='circular-portrait'>
                    <img src={ProfilePic}/>
                </div>
                <div className = 'AboutMe'>
                    <h1>Hello, I'm Khoa Le and welcome to my react portfolio that is currently a work in progress. </h1>
                </div>
            </div>
            
        </div>
    );
}

  
export default LandingPage;