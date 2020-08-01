// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntSerba15rbE
import '../CntSerba15rb/CntSerba15rbE.css'
import CntSerba15rbE3 from './CntSerba15rbE3'
import CntSerba15rbE2 from './CntSerba15rbE2'
import CntSerba15rbE4 from './CntSerba15rbE4'
// END Import to CSS for CntSerba15rbE

// Create Component for CntSerba15rbE
// Lakukan dengan return()
const CntSerba15rbE = function (get) {

    // Dummy data for CntSerba15rbE2
    const [CntTwo, setCntTwo] = React.useState()
    // END Dummy data for CntSerba15rbE2

    // Buat API untuk mengambil data dari JSON
    // Lakukan dengan function FETCH
    // CntSerba15rbE2
    React.useEffect(function () {
        fetch('http://localhost:3003/CntSerbaFifteenrbETwo', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(cnt2 => cnt2.json())
            .then(data2 => {
                setCntTwo(data2)
            })
    }, [])
    // END CntSerba15rbE2
    // END Buat API untuk mengambil data dari JSON

    // Dummy data for CntSerba15bE3
    const [CntThree, setCntThree] = React.useState()
    // END Dummy data for CntSerba15rbE3

    // Buat API for mengambil data dari JSON
    // Lakukan dengan function FETCH
    // CntSerba15rbE3
    React.useEffect(function () {
        fetch('http://localhost:3003/CntSerbaFifteenrbEThree', {
            method: "GET",
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(cnt3 => cnt3.json())
            .then(data3 => {
                setCntThree(data3)
            })
    }, [])
    // END CntSerba15rbE3
    // END Buat API for mengambil data dari JSON

    // Dummy data for CntSerba15rbE4
    const [CntFour, setCntFour] = React.useState()
    // END Dummy data for CntSerba15rbE4

    // Create API for get data from JSON
    // Lakukan dengan function FETCH
    // CntSerba15rbE4
    React.useEffect(function () {
        fetch('http://localhost:3003/CntSerbaFifteenrbEFour', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(cnt4 => cnt4.json())
            .then(data4 => {
                setCntFour(data4)
            })
    }, [])
    // END CntSerba15rbE4
    // END Create API for get data from JSON

    return (
        <>
            <div className={get.Cont}>
                {/* Section1 */}
                <div className="section1">
                    {/* Ambil data dari JSON yg telah di buat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan condition ? yaitu if true : if false */}
                    {/* Lakukan return di dalam function map */}
                    {
                        CntTwo ? CntTwo.map(function (i) {
                            return (
                                <CntSerba15rbE2 id1={i.id1} img1={i.img1} txtNew1={i.txtNew1} name1={i.name1} txtGrade1={i.txtGrade1} txtStock1={i.txtStock1} />
                            )
                            // When Condition loading work
                        }) : (
                                <div className="load1-srb-15rb">
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
                    }
                    {/* END Ambil data dari JSON yg telah di buat API */}
                </div>
                {/* END Section1 */}

                {/* Section2 */}
                <div className="section2">
                    {/* Ambil data dari JSON yg telah di buat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan condition ? yaitu if false : if true */}
                    {/* Lakukan return di dalam function map */}
                    {
                        CntThree ? CntThree.map(function (e) {
                            return (
                                <CntSerba15rbE3 id2={e.id2} img2={e.img2} txtNew2={e.txtNew2} name2={e.name2} txtGrade2={e.txtGrade2} txtStock2={e.txtStock2} />
                            )
                            // When Conditon loading work
                        }) : (
                                <div className="load2-srb-15rb">
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
                        CntFour ? CntFour.map(function (g) {
                            return (
                                <CntSerba15rbE4 btnView={g.btnView} />
                            )
                            // When condition loading work
                        }) : (
                                <div className="load3-srb-15rb">
                                    <p>loading mulu haha</p>
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
// END Create Component for CntSerba15rbE

// Export default for CntSerba15rbE
export default CntSerba15rbE
// END Export default for CntSerba15rbE