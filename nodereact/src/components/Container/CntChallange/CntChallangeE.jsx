// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntChallangeE
import '../CntChallange/CntChallangeE.css'
import CntChallangeE2 from './CntChallangeE2'
import CntChallangeE3 from './CntChallangeE3'
// END Import to CSS for CntChallangeE

// Create Component for CntChallangeE
// Lakukan dengan return()
const CntChallangeE = function () {

    // Dummy data for CntChallangeE2
    const [chE2, setChE2] = React.useState()
    // END Dummy data for CntChallangeE2

    // Create API for get data from JSON for CntChallangeE2
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/CntChallangeETwo', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datChE2 => datChE2.json())
            .then(dataE2 => {
                setChE2(dataE2)
            })
    }, [])
    // END Create API for get data from JSON for CntChallangeE2

    // Dummy data for CntChallangeE3
    const [chE3, setChE3] = React.useState()
    // END Dummy data for CntChallangeE3

    // Create API for get data from JSON for CntChallangeE3
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/CntChallangeEThree', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datChE3 => datChE3.json())
            .then(dataE3 => {
                setChE3(dataE3)
            })
    }, [])
    // END Create API for get data from JSON for CntChallangeE3

    return (
        <>
            <div className="c-challange">
                <div className="section1-ch">
                    {/* Get data from JSON yg telah di buat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan Condition ? if true : if false */}
                    {/* Lakukan return di dalam function map */}
                    {
                        chE2 ? chE2.map(function (i) {
                            return (
                                <CntChallangeE2 img1={i.img1} txt1={i.txt1} btn1={i.btn1} />
                            )
                            // When Condition loadin WORK
                        }) : (
                                <div className="load1-c-c-e2">
                                    <p>Loadieng</p>
                                </div>
                            )
                    }
                    {/* END Get data from JSON yg telah di buat API */}
                </div>
                <div className="section2-ch">
                    {/* Get data from json yg telah di buat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan Condition ? yaitu if true : if false */}
                    {/* Lakukan return di dalam function map */}
                    {
                        chE3 ? chE3.map(function (e) {
                            return (
                                <CntChallangeE3 img2={e.img2} txt2={e.txt2} btn2={e.btn2} />
                            )
                            // When Condition loading WORK
                        }) : (
                                <div className="load2-c-c-e3">
                                    <p>memuat</p>
                                </div>
                            )
                    }
                    {/* END Get data from json yg telah di buat API */}
                </div>
            </div>
        </>
    )
}
// END Create Component for CntChallangeE

// Export default for CntChallangeE
export default CntChallangeE
// END Export default for CntChallangeE