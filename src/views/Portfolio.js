import React, { Component } from 'react'

class Portfolio extends Component {
    render () {
        return (
            <div className="view">
                <div className="title forceWhite">
                Portfolio
                </div>
                <div className="subtitle forceWhite">
                     Current and Recent Projects
                </div>
                <hr/>
                <p className="thin">
                The following are links to some side projects: Homeslice (ReactNative) bill & expense sharing app for Roomates.  Oleada (Angular) site in Angular for a Cumbia Band I play in.  Blockchain Tech Events (Angular / Nebular) site to find and curate Blockchain Tech Events.  Eth Block Explorer (React) Ethereum Block Explorer. 
                </p>
            </div>
        )
    }
}

export default Portfolio