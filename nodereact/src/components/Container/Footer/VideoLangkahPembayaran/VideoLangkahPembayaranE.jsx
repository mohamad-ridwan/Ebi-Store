import React from 'react'

import { NavLink } from 'react-router-dom'

import '../VideoLangkahPembayaran/VideoLangkahPembayaranE.css'

const VideoLangkahPembayaranE = function () {
    return (
        <>
            <div className="cont-v-l-pE">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-video-l-pE">
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            Langkah-langkah Pembayaran
                        </p>
                    </div>
                </div>
                {/* END Bar */}
                {/* END Column1 */}

                {/* Column2 */}
                {/* Video */}
                <div className="cont-video">
                    <video controls>
                        <source src="tutorpembayaran.webm" type="video/webm" />
                    </video>
                </div>
                {/* END Video */}
                {/* END Column2 */}
            </div>
        </>
    )
}

export default VideoLangkahPembayaranE 