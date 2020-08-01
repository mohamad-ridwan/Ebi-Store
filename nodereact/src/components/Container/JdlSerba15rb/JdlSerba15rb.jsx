// Import to React
import React from 'react'
// END Import to React

// Import to CSS for JdlSerba15rb
import '../JdlSerba15rb/JdlSerba15rb.css'
import JdlSerba15rbE from './JdlSerba15rbE'
// END Import to CSS for JdlSerba15rb

// Create Component for JdlSerba15rb
// Lakukan dengan return()
const JdlSerba15rb = function () {

    // Dummy data for JdlSerba15rbE
    const [jdlE, setJdlE] = React.useState()
    // END Dummy data for JdlSerba15rbE

    // Buat API for Get data from JSON
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/JdlSerbaFifteenrb', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(jdl15 => jdl15.json())
            .then(data => {
                setJdlE(data)
            })
    }, [])
    // END Buat API for Get data from JSON

    return (
        <>
            {/* Get Data from JSON yg telah di buat API */}
            {/* Lakukan ternary operation */}
            {/* With Condition ? that is if true : if false */}
            {/* Lakukan return di dalam function map */}
            {
                jdlE ? jdlE.map(function (i) {
                    return (
                        <JdlSerba15rbE jdl={i.jdl} />
                    )
                    // When Condition loading work
                }) : (
                        <div className="l-j-s-15rb">
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
            {/* END Get Data from JSON yg telah di buat API */}
        </>
    )
}
// END Create Component for JdlSerba15rb

// Export default for JdlSerba15rb
export default JdlSerba15rb
// END Export default for JdlSerba15rb