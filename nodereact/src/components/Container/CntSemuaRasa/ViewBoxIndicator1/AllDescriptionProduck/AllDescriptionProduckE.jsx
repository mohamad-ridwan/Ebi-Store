import React from 'react'

import { NavLink } from 'react-router-dom'

import '../AllDescriptionProduck/AllDescriptionProduckE.css'
import AllDescriptionProduckE2 from './AllDescriptionProduckE2'

const AllDescriptionProduckE = function () {

    // Dummy data for AllDescriptionProduckE2
    const [allDskProductE2, setAllDskProductE2] = React.useState()
    // END Dummy data for AllDescriptionProduckE2

    // Create API for get data from JSON for AllDescriptionProductE2
    React.useEffect(function () {
        fetch('http://localhost:3003/AllDescriptionProduckETwo', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datE2 => datE2.json())
            .then(data => {
                setAllDskProductE2(data)
            })
    }, [])
    // END Create API for get data from JSON for AllDescriptionProductE2

    return (
        <>
            <div className="cont-all-description-produck-box1">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-all-description">
                    <div className="btn-back">
                        <NavLink to='/vbox1semuarasa' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            Semua Deskripsi Makanan
                        </p>
                    </div>
                </div>
                {/* END Bar */}
                {/* END Column1 */}

                {/* Column2 */}
                <div className="col2-all-description">
                    {/* Section */}
                    <div className="section">
                        {/* Get data from JSON yg telah di buat API */}
                        {/* Lakukan ternary operation */}
                        {/* Dengan Condition ? yaitu if true : if false */}
                        {
                            allDskProductE2 ? allDskProductE2.map(function (e) {
                                return (
                                    <AllDescriptionProduckE2 jdlDsk={e.jdlDsk} txtDskProduct={e.txtDskProduct} jdlKomp={e.jdlKomp} txtKompProduct={e.txtKompProduct} />
                                )
                                // When Condition loading WORK
                            }) : (
                                    <div className="load-all-desk-product-box1">
                                        <p>LOADING COY</p>
                                    </div>
                                )
                        }
                        {/* END Get data from JSON yg telah di buat API */}
                    </div>
                    {/* END Section */}
                </div>
                {/* END Column2 */}
            </div>
        </>
    )
}

export default AllDescriptionProduckE