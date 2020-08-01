import React from 'react'

import { NavLink } from 'react-router-dom'

import '../CntPromoMinggu/CntPromoMingguE.css'
import CntPromoMingguE2 from './CntPromoMingguE2'
import CntPromoMingguE3 from './CntPromoMingguE3'

const CntPromoMingguE = function (get) {

    // Dummy data for CntPromoMingguE2
    const [PmME2, setPmME2] = React.useState()
    // END Dummy data for CntPromoMingguE2

    // Create API for get data from JSON for CntPromoMingguE2
    React.useEffect(function () {
        fetch('http://localhost:3003/CntPromoMingguETwo', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datPmME2 => datPmME2.json())
            .then(dataE2 => {
                setPmME2(dataE2)
            })
    }, [])
    // END Create API for get data from JSON for CntPromoMingguE2

    // Dummy data for CntPromoMingguE3
    const [PmME3, setPmME3] = React.useState()
    // END Dummy data for CntPromoMingguE3

    // Create API for get from JSON for CntPromoMingguE3
    React.useEffect(function () {
        fetch('http://localhost:3003/CntPromoMingguEThree', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datPmME3 => datPmME3.json())
            .then(dataE3 => {
                setPmME3(dataE3)
            })
    }, [])
    // END Create API for get from JSON for CntPromoMingguE3

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
                            Promo Minggu
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
                        {
                            PmME2 ? PmME2.map(function (i) {
                                return (
                                    <CntPromoMingguE2 id1={i.id1} img1={i.img1} percent1={i.percent1} name1={i.name1} price1={i.price1} hargaNormal1={i.hargaNormal1} potongan1={i.potongan1} grade1={i.grade1} txtTerjual1={i.txtTerjual1} txtStock1={i.txtStock1} jmStock1={i.jmStock1} hrefView1={i.hrefView1} btnView1={i.btnView1} hrefBuy1={i.hrefBuy1} btnBuy1={i.btnBuy1} />
                                )
                                // When Condition loading WORK
                            }) : (
                                    <div className="load-p-m-E2">
                                        <p>LOADING MINGGU</p>
                                    </div>
                                )
                        }
                    </div>
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="column2-box">
                        {
                            PmME3 ? PmME3.map(function (e) {
                                return (
                                    <CntPromoMingguE3 id2={e.id2} img2={e.img2} percent2={e.percent2} name2={e.name2} price2={e.price2} hargaNormal2={e.hargaNormal2} potongan2={e.potongan2} grade2={e.grade2} txtTerjual2={e.txtTerjual2} txtStock2={e.txtStock2} jmStock2={e.jmStock2} hrefView2={e.hrefView2} btnView2={e.btnView2} hrefBuy2={e.hrefBuy2} btnBuy2={e.btnBuy2} />
                                )
                                // When Condition loading WORK
                            }) : (
                                    <div className="load-p-m-E3">
                                        <p>LOADING COL2</p>
                                    </div>
                                )
                        }
                    </div>
                    {/* END Column2 */}
                </div>
                {/* END Column Box */}
            </div>
        </>
    )
}

export default CntPromoMingguE