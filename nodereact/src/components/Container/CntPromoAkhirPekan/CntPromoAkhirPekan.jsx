// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntPromoAkhirPekan
import '../CntPromoAkhirPekan/CntPromoAkhirPekan.css'
import CntPromoAkhirPekanE from './CntPromoAkhirPekanE'
// END Import to CSS for CntPromoAkhirPekan

// Create Component for CntPromoAkhirPekan
// Lakukan dengan return()
const CntPromoAkhirPekan = function () {

    // Dummy data for CntPromoAkhirPekanE
    const [dmPapE, setDmPapE] = React.useState()
    // END Dummy data for CntPromoAkhirPekanE

    // Create API for get data from JSON
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/CntPromoAkhirPekan', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datPap => datPap.json())
            .then(data => {
                setDmPapE(data)
            })
    }, [])
    // END Create API for get data from JSON

    return (
        <>
            {/* Get data from JSON yg telah di buat API */}
            {/* Lakukan ternary operation */}
            {/* Dengan condition ? yaitu if true : if false */}
            {/* Lakukan return di dalam function map */}
            {
                dmPapE ? dmPapE.map(function (i) {
                    return (
                        <CntPromoAkhirPekanE Cont={i.Cont} />
                    )
                    // When Condition loading work
                }) : (
                        <div className="load-p-a-p-1">
                            <p>loading dlu ya</p>
                        </div>
                    )
            }
            {/* END Get data from JSON yg telah di buat API */}
        </>
    )
}
// END Create Component for CntPromoAkhirPekan

// Export default for CntPromoAkhirPekan
export default CntPromoAkhirPekan
// END Export default for CntPromoAkhirPekan