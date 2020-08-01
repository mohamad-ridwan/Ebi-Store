// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntSerba10rb
import '../CntSerba10rb/CntSerba10rb.css'
import CntSerba10rbE from './CntSerba10rbE'
// END Import to CSS for CntSerba10rb

// Create Component for CntSerba10rb
// Lakukan dengan return()
const CntSerba10rb = function () {

    // Dummy Data
    const [dumCntS10rb, setDumCntS10rb] = React.useState()
    // END Dummy Data

    // Buat API untuk memanggil data dari JSON
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/CntSerbaTenrb', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(Cnt10rb => Cnt10rb.json())
            .then(data => {
                setDumCntS10rb(data)
            })
    }, [])
    // END Buat API untuk memanggil data dari JSON

    return (
        <>
            <div className="container-c-s-10rb">
                {/* Ambil data dari JSON yang telah di buat API */}
                {/* lakukan ternary operation */}
                {/* Dengan condition ? yaitu if true : if false */}
                {/* Lakukan return di dalam function map */}
                {
                    dumCntS10rb ? dumCntS10rb.map(function (i) {
                        return (
                            <CntSerba10rbE id={i.id} />
                        )
                        // When condition loading work
                    }) : (
                            <div className="load-papan-s-10rb">
                                <p className="txt-load">
                                    Memuat Data Produk
                                </p>
                                <div className="cont-load-point">
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
                            </div>
                        )
                    // END When condition loading work
                }
                {/* END Ambil data dari JSON yang telah di buat API */}
            </div>
        </>
    )
}
// END Create Component for CntSerba10rb

// Export default for CntSerba10rb
export default CntSerba10rb
// END Export default for CntSerba10rb