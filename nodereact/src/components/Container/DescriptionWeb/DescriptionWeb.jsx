// Import to React
import React, { component } from 'react'
// END Import to React

// Import to FILE Directory
import DescriptionWebE from './DescriptionWebE'
// END Import to FILE Directory

// Import to CSS DescriptionWeb
import '../DescriptionWeb/DescriptionWeb.css'
// END Import to CSS DescriptionWeb

// Create Component for DescriptionWeb
// Lakukan dengan return()
const DescriptionWeb = function () {

    // Dummy data for DescriptionWeb
    const [dummyDskWeb, setDummyDskWeb] = React.useState([])
    // END Dummy data for DescriptionWeb

    // Create API dan ambil data dari JSON
    // Lakukan dengan function Fetch
    React.useEffect(function () {
        fetch('http://localhost:3003/DescriptionWeb', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(dsk => dsk.json())
            .then(data => {
                setDummyDskWeb(data)
            })
    }, [])

    // END Create API dan ambil data dari JSON

    return (
        <>
            <div className="container-dsk-w">
                {/* Lakukan ternary operation */}
                {/* Condition ? if true : if false */}
                {
                    dummyDskWeb ? dummyDskWeb.map(function (e) {
                        return (
                            <DescriptionWebE wadahButton={e.wadahButton} />
                        )
                        // When Condition loading page
                    }) : (
                            <div className="load-btn-desk">
                                <p className="lod">
                                    Loading
                                </p>
                            </div>
                        )
                    // When Condition loading page
                }
            </div>
        </>
    )
}

// END Create Component for DescriptionWeb

// Export default for DescriptionWeb
export default DescriptionWeb
// END Export default for DescriptionWeb