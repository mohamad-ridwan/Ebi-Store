// Import to React
import React from 'react'
// END Import to React

// Import NavLink to React Router
import { NavLink } from 'react-router-dom'
// END Import NavLink to React Router

// Import to FILE Directory
import AllBoxSerba15rbE2 from './AllBoxSerba15rbE2'
import AllBoxSerba15rbE3 from './AllBoxSerba15rbE3'
// END Import to FILE Directory

// Import to CSS for AllBoxSerba15rbE
import '../AllBoxSerba15rb/AllBoxSerba15rbE.css'
// END Import to CSS for AllBoxSerba15rbE

// Create Component for AllBoxSerba15rbE
// Lakukan dengan return()
const AllBoxSerba15rbE = function (get) {

    // Dummy data for AllBoxSerba15rbE2
    const [srb15E2, setSrb15E2] = React.useState()
    // END Dummy data for AllBoxSerba15rbE2

    // Create API for get data from JSON for AllBoxSerba15rbE2
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/AllBoxSerbaFifteenrbETwo', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datSrb15E2 => datSrb15E2.json())
            .then(data15E2 => {
                setSrb15E2(data15E2)
            })
    }, [])
    // END Create API for get data from JSON for AllBoxSerba15rbE2

    // Dummy data for AllBoxSerba15rbE3
    const [srb15rbE3, setSrb15rbE3] = React.useState()
    // END Dummy data for AllBoxSerba15rbE3

    // Create API for get data from JSON for AllBoxSerba15rbE3
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/AllBoxSerbaFifteenrbEThree', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datSrb15E3 => datSrb15E3.json())
            .then(data15E3 => {
                setSrb15rbE3(data15E3)
            })
    }, [])
    // END Create API for get data from JSON for AllBoxSerba15rbE3

    return (
        <>
            <div className={get.container}>
                {/* Title Bar */}
                <div className="tit-bar">
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>

                    <div className="jdl-bar">
                        <p className="txt-bar">
                            Serba 15rb
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
                    {/* Column1 Box */}
                    <div className="column1-box">
                        {/* Get data from JSON yg telah di buat API */}
                        {/* Lakukan ternary operation */}
                        {/* Dengan Condition ? yaitu if true : if false */}
                        {
                            srb15E2 ? srb15E2.map(function (i) {
                                return (
                                    <AllBoxSerba15rbE2 id1={i.id1} img1={i.img1} new1={i.new1} name1={i.name1} price1={i.price1} grade1={i.grade1} txtTerjual1={i.txtTerjual1} txtStock1={i.txtStock1} jmStock1={i.jmStock1} hrefView1={i.hrefView1} btnView1={i.btnView1} hrefBuy1={i.hrefBuy1} btnBuy1={i.btnBuy1} />
                                )
                                // When Condition loading WORK
                            }) : (
                                    <div className="load-15rb-E2">
                                        <p>Loat CUY</p>
                                    </div>
                                )
                        }
                        {/* END Get data from JSON yg telah di buat API */}
                    </div>
                    {/* END Column1 Box */}

                    {/* Column2 Box */}
                    <div className="column2-box">
                        {/* Get data from JSON yg telah di buat API */}
                        {/* Lakukan ternary operation */}
                        {/* Dengan Condition ? yaitu if true : if false */}
                        {
                            srb15rbE3 ? srb15rbE3.map(function (e) {
                                return (
                                    <AllBoxSerba15rbE3 id2={e.id2} img2={e.img2} new2={e.new2} name2={e.name2} price2={e.price2} grade2={e.grade2} txtTerjual2={e.txtTerjual2} txtStock2={e.txtStock2} jmStock2={e.jmStock2} hrefView2={e.hrefView2} btnView2={e.btnView2} hrefBuy2={e.hrefBuy2} btnBuy2={e.btnBuy2} />
                                )
                                // When Condition loading WORK
                            }) : (
                                    <div className="load-15rb-E3">
                                        <p>Loat cihuyY</p>
                                    </div>
                                )

                        }
                        {/* END Get data from JSON yg telah di buat API */}
                    </div>
                    {/* END Column2 Box */}
                </div>
                {/* END Wadah Box */}
            </div>
        </>
    )
}
// END Create Component for AllBoxSerba15rbE

// Export default for AllBoxSerba15rbE
export default AllBoxSerba15rbE
// END Export default for AllBoxSerba15rbE