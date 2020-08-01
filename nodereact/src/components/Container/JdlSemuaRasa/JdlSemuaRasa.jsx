// Import to React
import React from 'react'
// END Import to React

// Import to CSS for JdlSemuaRasa
import '../JdlSemuaRasa/JdlSemuaRasa.css'
import JdlSemuaRasaE from './JdlSemuaRasaE'
// END Import to CSS for JdlSemuaRasa

// Create Component for JdlSemuaRasa
const JdlSemuaRasa = function () {

    // Lakukan dummy data
    const [jdlS, setJdlS] = React.useState([])
    // END Lakukan dummy data

    // Buat API untuk mengambil data dari JSON
    React.useEffect(function () {
        fetch(' http://localhost:3003/JdlSemuaRasa', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(judulS => judulS.json())
            .then(data => {
                setJdlS(data)
            })
    }, [])
    // END Buat API untuk mengambil data dari JSON



    return (
        <>
            <div className="j-s-r">
                {/* Ambil data dari JSON yang telah dibuat API */}
                {/* Lakukan ternary operation */}
                {/* Dengan condition ? yaitu > if true : if false */}

                {
                    jdlS ? jdlS.map(function (e) {
                        return (
                            <JdlSemuaRasaE wadah={e.wadah} txt={e.txt} />
                        )
                    }) : (
                            <div className="load-jdl">
                                <p>lod</p>
                            </div>
                        )
                }

                {/* END Ambil data dari JSON yang telah dibuat API */}
            </div>
        </>
    )
}
// END Create Component for JdlSemuaRasa

// Export default for JdlSemuaRasa

export default JdlSemuaRasa
// END Export default for JdlSemuaRasa