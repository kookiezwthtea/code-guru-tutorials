import { Link } from 'react-router-dom';
import React from 'react'
const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                <Link to={`/`} class="navbar-brand">
                <i class="fas fa-rocket" aria-hidden="true"></i>
                        CodeGuruTutorials
                                </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to={`/jsprojects`} class="nav-link nav-link-1">
                                    JavaScript Projects
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={`/reactprojects`} class="nav-link nav-link-1">
                                    React Projects
                                </Link>
                            </li>
                            <li class="nav-item">
                            <Link to={`/about`} class="nav-link nav-link-1">
                                    About
                                </Link>
                            </li>
                            <li class="nav-item">
                            <Link to={`/contact`} class="nav-link nav-link-1">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar