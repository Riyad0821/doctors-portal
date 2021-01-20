import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light text-white">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-5 active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Dental Services</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link text-white" href="#">Reviews</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link text-white" href="#">Blogs</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link text-white" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;