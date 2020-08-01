// Import to React
import React from 'react'
// END Import to React

// Import to FILE Directory
import JdlPromoAkhirPekanE from './JdlPromoAkhirPekanE'
// END Import to FILE Directory

// Import to CSS for JdlPromoAkhirPekan
import '../JdlPromoAkhirPekan/JdlPromoAkhirPekan.css'
// END Import to CSS for JdlPromoAkhirPekan

// Create Component for JdlPromoAkhirPekan
// Lakukan dengan return()
const JdlPromoAkhirPekan = function () {

    // Dummy data for jdl
    const [dmJdl, setDmJdl] = React.useState()
    // END Dummy data for jdl

    // Create API for get data from JSON
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/JdlPromoAkhirPekan', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datJdl => datJdl.json())
            .then(data => {
                setDmJdl(data)
            })
    }, [])
    // Create API for get data from JSON

    return (
        <>
            {/* Ambil data dari JSON yg telah di buat API */}
            {/* Lakukan ternary operation */}
            {/* Dengan condition ? yaitu if true : if false */}
            {/* Lakukan return di dalam function map */}
            {
                dmJdl ? dmJdl.map(function (i) {
                    return (
                        <JdlPromoAkhirPekanE jdl={i.jdl} />
                    )
                    // When Condition loading work
                }) : (
                        <div className="load-jdl-p-a-p">
                            <p className="point1">
                                .
                            </p>
                            <p className="point2">
                                .
                            </p>
                            <p className="point3">
                                .
                            </p>
                        </div>
                    )
            }
            {/* END Ambil data dari JSON yg telah di buat API */}
        </>
    )
}
// END Create Component for JdlPromoAkhirPekan

// Export default for JdlPromoAkhirPekan
export default JdlPromoAkhirPekan
// END Export default for JdlPromoAkhirPekan