import React from 'react'

import { NavLink } from 'react-router-dom'

import '../Chatting/ChattingE.css'

const ChattingE = function () {
    return (
        <>
            <div className="cont-chatting" id="#ngobrol">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-chat">
                    {/* Button Back */}
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    {/* END Button Back */}

                    {/* Name Bar */}
                    <div className="name-p-chat">
                        <div className="circle-pic-p">
                            <i className="fab fa-earlybirds"></i>
                        </div>
                        <p className="name-p">
                            EbiStore Message
                        </p>
                        <i className="fas fa-circle" id="indikator"></i>
                    </div>
                    {/* END Name Bar */}
                </div>
                {/* END Bar */}
                {/* END Column1 */}

                {/* Column2 */}
                <div className="col2-chat">

                </div>
                {/* END Column2 */}
            </div>
        </>
    )
}

export default ChattingE