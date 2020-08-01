// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntPromoAkhirPekanE
import '../CntPromoAkhirPekan/CntPromoAkhirPekanE.css'
import CntPromoAkhirPekanE2 from './CntPromoAkhirPekanE2'
import CntPromoAkhirPekanE4 from './CntPromoAkhirPekanE4'
import CntPromoAkhirPekanE3 from './CntPromoAkhirPekanE3'
// END Import to CSS for CntPromoAkhirPekanE

// Create Component for CntPromoAkhirPekanE
// Lakukan dengan return()
const CntPromoAkhirPekanE = function (get) {

    // Dummy data for CntPromoAkhirPekanE2
    const [datPapE2, setDatPapE2] = React.useState()
    // END Dummy data for CntPromoAkhirPekanE2

    // Create API for get data from JSON
    // Lakukan dengan function FETCH
    // CntPromoAkhirPekanE2
    React.useEffect(function () {
        fetch('http://localhost:3003/CntPromoAkhirPekanETwo', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(PapE2 => PapE2.json())
            .then(dataE2 => {
                setDatPapE2(dataE2)
            })
    }, [])
    // END CntPromoAkhirPekanE2
    // END Create API for get data from JSON

    // Dummy data for CntPromoAkhirPekanE3
    const [datPapE3, setDatPapE3] = React.useState()
    // END Dummy data for CntPromoAkhirPekanE3

    // Create API for get data from JSON
    // Lakukan dengan function FETCH
    // CntPromoAkhirPekanE3
    React.useEffect(function () {
        fetch('http://localhost:3003/CntPromoAkhirPekanEThree', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(PapE3 => PapE3.json())
            .then(dataE3 => {
                setDatPapE3(dataE3)
            })
    }, [])
    // END CntPromoAkhirPekanE3
    // END Create API for get data from JSON 

    // Dummy data for CntPromoAkhirPekanE4
    const [datPapE4, setDatPapE4] = React.useState()
    // END Dummy data for CntPromoAkhirPekanE3

    // Create API for get data from JSON 
    // Lakukan dengan function FETCH
    // CntPromoAkhirPekanE4
    React.useEffect(function () {
        fetch('http://localhost:3003/CntPromoAkhirPekanEFour', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(PapE4 => PapE4.json())
            .then(dataE4 => {
                setDatPapE4(dataE4)
            })
    }, [])
    // END CntPromoAkhirPekanE4
    // END Create API for get data from JSON 

    return (
        <>
            <div className={get.Cont}>
                {/* Section1 */}
                <div className="section1">

                    {/* Column1 */}
                    {/* Get data from JSON yg telah di buat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan Condition ? if true : if false */}
                    {/* Lakukan return di dalam function map */}
                    {
                        datPapE2 ? datPapE2.map(function (i) {
                            return (
                                <CntPromoAkhirPekanE2 title1={i.title1} img1={i.img1} time1={i.time1} />
                            )
                            // When Condition loading work
                        }) : (
                                <div className="load-p-a-p-2">
                                    <div className="load-box1">
                                        <svg>
                                            <circle cx="20" cy="20" r="16">

                                            </circle>
                                        </svg>
                                    </div>
                                    <div className="load-box2">
                                        <svg>
                                            <circle cx="20" cy="20" r="16">

                                            </circle>
                                        </svg>
                                    </div>
                                </div>
                            )
                    }
                    {/* END Get data from JSON yg telah di buat API */}

                    {/* END Get data from JSON yg telah di buat API */}
                    {/* END Column1 */}

                    {/* Column2 */}
                    {/* Get data json from yg telah di buat API */}
                    {/* Lakukan ternary opeariton */}
                    {/* Dengan condition ? if true : if false */}
                    {/* Lakukan return di dalam function map */}
                    {
                        datPapE3 ? datPapE3.map(function (i1) {
                            return (
                                <CntPromoAkhirPekanE3 title2={i1.title2} img2={i1.img2} time2={i1.time2} />
                            )
                            // When condition loading work
                        }) : (
                                <div className="load-p-a-p-3">

                                </div>
                            )
                    }
                    {/* END Get data json from yg telah di buat API */}
                    {/* END Column2 */}
                </div>
            </div>
            {/* END Section1 */}

            {/* Section2 */}
            <div className="section2-p-a-p">
                {/* Get data from JSON yg telah di buat API */}
                {/* Lakukan ternary operation */}
                {/* Dengan Condition ? if true : if false */}
                {/* Lakukan return di dalam function map */}
                {
                    datPapE4 ? datPapE4.map(function (e) {
                        return (
                            <CntPromoAkhirPekanE4 btn={e.btn} icon={e.icon} />
                        )
                        // When Condition loading work
                    }) : (
                            <div className="load-p-a-p-4">
                                <div className="load-box">
                                    <svg>
                                        <circle cx="20" cy="20" r="10">

                                        </circle>
                                    </svg>
                                </div>
                            </div>
                        )
                }
            </div>
            {/* END Section2 */}
        </>
    )
}
// END Create Component for CntPromoAkhirPekanE

// Export default for CntPromoAkhirPekanE
export default CntPromoAkhirPekanE
// END Export default for CntPromoAkhirPekanE