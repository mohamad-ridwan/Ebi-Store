// Import to React
import React from 'react'
// END Import to React

// Import NavLink to React Router
import { NavLink } from 'react-router-dom'
// END Import NavLink to React Router

// Import to CSS for CntSemuaRasaE2
import '../CntSemuaRasa/CntSemuaRasaE2.css'
// END Import to CSS for CntSemuaRasaE2

// Create Component for CntSemuaRasaE2
// Lakukan dengan return()
const CntSemuaRasaE2 = function (get) {

    // Buat function dari useState dengan boolean for button LIKE

    // END Buat function dari useState dengan boolean for button LIKE

    // Buat function dari useState disi dengan boolean for button FAVORITE

    // END Buat function dari useState disi dengan boolean for button FAVORITE

    return (
        <>
            {/* Carousel Item 1 */}
            <div id={get.id} class={get.carouselItem}>
                {/* Element Parent 1 */}
                <div className="parent">
                    <div className="c-box">
                        {/* Isi Content Box */}
                        <div className="cont-box-e2">
                            {/* Tools Cont */}
                            <div className="c-c-tools">
                                <div className="c-t1">
                                    <div className="w-btn-t">
                                        <a className="btn-t like"

                                        >
                                            <p className="txt-j-l">
                                                0.
                                                        </p>
                                            <i className="fas fa-thumbs-up"></i>
                                        </a>
                                        <a className="btn-t"

                                        >
                                            <i className="fas fa-heart"></i>
                                        </a>
                                        <a href="#" className="btn-t">
                                            <i className="fas fa-cart-plus"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="c-t2">
                                    <a href="#" className="btn-el">
                                        <i className="fas fa-ellipsis-h"></i>
                                    </a>
                                </div>
                            </div>
                            {/* END Tools Cont */}

                            {/* Image Cont */}
                            <div className="c-c-img">
                                <img src={get.img} alt="unable to load image" className="c-img" />
                                <div className="c-disc-new">
                                    <p className="txt-percent-disc">
                                        {get.txtPercent}
                                    </p>
                                </div>
                            </div>
                            {/* END Image Cont */}

                            {/* Price Cont */}
                            <div className="c-c-dsk-price">
                                <div className="name-p">
                                    <p className="txt-n-p">
                                        {get.nameProduk}
                                    </p>
                                </div>
                                <div className="price-p">
                                    <p className="txt-price">
                                        {get.harga}
                                    </p>
                                    <p className="txt-ket-h-n">
                                        {get.hargaNormal}
                                    </p>
                                    <p className="txt-discount">
                                        {get.potongan}
                                    </p>
                                </div>
                                <div className="grade-p">
                                    <ul>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <p className="txt-grade-t">
                                            {get.grade}
                                        </p>
                                        <p className="txt-terjual">
                                            {get.txtTerjual}
                                        </p>
                                    </ul>
                                </div>
                                <div className="stock-p">
                                    <p className="txt-sk">
                                        {get.txtStock}
                                    </p>
                                    <div className="txt-jm-sk">
                                        {get.jmStock}
                                    </div>
                                </div>
                            </div>
                            {/* END Price Cont */}

                            {/* Button Cont */}
                            <div className="c-c-btn">
                                <div className="col1-btn-v">
                                    <NavLink to={get.toView} className="btn-v">
                                        {get.btnView}
                                    </NavLink>
                                </div>
                                <div className="col2-btn-b">
                                    <NavLink to={get.toBuy} className="btn-b">
                                        {get.btnBuy}
                                    </NavLink>
                                </div>
                            </div>
                            {/* END Button Cont */}
                        </div>
                        {/* END Isi Content Box */}
                    </div>
                    <div className="c-title">
                        <div className="circ-n-i">
                            <p className="number-i">
                                {get.numberI}
                            </p>
                        </div>
                    </div>
                </div>
                {/* END Element Parent 1 */}
            </div>
            {/* END Carousel Item 1 */}
        </>
    )
}
// END Create Component for CntSemuaRasaE2

// Export default for CntSemuaRasaE2
export default CntSemuaRasaE2
// END Export default for CntSemuaRasaE2