// Import to React
import React from 'react'
// END Import to React

// Import to CSS for AllBoxSerba15rb
import '../AllBoxSerba15rb/AllBoxSerba15rb.css'
import AllBoxSerba15rbE from './AllBoxSerba15rbE'
// END Import to CSS for AllBoxSerba15rb

// Create Component for AllBoxSerba15rb
// Lakukan dengan return()
const AllBoxSerba15rb = function () {

    // Dummy data for AllBoxSerba15rbE
    const [dmSrb15E, setDmSrb15E] = React.useState()
    // END Dummy data for AllBoxSerba15rbE

    // Create API for get data from JSON for AllBoxSerba15rbE
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/AllBoxSerbaFifteenrb', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(dm15E => dm15E.json())
            .then(data15E => {
                setDmSrb15E(data15E)
            })
    }, [])
    // END Create API for get data from JSON for AllBoxSerba15rbE

    return (
        <>
            {/* Get data from JSON yg telah di buat API */}
            {/* Lakukan ternary operation */}
            {/* Dengan Condition ? yaitu if true : if false */}
            {
                dmSrb15E ? dmSrb15E.map(function (i) {
                    return (
                        <AllBoxSerba15rbE container={i.container} />
                    )
                    // When Condition loading WORK
                }) : (
                        <div className="load-srb-15rb">
                            <p>MEMUAT DLU LAH</p>
                        </div>
                    )
            }
            {/* END Get data from JSON yg telah di buat API */}
        </>
    )
}
// END Create Component for AllBoxSerba15rb

// Export default for AllBoxSerba15rb
export default AllBoxSerba15rb
// END Export default for AllBoxSerba15rb