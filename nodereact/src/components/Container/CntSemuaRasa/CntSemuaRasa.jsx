// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntSemuaRasa
import '../CntSemuaRasa/CntSemuaRasa.css'
import CntSemuaRasaE from './CntSemuaRasaE'
// END Import to CSS for CntSemuaRasa

// Create Component for CntSemuaRasa
// Lakukan dengan return()
const CntSemuaRasa = function () {

    // Dummy data for CntSemuaRasa
    const [dataCntSr, setDataCntSr] = React.useState()
    // END Dummy data for CntSemuaRasa

    // Buat API untuk mengambil data dari JSON
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/CntSemuaRasa', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(cntSr => cntSr.json())
            .then(data => {
                setDataCntSr(data)
            })
    }, [])
    // END Buat API untuk mengambil data dari JSON

    return (
        <>
            <div className="c-w-carousel">
                {/* Ambil data dari JSON yg telah di buat API */}
                {/* Lakukan ternary operation */}
                {/* Dengan condition ? if true : if false */}
                {/* Lakukan return di dalam function Map */}
                {
                    dataCntSr ? dataCntSr.map(function (i) {
                        return (
                            <CntSemuaRasaE />
                        )
                        // Lakukan condition saat loading data
                    }) : (
                            <div className="loading">
                                <p className="load">
                                    Memuat Data Produk
                                </p>

                                <div className="point-a">
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
                }
                {/* END Ambil data dari JSON yg telah di buat API */}
            </div>
        </>
    )
}
// END Create Component for CntSemuaRasa

// Export default for CntSemuaRasa
export default CntSemuaRasa
// END Export default for CntSemuaRasa