import React, { Component } from 'react'
import FVLogo from '../assets/images/fv.svg'

class Home extends Component {
    render () {

        console.log("width: ", window.innerWidth);

        return (
            <div className="view">
                <div className="title forceWhite">
                    Full Stack
                </div>
                <div className="subtitle forceWhite">
                    developer / teacher
                </div>
                <hr/>
                <div className="is-size-4">
                    What I love the most about technology is that I can build
                    beautiful solutions to problems (mine or someone else's) 
                    and that I can empower individuals by teaching them what I have
                    learned.
                </div>
                
            </div>
        )
    }
}

export default Home