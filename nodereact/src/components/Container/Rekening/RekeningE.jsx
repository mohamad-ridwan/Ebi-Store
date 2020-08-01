import React from 'react'

import { NavLink } from 'react-router-dom'

import './RekeningE.css'
import RekeningE2 from './RekeningE2'

const RekeningE = function (get) {

    // Dummy data for RekeningE2
    const [rekE2, setRekE2] = React.useState()
    // END Dummy data for RekeningE2

    // Create API for get data from JSON for RekeningE2
    React.useEffect(function () {
        fetch('http://localhost:3003/RekeningE', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(dataE2 => dataE2.json())
            .then(data => {
                setRekE2(data)
            })
    }, [])
    // END Create API for get data from JSON for RekeningE2 

    return (
        <>
            <div className="cont-rekening">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-rekening">
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            List Rekening Pembayaran
                        </p>
                    </div>
                </div>
                {/* END Bar */}
                {/* END Column1 */}

                {/* Column2 */}
                <div className="col2-rekening">
                    <p className="txt-desk-rek">
                        <i className="fas fa-exclamation"></i> Sistem pembayaran pada EbiStore ini hanya bisa di lakukan dengan rekening yang tercantum pada daftar rekening di EbiStore.
                    </p>
                </div>
                {/* END Column2 */}

                {/* Column3 */}
                <div className="col3-rekening">
                    {/* Get data from JSON yg telah dibuat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan Condition ? yaitu if true : if false */}
                    {
                        rekE2 ? rekE2.map(function (i) {
                            return (
                                <RekeningE2 id={i.id} img={i.img} txtNoRekening={i.txtNoRekening} noRekening={i.noRekening} />
                            )
                            // When condition loading WORK
                        }) : (
                                <div className="load-r-e">
                                    <p>MEMUAT REKENING</p>
                                </div>
                            )
                    }
                    {/* END Get data from JSON yg telah dibuat API */}
                </div>
                {/* END Column3 */}
            </div>
        </>
    )
}

export default RekeningE