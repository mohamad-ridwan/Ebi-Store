import React from 'react'

import './ViewBoxIndicator1E2.css'
import { NavLink } from 'react-router-dom'

const ViewBoxIndicator1E2 = function (get) {
    return (
        <>
            <div class={get.carouselItem}>
                <NavLink to={get.to} className="btn-img">
                    <img class="img-produk" src={get.imgCarousel} alt="Image Not Found!" />
                </NavLink>
            </div>
        </>
    )
}

export default ViewBoxIndicator1E2