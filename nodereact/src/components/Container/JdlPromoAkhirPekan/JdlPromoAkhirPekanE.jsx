// Import to React
import React from 'react'
// END Import to React

// Import to CSS for JdlPromoAkhirPekanE
import '../JdlPromoAkhirPekan/JdlPromoAkhirPekanE.css'
// END Import to CSS for JdlPromoAkhirPekanE

// Create Component for JdlPromoAkhirPekanE
// Lakukan dengan return()
const JdlPromoAkhirPekanE = function (get) {
    return (
        <>
            <div className="cont-jdl-p-a-p">
                <p className="txt-jdl">
                    {get.jdl}
                </p>
            </div>
        </>
    )
}
// END Create Component for JdlPromoAkhirPekanE

// Export default for JdlPromoAkhirPekanE
export default JdlPromoAkhirPekanE
// END Export default for JdlPromoAkhirPekanE