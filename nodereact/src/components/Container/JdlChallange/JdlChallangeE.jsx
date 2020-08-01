// Import to React
import React from 'react'
// END Import to React

// Import to CSS for JdlChallangeE
import '../JdlChallange/JdlChallangeE.css'
// END Import to CSS for JdlChallangeE

// Create Component for JdlChallangeE
// Lakukan dengan return()
const JdlChallangeE = function (get) {
    return (
        <>
            <div className="w-jdl-c">
                <p className="txt-jdl-c">
                    {get.txtJdl}
                </p>
            </div>
        </>
    )
}
// END Create Component for JdlChallangeE

// Export default for JdlChallangeE
export default JdlChallangeE
// END Export default for JdlChallangeE