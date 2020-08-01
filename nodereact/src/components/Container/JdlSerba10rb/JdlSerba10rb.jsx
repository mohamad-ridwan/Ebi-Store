// Import to React
import React from 'react'
// END Import to React

// Import to CSS for JdlSerba10rb
import '../JdlSerba10rb/JdlSerba10rb.css'
import JdlSerba10rbE from './JdlSerba10rbE'
// END Import to CSS for JdlSerba10rb

// Create Component for JdlSerba10rb
// Lakukan dengan return()
const JdlSerba10rb = function () {

    // Dummy data
    const [judul, setJudul] = React.useState()
    // END Dummy data

    // Buat API untuk mengambil data dari JSON
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/JdlSerbaTenrb', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(tS10rb => tS10rb.json())
            .then(data => {
                setJudul(data)
            })
    }, [])
    // END Buat API untuk mengambil data dari JSON

    return (
        <>
            <div className="w-j-s-10rb">
                {/* Ambil data dari JSON yg telah di buat API */}
                {/* Lakukan ternary operation */}
                {/* Dengan condition ? if true : if false */}
                {/* Lakukan return di dalam function map */}
                {
                    judul ? judul.map(function (e) {
                        return (
                            <JdlSerba10rbE jdl={e.jdl} />
                        )
                        // Kondisi ketika false
                    }) : (
                            <div className="l-j-s-10rb">
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
            </div>
        </>
    )
}
// END Create Component for JdlSerba10rb

// Export default for JdlSerba10rb
export default JdlSerba10rb
// END Export default for JdlSerba10rb