// Import to React
import React from 'react'
// END Import to React

// Import to CSS for JdlSemuaRasaE
import '../JdlSemuaRasa/JdlSemuaRasaE.css'
// END Import to CSS for JdlSemuaRasaE

// Create Component for JdlSemuaRasaE
// Dan lakukan dengan return()
const JdlSemuaRasaE = function (props) {
    return (
        <>
            <div className={props.wadah}>
                <p className="txt-jdl">
                    {props.txt}
                </p>
            </div>
        </>
    )
}
// END Create Component for JdlSemuaRasaE

// Export default for JdlSemuaRasaE
export default JdlSemuaRasaE
// END Export default for JdlSemuaRasaE