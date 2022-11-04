import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className='container'>
                <a className="navbar-brand" href="#">My Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr -auto">
                        <li className="nav-item active">
                        <span className="nav-link">Home <span className='sr-only'></span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">About Me</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Education</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Skills</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Why SovTech</span>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>  
    )
}

export default Navbar