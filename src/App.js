import React, { Component } from 'react'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './views/Home'
import Resume from './views/Resume'
import Portfolio from './views/Portfolio'
import Contact from './views/Contact'

import FabioValentinoLogo from './assets/images/fabiovalentino_orig.svg'
import './App.css'

class App extends Component {

  render() {
    const {pathname} = window.location;
    let background = '';
    console.log("this.props.location.pathname", pathname);
    switch(pathname) {
      case '/': 
        background = 'HomeGradient';
        break;
      case '/resume':
        background = 'ResumeGradient';
        break;
      case '/portfolio':
        background = 'PortfolioGradient';
        break;
      case '/contact':
        background = 'ContactGradient';
        break;
      default:
        // background = 'MixGradientReverse';
    }

    return (
      <div className={'App ' + background}>
        <nav className="navbar has-shadow" aria-label="main-navigation">
          <div className="container">
            <div className="navbar-brand forceBlack">
              <img className="navbar-item logo" src={FabioValentinoLogo} alt="FV Logo" width="400" height="400"/>
              <div className="navbar-burger inline" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </div>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <Link className="navbar-item" to="/"><strong className="blueO">home</strong></Link>
                <Link className="navbar-item" to="resume">resume</Link>
                <Link className="navbar-item" to="portfolio">portfolio</Link>
                <Link className="navbar-item" to="contact">contact</Link>
              </div>
            </div>
          </div>
        </nav>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/resume" component={ Resume } />
              <Route path="/portfolio" component={ Portfolio } />
              <Route path="/contact" component={ Contact } />
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}
export default App