// Import to React
import React from 'react'
// END Import to React

// Import to CSS for ContainerAn
import '../ContainerAfterNav/ContainerAn.css'
import ContainerAnE from './ContainerAnE'
// END Import to CSS for ContainerAn

// Create Component for ContainerAn
// Lakukan dengan return()
const ContainerAn = function () {

    // Dummy data
    const [datContAn, setDatContAn] = React.useState()
    // END Dummy data

    // Buat API untuk mengambil data dari JSON
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/ContainerAn', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(cntAn => cntAn.json())
            .then(data => {
                setDatContAn(data)
            })
    }, [])
    // END Buat API untuk mengambil data dari JSON

    return (
        <>
            {/* Ambil data dari JSON yg telah di buat API */}
            {/* Lakukan ternary operation */}
            {/* Dengan cara condition ? if true : if false */}
            {/* Lakukan return di dalam function map */}
            {
                datContAn ? datContAn.map(function (i) {
                    return (
                        <ContainerAnE container={i.container} />
                    )
                }) : (
                        <div className="con-load">
                            <div className="a-load">
                                <p className="txt-load">
                                    Memuat Data EbiStore...
                                </p>
                            </div>

                            <img src="macaroni.svg" alt="" className="icon-macaroni" />
                        </div>


                    )
            }
            {/* END Ambil data dari JSON yg telah di buat API */}
        </>
    )
}
// END Create Component for ContainerAn

// Export default for ContainerAn
export default ContainerAn
// END Export default for ContainerAn