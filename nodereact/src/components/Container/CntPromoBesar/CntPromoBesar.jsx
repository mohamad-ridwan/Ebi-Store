// Import to React
import React, { component } from 'react'
// END Import to React

// Import to FILE Directory CntPromoBesar
import CntPromoBesarE from './CntPromoBesarE'
// END Import to FILE Directory CntPromoBesar

// Import to CSS CntPromoBesar
import '../CntPromoBesar/CntPromoBesar.css'
// END Import to CSS CntPromoBesar

// Create Component for CntPromoBesar
// Dan lakukan return()
const CntPromoBesar = function () {

    // Lakukan dummy data for CntPromoBesar
    const [dummyCtPmb, setDummyCtPmb] = React.useState([])
    // END Lakukan dummy data for CntPromoBesar

    // Buat API JSON untuk mengambil data dari JSON
    // Lakukan dengan function React.useEffect
    React.useEffect(function () {
        fetch('http://localhost:3003/CntPromoBesar', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(ctPmb => ctPmb.json())
            .then(data => {
                setDummyCtPmb(data)
            })
    }, [])
    // END Buat API JSON untuk mengambil data dari JSON

    return (
        <>
            <div className="container-c-p-b-c">
                {/* Ambil data dari JSON yg sudah dibuat dengan API */}
                {/* Lakukan ternary operation */}
                {/* Dengan Condition ? if true : if false */}

                {
                    dummyCtPmb ? dummyCtPmb.map(function (e) {
                        return (
                            <CntPromoBesarE id={e.id} href={e.href} img={e.img} />
                        )
                    }) : (
                            <div className="load">
                                <p className="loading">
                                    Memuat
                            </p>
                            </div>
                        )
                }

                {/* END Ambil data dari JSON yg sudah dibuat dengan API */}
            </div>
        </>
    )
}
// END Create Component for CntPromoBesar

// Export default for CntPromoBesar
export default CntPromoBesar
// END Export default for CntPromoBesar