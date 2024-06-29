import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

    const redirectHome = "https://akshayrx.github.io/texts-dot-com/";

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href={redirectHome}>{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    {/* <a className={(e)=>{return e.isActive?"red nav-link":"nav-link"}} aria-current="page" href={redirectHome}>Home</a> */}
                    </li>
                </ul>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><small>Enable {props.mode==='light'?'dark':'light'} mode</small></label>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    // aboutText: PropTypes.string.isRequired
}