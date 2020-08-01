// Import to React
import React, { useState } from 'react'
// END Import to React

import { Link } from 'react-router-dom'

// Import to css
import './Navbar.css'
// END Import to css

// Buat Component NAVBAR 
// Lakukan dengan return
const Navbar = function () {

    return (
        <div className="navbar-c">
            {/* Column1 */}
            <div className="nav-col1">
                <a href="#" className="icon-logo">
                    <img src="./macaroni.svg" alt="" className="icon-logo" />
                </a>
                <a href="" className="col-logo-name">
                    <a href="#" className="logo-name1">
                        EBI
                    </a>
                    <a href="#" className="logo-name2">
                        store
                    </a>
                    <a href="#" className="logo-name3">
                        .com
                    </a>
                </a>
            </div>
            {/* END Column1 */}

            {/* Column2 */}
            <div className="nav-col2">
                <p className="name-profile-account">
                    Mohamad
                </p>
                <Link to='/akun' className="circle-img-profile">
                    <img src="avatarnew.jpg" alt="" className="img-profile" />
                </Link>
            </div>
            {/* END Column2 */}
        </div>
    )
}
// END Buat Component NAVBAR

// Export default for Navbar
export default Navbar
// END Export default for Navbar