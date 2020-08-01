// Import to React
import React from 'react'
// END Import to React

import { NavLink } from 'react-router-dom'

// Import to CSS for FooterE
import '../Footer/FooterE.css'
// END Import to CSS for FooterE

// Create Component for FooterE
// Lakukan dengan return()
const FooterE = function (get) {
    return (
        <>
            <div className="c-f">
                {/* Footer 1 */}
                <div className="footer-1">
                    <p className="jdl-f-1">
                        {get.jdlFollow}
                    </p>
                    {/* Circle-icon-medsos */}
                    <div className="c-i-m">
                        <a href="https://www.facebook.com/malingjemur/" className="c-1-m">
                            <i className={get.iconFacebook}></i>
                        </a>
                        <a href="https://twitter.com/MohamadRidwan04" className="c-2-m">
                            <i className={get.iconTwitter}></i>
                        </a>
                        <a href="https://www.instagram.com/?hl=id" className="c-3-m">
                            <i className={get.iconInstagram}></i>
                        </a>
                        <a href="https://myaccount.google.com/?tab=kk" className="c-4-m">
                            <i className={get.iconGoogle}></i>
                        </a>
                    </div>
                    {/* Circle-icon-medsos */}
                </div>
                {/* END Footer 1 */}

                {/* Footer 2 */}
                <div className="footer-2">
                    <p className="jdl-desc-f">
                        {get.jdlDesc}
                    </p>
                    <br />
                    <p className="text-desc-f">
                        {get.txt1Desc} <br /> {get.txt2Desc} <br /><br /> {get.txt3Desc} <br /> {get.txt4Desc} <br /><br /> {get.txt5Desc} <br /> {get.txt6Desc} <br /><br /> {get.txt7Desc} <br />{get.txt8Desc}
                    </p>
                </div>
                {/* END Footer 2 */}

                {/* Footer 3 */}
                <div className="footer-3">
                    {/* Column1 */}
                    <div className="col1-f">
                        <p className="txt-info">
                            {get.txtInfo1}
                            <br /> {get.txtInfo2}
                        </p>
                        <div className="col-no-wa">
                            <a href="https://wa.me/+6281383959452" className="box-i-wa">
                                <i className={get.iconWhatsApp}></i>
                            </a>
                            <p className="txt-no-wa">
                                {get.txtNoWa}
                            </p>
                        </div>
                    </div>
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="col2-f">
                        <i className="fas fa-exclamation-circle" id="icon-warning"></i>
                        <div className="col-txt-warning">
                            <p className="txt-warning">
                                {get.txtWarning}
                            </p>
                        </div>
                    </div>
                    {/* END Column2 */}

                    {/* Column3 */}
                    <div className="col3-f">
                        <div className="section1">
                            <p className="title-s1">
                                {get.titleRekening}
                            </p>
                            <NavLink to='/rekening' className="link-rek">
                                {get.linkRekening}
                            </NavLink>
                        </div>
                        <div className="section2">
                            <p className="title-s2">
                                {get.titleLangkah}
                            </p>
                            <NavLink to='/videoLangkahPembayaran' className="box-video-pemb">
                                <video width="100%" height="100%" autoPlay loop>
                                    <source src="video.mp4" type="video/mp4" autoPlay loop />
                                </video>
                            </NavLink>
                        </div>
                    </div>
                    {/* END Column3 */}
                </div>
                {/* END Footer 3 */}

                {/* Footer 4 */}
                <div className="footer-4">
                    <p className="title-alamat">
                        {get.titleAlamat}
                    </p>
                    <br />
                    <p className="address">
                        {get.address1}
                        <br />
                        {get.address2}
                        <br />
                        {get.address3}
                        <br />
                        {get.address4}
                    </p>
                </div>
                {/* END Footer 4 */}
            </div>
        </>
    )
}
// END Create Component for FooterE

// Export default for FooterE
export default FooterE
// END Export default for FooterE