// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntPromoAkhirPekanE4
import '../CntPromoAkhirPekan/CntPromoAkhirPekanE4.css'
// END Import to CSS for CntPromoAkhirPekanE4

// Create Component for CntPromoAkhirPekanE4
// Lakukan dengan return()
const CntPromoAkhirPekanE4 = function (get) {
    return (
        <>
            <div className="box-btn-details">
                <a href="#" className="btn-details">
                    {get.btn}
                </a>
            </div>
        </>
    )
}
// END Create Component for CntPromoAkhirPekanE4

// Export default for CntPromoAkhirPekanE4
export default CntPromoAkhirPekanE4
// END Export default for CntPromoAkhirPekanE4