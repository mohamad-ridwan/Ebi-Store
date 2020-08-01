// Import to React
import React, { useEffect, useState } from 'react'
// END Import to React

// Import to CSS for AllBoxSerba10rb
import '../AllBoxSerba10rb/AllBoxSerba10rb.css'
import AllBoxSerba10rbE from './AllBoxSerba10rbE'
// END Import to CSS for AllBoxSerba10rb

// Create Component for AllBoxSerba10rb
const AllBoxSerba10rb = function () {

    // Dummy data for AllBoxSerba10rbE
    const [boxSrb10rb, setBoxSrb10rb] = React.useState()
    // END Dummy data for AllBoxSerba10rbE

    // Create API for get data from JSON for AllBoxSerba10rbE
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/AllBoxSerbaTenrb', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datBoxSrb10rb => datBoxSrb10rb.json())
            .then(data1 => {
                setBoxSrb10rb(data1)
            })
    }, [])
    // END Create API for get data from JSON for AllBoxSerba10rbE

    // Create parameter alias yg akan di gunakan dalam kasus hideScroll and AppearScroll
    let [hide, setHide] = useState(false)
    // END Create parameter alias yg akan di gunakan dalam kasus hideScroll and AppearScroll

    // Jalankan function useEffect yg akan dijalankan terlebih dahulu setelah EbiStore di LOAD
    useEffect(() => {
        // Aksi di dalam function UE
        let prevScroll = window.pageYOffset
        window.onscroll = () => {
            // Aksi di dalam function WO
            let currentScroll = window.pageYOffset
            // Lakukan perbandingan antara Variable ScrollAtas dan ScrollBawah
            // Dan lakukan kondisi Ternary Operation 
            prevScroll > currentScroll ? setHide(false) : setHide(true)

            prevScroll = currentScroll
        }
    }, [])
    // END Jalankan function useEffect yg akan dijalankan terlebih dahulu setelah EbiStore di LOAD

    return (
        <>
            {/* Get data from JSON yg telah di buat API */}
            {/* Lakukan ternary operation */}
            {/* Dengan condition ? yaitu if true : if false */}
            {/* Lakukan return di dalam function map */}
            {
                boxSrb10rb ? boxSrb10rb.map(function (i) {
                    return (
                        <AllBoxSerba10rbE container={i.container} keAtas={hide} />
                    )
                    // When Condition loading WORK
                }) : (
                        <div className="load-c-s-10rb">
                            <p>LOAD</p>
                        </div>
                    )
            }
            {/* END Get data from JSON yg telah di buat API */}
        </>
    )
}
// END Create Component for AllBoxSerba10rb

// Export default for AllBoxSerba10rb
export default AllBoxSerba10rb
// END Export default for AllBoxSerba10rb