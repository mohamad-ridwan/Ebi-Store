// Import to React
import React, { component } from 'react'
// END Import to React

// Import to CSS
import './Navmenu.css'
// END Import to CSS

// Create Component for Navmenu
// And lakukan return()
const Navmenu = function ({ ngumpet }) {
    return (
        <div className="navmenu-c" style={{
            display: 'flex',
            position: 'fixed',
            height: '45px',
            width: '100%',
            background: '#152238e2',
            boxShadow: '0 3px 10px -1px rgba(0,0,0,0.6)',
            margin: '69px 0 0 0',
            transform: ngumpet ? 'translateY(-10vh)' : 'translateY(0)',
            overflow: 'hidden',
            transition: '.4s ease',
            zIndex: '50'
        }}>
            {/* Column1 */}
            <div className="navm-col1">
                <a href="#" className="btn-ktg">
                    <span class="material-icons">
                        toc
                    </span>
                    <p className="txt-ktg">
                        Kategori
                    </p>
                </a>
            </div>
            {/* END Column1 */}

            {/* Column2 */}
            <div className="navm-col2">
                <div className="w-search">
                    <input type="text" className="btn-s" placeholder="Cari rasa favorit kamu disini.." />
                    <div className="icon-s">
                        <a href="" className="btn-i-s">
                            <i className="fas fa-search"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* END Column2 */}
        </div>
    )
}
// END Create Component for Navmenu

// Export default for Navmenu
export default Navmenu
// END Export default for Navmenu