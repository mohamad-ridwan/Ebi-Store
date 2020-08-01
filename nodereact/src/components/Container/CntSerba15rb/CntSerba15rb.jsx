// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntSerba15rb
import '../CntSerba15rb/CntSerba15rb.css'
import CntSerba15rbE from './CntSerba15rbE'
// END Import to CSS for CntSerba15rb

// Create Component for CntSerba15rb
// Lakukan dengan return()
const CntSerba15rb = function () {

    // Dummy data for CntSerba15rbE
    const [Cnt, setCnt] = React.useState()
    // END Dummy data for CntSerba15rbE

    // Buat API for memanggil data dari JSON
    // For CntSerba15rbE
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/CntSerbaFifteenrb', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(srb15 => srb15.json())
            .then(data => {
                setCnt(data)
            })
    }, [])
    // END For CntSerba15rbE
    // Buat API for memanggil data dari JSON

    return (
        <>
            {/* Ambil data dari JSON yg telah di buat API */}
            {/* Lakukan ternary operation */}
            {/* Dengan Condition ? yaitu if true : if false */}
            {/* Lakukan return di dalam function map */}
            {
                Cnt ? Cnt.map(function (i) {
                    return (
                        <CntSerba15rbE Cont={i.Cont} />
                    )
                    // When Condition loading work
                }) : (
                        <div className="load-w-c-sb-15rb">
                            <p>MEMUAT</p>
                        </div>
                    )
            }
            {/* END Ambil data dari JSON yg telah di buat API */}
        </>
    )
}
// END Create Component for CntSerba15rb

// Export default for CntSerba15rb
export default CntSerba15rb
// END Export default for CntSerba15rb