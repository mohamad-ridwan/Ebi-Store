import React from 'react'

import { NavLink } from 'react-router-dom'

import '../Akun/AkunE.css'

const AkunE = function () {
    return (
        <>
            <div className="cont-akun">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-akun">
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            Akun
                        </p>
                    </div>
                </div>
                {/* END Bar */}
                {/* END Column1 */}

                {/* Column2 */}
                <div className="col2-akun">
                    <div className="circle-desk">
                        <div className="col-animation-exclamation">
                            <i className="fas fa-exclamation"></i>
                        </div>
                        <div className="col-desk">
                            <p className="txt-desk">
                                Kamu belum mempunyai Akun EbiStore
                                <br /><br /> Silahkan Daftar atau Login Akun Kamu terlebih dahulu, untuk bisa berbelanja di EbiStore
                            </p>
                        </div>
                    </div>
                </div>
                {/* END Column2 */}

                {/* Column3 */}
                <div className="col3-akun">
                    <div className="section1">
                        <p className="txt1">
                            Silahkan
                        </p>
                    </div>
                    <div className="section2">
                        <NavLink to='/login' className="btn-login">
                            Login
                        </NavLink>
                        <p className="txt2">
                            Atau
                        </p>
                        <NavLink to='/daftar' className="btn-daftar">
                            Daftar
                        </NavLink>
                    </div>

                </div>
                {/* END Column3 */}
            </div>
        </>
    )
}

export default AkunE