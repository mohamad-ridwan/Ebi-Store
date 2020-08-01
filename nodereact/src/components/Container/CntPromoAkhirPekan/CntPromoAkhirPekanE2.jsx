// Import to React
import React from 'react'
// END Import to React

import { NavLink } from 'react-router-dom'

// Import to CSS for CntPromoAkhirPekanE2
import '../CntPromoAkhirPekan/CntPromoAkhirPekanE2.css'
// END Import to CSS for CntPromoAkhirPekanE2

// Create Component for CntPromoAkhirPekanE2
// Lakukan dengan return()
const CntPromoAkhirPekanE2 = function (get) {
    return (
        <>
            {/* Column1 */}
            <div className="box-content-c1">
                <div className="c-title">
                    <p className="txt-tit">
                        {get.title1}
                    </p>
                </div>
                <NavLink to='promosabtu' className="c-img">
                    <img src={get.img1} alt="Image Not Found!" />
                </NavLink>
                <div className="c-time">
                    <p className="txt-time">
                        {get.time1}
                    </p>
                </div>
            </div>
            {/* END Column1 */}
        </>
    )
}
// END Create Component for CntPromoAkhirPekanE2

// Export default for CntPromoAkhirPekanE2
export default CntPromoAkhirPekanE2
// END Export default for CntPromoAkhirPekanE2