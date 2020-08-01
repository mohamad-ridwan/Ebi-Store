import React from 'react'

import { NavLink } from 'react-router-dom'

import '../Notifikasi/NotifikasiE.css'

const NotifikasiE = function () {
    return (
        <>
            <div className="cont-notifikasi">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-notifikasi">
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            Notifikasi
                        </p>
                    </div>
                </div>
                {/* END Bar */}
                {/* END Column1 */}
                {/* Column2 */}
                <div className="col2-notifikasi">
                    {/* Section1 */}
                    <div className="sec1-notifikasi">
                        <div className="circle-icon-animation">
                            <div className="col-animation">
                                <p className="txt-z1">
                                    Z
                                </p>
                                <p className="txt-z2">
                                    Z
                                </p>
                                <p className="txt-z3">
                                    Z
                                </p>
                            </div>
                            <div className="col-img">
                                <img className="img-notif" src="./sleeping.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* END Section1 */}
                    {/* Section2 */}
                    <div className="sec2-notifikasi">
                        {/* Kolom1 */}
                        <div className="kolom1-sec2">
                            <p className="txt-desk-notifikasi">
                                Cari belanjaan gih, supaya notifikasimu rame
                            </p>
                            <img src="smile.svg" alt="" className="emot-smile" />
                        </div>
                        {/* END Kolom1 */}
                        {/* Kolom2 */}
                        <div className="kolom2-sec2">
                            <NavLink to='/' className="box-btn-go-shopping">
                                <p className="txt-go-shopping">
                                    Go Shopping
                                </p>
                                <i className="fas fa-search"></i>
                            </NavLink>
                        </div>
                        {/* END Kolom2 */}
                    </div>
                    {/* END Section2 */}
                </div>
                {/* END Column2 */}
            </div>
        </>
    )
}

export default NotifikasiE