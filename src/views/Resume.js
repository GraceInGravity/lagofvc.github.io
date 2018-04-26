import React, { Component } from 'react'

import resumeImage from '../assets/images/resume_scrnshot.png'

import './Resume.css'
class Resume extends Component {
    render () {
        return (
            <div className="split-view">
                <div className="resume">
                    <img src={resumeImage} width="2500"/>
                </div>
                <div className="description"> 
                    <div className="title forceWhite">
                        Web & Mobile Solutions
                    </div>
                    <div className="subtitle forceWhite">
                        Portland, Oregon
                    </div>
                    <hr/>
                    
                    I feel grateful and fortunate to have had a great career in JAVA Enterprise Software 
                    development for 15+ years in the Tech, Healthcare, Travel and DAM (Digital Asset Mgt.) 
                    industries. Joining <strong className="forceWhite"> such great development teams </strong>
                    at companies like IBM, Avisena, MedAvant, Revelex, Celartem and help produce their 
                    source code has been an amazing career journey!

                    <br/><br/>
                    It is because of this accumulated wealth of knowledge that I feel ready
                    to embark on my own journey : 
                    
                    <ol>
                        <li>
                            Crafting beautiful solutions for every-day user, every-day problems using
                            React and React Native for Web and Mobile.
                        </li>
                        
                        <li>Helping others do the same.</li>
                    </ol>
                    

                    If you have a project that you would like to discuss, 
                    feel free to contact me, I would love to speak with you or your Team.
                </div>
                
            </div>
        )
    }
}

export default Resume