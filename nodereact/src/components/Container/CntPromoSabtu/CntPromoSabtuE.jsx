import React from 'react'

import { NavLink } from 'react-router-dom'

import '../CntPromoSabtu/CntPromoSabtuE.css'
import CntPromoSabtuE2 from './CntPromoSabtuE2'
import CntPromoSabtuE3 from './CntPromoSabtuE3'

const CntPromoSabtuE = function (get) {

    // Dummy data for CntPromoSabtuE2
    const [pmSabtuE2, setPmSabtuE2] = React.useState()
    // END Dummy data for CntPromoSabtuE2

    // Create API for get data from JSON for CntPromoSabtuE2
    React.useEffect(function () {
        fetch('http://localhost:3003/CntPromoSabtuETwo', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datPmSE2 => datPmSE2.json())
            .then(dataE2 => {
                setPmSabtuE2(dataE2)
            })
    }, [])
    // END Create API for get data from JSON for CntPromoSabtuE2

    // Dummy data for CntPromoSabtuE3
    const [pmSabtuE3, setPmSabtuE3] = React.useState()
    // END Dummy data for CntPromoSabtuE3

    // Create API for get data from JSON for CntPromoSabtuE3
    React.useEffect(function () {
        fetch('http://localhost:3003/CntPromoSabtuEThree', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datPmSE3 => datPmSE3.json())
            .then(dataE3 => {
                setPmSabtuE3(dataE3)
            })
    }, [])
    // END Create API for get data from JSON for CntPromoSabtuE3

    return (
        <>
            <div className={get.container}>
                {/* Bar */}
                <div className="col-bar">
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>

                    <div className="title1-bar">
                        <p className="txt-tit1">
                            Promo Akhir Pekan
                        </p>
                    </div>
                    <div className="title2-bar">
                        <p className="txt-tit2">
                            Promo Sabtu
                        </p>
                    </div>

                </div>
                {/* END Bar */}

                {/* Papan Deskripsi Promo */}
                <div className="col-p-d-promo">
                    <p className="txt-desk">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis dolore eos, quasi quam ipsam adipisci quisquam nulla libero consequatur, architecto dicta quae earum officia!
                    </p>

                    <p className="txt-ket-time-desk">
                        Promo ini akan berakhir dalam :
                    </p>
                    <p className="txt-time">
                        Promo Berakhir !!
                    </p>
                </div>
                {/* END Papan Deskripsi Promo */}

                {/* Column Box */}
                <div className="col-box">
                    {/* Column1 */}
                    <div className="column1-box">
                        {/* Get data from JSON yg telah di buat API */}
                        {/* Lakukan ternary operation */}
                        {/* Dengan condition ? yaitu if true : if false */}
                        {
                            pmSabtuE2 ? pmSabtuE2.map(function (i) {
                                return (
                                    <CntPromoSabtuE2 id1={i.id1} img1={i.img1} percent1={i.percent1} name1={i.name1} price1={i.price1} hargaNormal1={i.hargaNormal1} potongan1={i.potongan1} grade1={i.grade1} txtTerjual1={i.txtTerjual1} txtStock1={i.txtStock1} jmStock1={i.jmStock1} hrefView1={i.hrefView1} btnView1={i.btnView1} hrefBuy1={i.hrefBuy1} btnBuy1={i.btnBuy1} />
                                )
                                // When condition loading WORK
                            }) : (
                                    <div className="load-p-s-E2">
                                        <p>LOAD</p>
                                    </div>
                                )
                        }
                        {/* END Get data from JSON yg telah di buat API */}
                    </div>
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="column2-box">
                        {/* Get data from JSON yg telah di buat API */}
                        {/* Lakukan ternaru operation */}
                        {/* Dengan condition ? yaitu if true : if false */}
                        {
                            pmSabtuE3 ? pmSabtuE3.map(function (e) {
                                return (
                                    <CntPromoSabtuE3 id2={e.id2} img2={e.img2} percent2={e.percent2} name2={e.name2} price2={e.price2} hargaNormal2={e.hargaNormal2} potongan2={e.potongan2} grade2={e.grade2} txtTerjual2={e.txtTerjual2} txtStock2={e.txtStock2} jmStock2={e.jmStock2} hrefView2={e.hrefView2} btnView2={e.btnView2} hrefBuy2={e.hrefBuy2} btnBuy2={e.btnBuy2} />
                                )
                                // When Condition loading WORK
                            }) : (
                                    <div className="load-p-s-E3">
                                        <p>LOADING</p>
                                    </div>
                                )
                        }
                        {/* END Get data from JSON yg telah di buat API */}
                    </div>
                    {/* END Column2 */}
                </div>
                {/* END Column Box */}
            </div>
        </>
    )
}

export default CntPromoSabtuE