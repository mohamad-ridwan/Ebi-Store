// Import to React
import React, { useState, useEffect } from 'react'
// END Import to React

// Import NavLink to React Router
import { NavLink } from 'react-router-dom'
// END Import NavLink to React Router

// Import to FILE Directory
import AllBoxSerba10rbE3 from './AllBoxSerba10rbE3'
import AllBoxSerba10rbE2 from './AllBoxSerba10rbE2'
// END Import to FILE Directory

// Import to CSS for AllBoxSerba10rbE
import '../AllBoxSerba10rb/AllBoxSerba10rbE.css'
// END Import to CSS for AllBoxSerba10rbE

// Create Component for AllBoxSerba10rbE
// Lakukan dengan return()
const AllBoxSerba10rbE = function (get, { matilu }) {

    // Dummy data for AllBoxSerba10rbE2
    const [dmSrb10E2, setDmSrb10E2] = React.useState()
    // END Dummy data for AllBoxSerba10rbE2

    // Create API for get data from JSON for AllBoxSerba10rbE2
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/AllBoxSerbaTenrbETwo', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(srb10E2 => srb10E2.json())
            .then(dataE2 => {
                setDmSrb10E2(dataE2)
            })
    }, [])
    // END Create API for get data from JSON for AllBoxSerba10rbE2

    // Dummy data for AllBoxSerba10rbE3
    const [dmSrb10E3, setDmSrb10E3] = React.useState()
    // END Dummy data for AllBoxSerba10rbE3

    // Create API for get data from JSON for AllBoxSerba10rbE3
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/AllBoxSerbaTenrbEThree', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(srb10E3 => srb10E3.json())
            .then(dataE3 => {
                setDmSrb10E3(dataE3)
            })
    }, [])
    // END Create API for get data from JSON for AllBoxSerba10rbE3

    return (
        <>
            <div className={get.container}>
                {/* Title Bar */}
                <div className="tit-bar" style={{
                    display: 'flex',
                    position: 'fixed',
                    height: '50px',
                    width: '100%',
                    background: '#152238',
                    boxShadow: '0 3px 6px -1px rgba(0,0,0,0.5)',
                    overflow: 'hidden',
                    zIndex: '100',
                    transform: matilu ? 'translateY(-10vh)' : 'translateY(0)',
                    transition: '.4s ease'
                }}>
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>

                    <div className="jdl-bar">
                        <p className="txt-bar">
                            Serba 10rb
                        </p>
                    </div>

                    <div className="w-btn-swipe">
                        <a href="#" className="btn-swipe">
                            <i className="fas fa-arrow-circle-up"></i>
                            <p className="txt-swipe">
                                Swipe up
                            </p>
                        </a>
                    </div>
                </div>
                {/* END Title Bar */}

                {/* Wadah Box */}
                <div className="w-box">
                    {/* Column1 box */}
                    <div className="column1-box">
                        {/* Get data from JSON yg telah di buat API for AllBoxSerba10rbE2 */}
                        {/* Lakukan ternary operation */}
                        {/* Dengan condition ? yaitu if true : if false */}
                        {
                            dmSrb10E2 ? dmSrb10E2.map(function (i) {
                                return (
                                    <AllBoxSerba10rbE2 id1={i.id1} img1={i.img1} new1={i.new1} name1={i.name1} price1={i.price1} grade1={i.grade1} txtTerjual1={i.txtTerjual1} txtStock1={i.txtStock1} jmStock1={i.jmStock1} hrefView1={i.hrefView1} btnView1={i.btnView1} hrefBuy1={i.hrefBuy1} btnBuy1={i.btnBuy1} />
                                )
                                // When Condition loading WORK
                            }) : (
                                    <div className="load-box-col1">
                                        <p>LOADING COL1</p>
                                    </div>
                                )
                        }
                        {/* END Get data from JSON yg telah di buat API for AllBoxSerba10rbE2 */}
                    </div>
                    {/* END Column1 box */}

                    {/* Column2 box */}
                    <div className="column2-box">
                        {/* Get data from JSON yg telah di buat API for AllBoxSerba10rbE3 */}
                        {/* Lakukan ternary operation */}
                        {/* Dengan condition ? yaitu if true : if false */}
                        {
                            dmSrb10E3 ? dmSrb10E3.map(function (e) {
                                return (
                                    <AllBoxSerba10rbE3 id2={e.id2} img2={e.img2} new2={e.new2} name2={e.name2} price2={e.price2} grade2={e.grade2} txtTerjual2={e.txtTerjual2} txtStock2={e.txtStock2} jmStock2={e.jmStock2} hrefView2={e.hrefView2} btnView2={e.btnView2} hrefBuy2={e.hrefBuy2} btnBuy2={e.btnBuy2} />
                                )
                                // When Condition loading WORK
                            }) : (
                                    <div className="load-box-col2">
                                        <p>LOADING COL2</p>
                                    </div>
                                )
                        }
                        {/* END Get data from JSON yg telah di buat API for AllBoxSerba10rbE3 */}
                    </div>
                    {/* END Column2 box */}
                </div>
                {/* END Wadah Box */}
            </div>
        </>
    )
}
// END Create Component for AllBoxSerba10rbE

// Export default for AllBoxSerba10rbE
export default AllBoxSerba10rbE
// END Export default for AllBoxSerba10rbE