// Import to React
import React from 'react'
// END Import to React

// Import to CSS for BtnNotifPromoE
import '../BtnNotifPromo/BtnNotifPromoE.css'
import { useState } from 'react'
// END Import to CSS for BtnNotifPromoE

// Create Component for BtnNotifPromoE
// Lakukan dengan return()
const BtnNotifPromoE = function () {

    let [hide, setHide] = useState(false)

    return (
        <>
            <button className="notif-pro" style={{
                display: 'flex',
                position: 'fixed',
                height: '37px',
                width: '37px',
                background: '#34495e',
                boxShadow: '0 2px 6px 1px black',
                borderRadius: '500px',
                border: 'none',
                outlineStyle: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                bottom: '65px',
                left: '10px',
                overflow: 'hidden',
                zIndex: 1,
                transitionDelay: '.5s',
                transitionDuration: '.5s',
                animation: 'AbtnCircle 300ms ease-in-out 1'
            }} onClick={function () {
                setHide(!hide)
            }}>
                <div className="icon-btn">
                    <i className="fas fa-bell"></i>
                </div>
            </button>

            <div className="papan-txt-not-pro" style={{
                display: hide ? 'flex' : 'none',
                flexDirection: 'column',
                position: 'fixed',
                height: 'auto',
                width: '140px',
                background: '#91a8d8',
                boxShadow: '0 2px 8px -1px black',
                borderRadius: '10px',
                padding: '10px',
                bottom: '110px',
                left: hide ? '10px' : '0px',
                overflow: 'hidden',
                zIndex: '100',
                transitionDuration: '.3s',
                transitionDelay: '.3s'
            }}>
                <div className="w-txt-j">
                    <p className="txt-j">
                        Saatnya beli dengan yang Promo!!
                    </p>
                </div>

                <div className="time-and-button">
                    <div className="column1">
                        <p className="time" id="time">
                            -- --
                        </p>
                    </div>

                    <div className="column2">
                        <button className="view">
                            Look!
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
// END Create Component for BtnNotifPromoE

// Export default for BtnNotifPromoE
export default BtnNotifPromoE
// END Export default for BtnNotifPromoE