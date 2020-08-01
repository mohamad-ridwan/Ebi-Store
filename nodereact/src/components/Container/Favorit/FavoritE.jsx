// Import to React
import React from 'react'
// END Import to React

// Import NavLink to React Router
import { NavLink } from 'react-router-dom'
// END Import NavLink to React Router

// Import to CSS for FavoritE
import '../Favorit/FavoritE.css'
// END Import to CSS for FavoritE

// Create Component for FavoritE
// Lakukan dengan return()
const FavoritE = function () {
    return (
        <>
            <div className="cont-favorit">
                <div className="col1-fav">
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            Favorit
                        </p>
                    </div>
                </div>
                <div className="col2-fav">
                    <div className="col1-heart">
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className="col2-heart">
                        <i className="fas fa-heart"></i>
                        <p className="txt-pop-fav">
                            Tidak ada makaroni yang di favoritkan
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
// END Create Component for FavoritE

// Export default for FavoritE
export default FavoritE
// END Export default for FavoritE