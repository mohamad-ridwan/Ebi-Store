// Import to React
import React, { component } from 'react'
// END Import to React

// Import to CSS JdlPromoBesar
import '../JdlPromoBesar/JdlPromoBesar.css'
import JdlPromoBesarE from './JdlPromoBesarE'
// END Import to CSS JdlPromoBesar

// Create Component for JdlPromoBesar
// Lakukan dengan return()
const JdlPromoBesar = function () {

    // Lakukan dummy data for JdlPromoBesar
    const [dummyJdPromo, setDummyJdPromo] = React.useState([])
    // END Lakukan dummy data for JdlPromoBesar

    // Buat API untuk mengambil data dari JSON
    React.useEffect(function () {
        fetch('http://localhost:3003/JdlPromoBesar', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(jdpm => jdpm.json())
            .then(data => {
                setDummyJdPromo(data)
            })
    }, [])
    // END Buat API untuk mengambil data dari JSON

    return (
        <>
            <div className="container-jdl-p-b">
                {/* Ambil data dari JSON */}
                {/* Lakukan ternary operation */}
                {/* dengan Condition ? if true : if false */}

                {
                    dummyJdPromo ? dummyJdPromo.map(function (e) {
                        return (
                            <JdlPromoBesarE wadah={e.wadah} txtJdl={e.txtJdl} icon={e.icon} />
                        )
                    }) : (
                            <div className="loading">
                                <p className="load">
                                    loading
                                </p>
                            </div>
                        )
                }

                {/* END Ambil data dari JSON */}
            </div>
        </>
    )
}
// END Create Component for JdlPromoBesar

// Export default for JdlPromoBesar
export default JdlPromoBesar
// END Export default for JdlPromoBesar