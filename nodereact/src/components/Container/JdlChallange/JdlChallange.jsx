// Import to React
import React from 'react'
// END Import to React

// Import to CSS for JdlChallange
import '../JdlChallange/JdlChallange.css'
import JdlChallangeE from './JdlChallangeE'
// END Import to CSS for JdlChallange

// Create Component for JdlChallange
// Lakukan dengan return()
const JdlChallange = function () {

    // Dummy data for jdl
    const [jdlCh, setJdlCh] = React.useState()
    // Dummy data for jdl

    // Create API for get data from JSON 
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/JdlChallange', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(tjdl => tjdl.json())
            .then(data => {
                setJdlCh(data)
            })
    }, [])
    // Create API for get data from JSON

    return (
        <>
            {/* Get data from JSON yg telah di buat API */}
            {/* Lakukan ternary operation */}
            {/* Dengan condition ? yaitu if true : if false */}
            {/* Lakukan return di dalam function map */}
            {
                jdlCh ? jdlCh.map(function (i) {
                    return (
                        <JdlChallangeE txtJdl={i.txtJdl} />
                    )
                    // When Condition loading WORK
                }) : (
                        <div className="load-jdl-Ch">
                            <p>Loading mulu mamam kwkwk</p>
                        </div>
                    )
            }
            {/* END Get data from JSON yg telah di buat API */}
        </>
    )
}
// END Create Component for JdlChallange

// Export default for JdlChallange
export default JdlChallange
// END Export default for JdlChallange