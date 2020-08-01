// Import to React
import React, { useEffect, useState } from 'react'
// END Import to React

// Import to CSS for CntSerba10rbE
import '../CntSerba10rb/CntSerba10rbE.css'
import CntSerba10rbE2 from './CntSerba10rbE2'
import CntSerba10rbE3 from './CntSerba10rbE3'
import CntSerba10rbE4 from './CntSerba10rbE4'
// END Import to CSS for CntSerba10rbE

// Create Component for CntSerba10rbE
// Lakukan dengan return()
const CntSerba10rbE = function () {

    // Dummy data for CntSerba10rbE2
    const [dumSrb10, setDumSrb10] = React.useState()
    // END Dummy data for CntSerba10rbE2

    // Buat API for mengambil data dari JSON for CntSerba10rbE2
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/CntSerbaTenrbTwo', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(cnt10rb => cnt10rb.json())
            .then(data => {
                setDumSrb10(data)
            })
    }, [])
    // END Buat API for mengambil data dari JSON for CntSerba10rbE2

    // Dummy data for CntSerba10rbE3
    const [dumSrb10E3, setDumSrb10E3] = React.useState()
    // END Dummy data for CntSerba10rbE3

    // Buat API for memanggil data dari JSON for CntSerba10rbE3
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/CntSerbaTenrbThree', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(cnt10rbE3 => cnt10rbE3.json())
            .then(dataE3 => {
                setDumSrb10E3(dataE3)
            })
    }, [])
    // END Buat API for memanggil data dari JSON for CntSerba10rbE3

    // Dummy data for CntSerba10rbE4
    const [dumSrb10E4, setDumSrb10E4] = React.useState()
    // END Dummy data for CntSerba10rbE4

    // Create API for get data from JSON for CntSerba10rbE4
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/CntSerbaTenrbFour', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(cnt10rbE4 => cnt10rbE4.json())
            .then(dataE4 => {
                setDumSrb10E4(dataE4)
            })
    }, [])
    // END Create API for get data from JSON for CntSerba10rbE4

    return (
        <>
            <div className="w-c-s-10rb">
                {/* Section1 */}
                <div className="section1">
                    {/* Ambil data dari JSON yg telah di buat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan condition ? yaitu if true : if false */}
                    {/* Lakukan return di dalam function map */}
                    {
                        dumSrb10 ? dumSrb10.map(function (i) {
                            return (
                                <CntSerba10rbE2 id1={i.id1} img1={i.img1} txtNew1={i.txtNew1} name1={i.name1} txtGrade1={i.txtGrade1} txtStock1={i.txtStock1} />
                            )
                            // When condition loading WORK
                        }) : (
                                <div className="load1-srb-10rb">
                                    <div className="col1-box1">
                                        <svg>
                                            <circle cx="20" cy="20" r="16">

                                            </circle>
                                        </svg>
                                    </div>
                                    <div className="col1-box2">
                                        <svg>
                                            <circle cx="20" cy="20" r="16">

                                            </circle>
                                        </svg>
                                    </div>
                                </div>
                            )
                        // When condition loading
                    }
                    {/* END Ambil data dari JSON yg telah di buat API */}
                </div>
                {/* END Section1 */}

                {/* Section2 */}
                <div className="section2">
                    {/* Ambil data dari JSON yg telah di buat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan condition ? yaitu if true : if false */}
                    {/* Lakukan return di dalam function map */}
                    {
                        dumSrb10E3 ? dumSrb10E3.map(function (e) {
                            return (
                                <CntSerba10rbE3 id2={e.id2} img2={e.img2} txtNew2={e.txtNew2} name2={e.name2} txtGrade2={e.txtGrade2} txtStock2={e.txtStock2} />
                            )
                            // When condition loading work
                        }) : (
                                <div className="load2-srb-10rb">
                                    <div className="col2-box1">
                                        <svg>
                                            <circle cx="20" cy="20" r="16">

                                            </circle>
                                        </svg>
                                    </div>
                                    <div className="col2-box2">
                                        <svg>
                                            <circle cx="20" cy="20" r="16">

                                            </circle>
                                        </svg>
                                    </div>
                                </div>
                            )
                        // END When condition loading work
                    }
                    {/* END Ambil data dari JSON yg telah di buat API */}
                </div>
                {/* END Section2 */}

                {/* Section3 */}
                <div className="section3">
                    {/* Get data from JSON yg telah di buat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan condition ? yaitu if true : if false */}
                    {/* Lakukan return di dalam function map */}
                    {
                        dumSrb10E4 ? dumSrb10E4.map(function (i) {
                            return (
                                <CntSerba10rbE4 btnView={i.btnView} />
                            )
                            // When condition loading work
                        }) : (
                                <div className="load3-srb-10rb">
                                    <p>loadingsssss</p>
                                </div>
                            )
                    }
                    {/* END Get data from JSON yg telah di buat API */}
                </div>
                {/* END Section3 */}
            </div>
        </>
    )
}
// END Create Component for CntSerba10rbE

// Export default for CntSerba10rbE
export default CntSerba10rbE
// END Export default for CntSerba10rbE