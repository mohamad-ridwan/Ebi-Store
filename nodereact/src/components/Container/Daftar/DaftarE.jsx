import React from 'react'

import { NavLink } from 'react-router-dom'

import '../Daftar/DaftarE.css'

const DaftarE = function () {
    return (
        <>
            <div className="cont-daftar">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-daftar">
                    <div className="btn-back">
                        <NavLink to='/akun' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            Daftar Akun
                        </p>
                    </div>
                </div>
                {/* END Bar */}
                {/* END Column1 */}

                {/* Column2 */}
                <div className="col2-daftar">
                    <img src="macaroni.svg" alt="" className="img-logo-icon" />
                    <div className="sec-name-web">
                        <p className="txt1">
                            EBI
                        </p>
                        <p className="txt2">
                            store
                        </p>
                    </div>
                </div>
                {/* END Column2 */}

                {/* Column3 */}
                {/* Input */}
                <div className="col3-daftar">
                    <div className="col-input-daftar">
                        {/* Kolom1 */}
                        <div className="kol1-daftar">
                            <img src="macaroni.svg" alt="" className="icon-logo-daftar-akun" />
                            <p className="txt-jdl-daftar">
                                Silahkan Daftarkan Akun Kamu Di EbiStore
                            </p>
                        </div>
                        {/* END Kolom1 */}
                        {/* Kolom2 */}
                        <div className="kol2-daftar">
                            <div className="kol-icon">
                                <i className="fas fa-user"></i>
                            </div>
                            <form className="kol-input">
                                <input type="text" name="name" className="username" required="" placeholder="Enter your name" />
                            </form>
                        </div>
                        {/* END Kolom2 */}
                        {/* Kolom3 */}
                        <div className="kol3-daftar">
                            <div className="kol-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <form className="kol-input">
                                <input type="email" name="email" className="email" required="" placeholder="Enter your email @" />
                            </form>
                        </div>
                        {/* END Kolom3 */}
                        {/* Kolom4 */}
                        <div className="kol4-daftar">
                            <div className="kol-icon">
                                <i className="fas fa-mobile"></i>
                            </div>
                            <form className="kol-input">
                                <input type="tel" name="phone" className="phone" required="" placeholder="Enter your number phone (+62)" />
                            </form>
                        </div>
                        {/* END Kolom4 */}
                        {/* Kolom5 */}
                        <div className="kol5-daftar">
                            <div className="kol-icon">
                                <i className="fas fa-key"></i>
                            </div>
                            <form className="kol-input">
                                <input type="password" name="password" className="password1" required="" placeholder="Enter your password" />
                            </form>
                        </div>
                        {/* END Kolom5 */}
                        {/* Kolom6 */}
                        <div className="kol6-daftar">
                            <div className="kol-icon">
                                <i className="fas fa-key"></i>
                            </div>
                            <form className="kol-input">
                                <input type="password" name="password" className="password2" required="" placeholder="Repeat password" />
                            </form>
                        </div>
                        {/* END Kolom6 */}
                        {/* Kolom7 */}
                        <NavLink to="/" className="kol7-daftar">
                            DAFTAR
                        </NavLink>
                        {/* END Kolom7 */}
                    </div>
                </div>
                {/* END Input */}
                {/* END Column3 */}

                {/* Column4 */}
                <div className="col4-daftar">
                    <p className="txt-login">
                        Or Login width
                    </p>
                    <a href="#" className="btn-log-google">
                        <i className="fab fa-google"></i>
                        <p className="txt-login-g">
                            Login width google
                        </p>
                    </a>
                    <a href="#" className="btn-log-facebook">
                        <i className="fab fa-facebook-f"></i>
                        <p className="txt-login-f">
                            Login width facebook
                        </p>
                    </a>
                </div>
                {/* END Column4 */}
            </div>
        </>
    )
}

export default DaftarE