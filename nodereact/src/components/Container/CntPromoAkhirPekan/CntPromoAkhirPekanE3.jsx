// Import to React
import React from 'react'
// END Import to React

// Import NavLink to React Router
import { NavLink } from 'react-router-dom'
// END Import NavLink to React Router

// Import to CSS for CntPromoAkhirPekanE3
import '../CntPromoAkhirPekan/CntPromoAkhirPekanE3.css'
// END Import to CSS for CntPromoAkhirPekanE3

// Create Component for CntPromoAkhirPekanE3
// Lakukan dengan return()
const CntPromoAkhirPekanE3 = function (get) {
    return (
        <>
            {/* Column2 */}
            <div className="box-content-c2">
                <div className="c-title">
                    <p className="txt-tit">
                        {get.title2}
                    </p>
                </div>
                <NavLink to='/promominggu' className="c-img">
                    <img src={get.img2} alt="Image Not Found!" />
                </NavLink>
                <div className="c-time">
                    <p className="txt-time">
                        {get.time2}
                    </p>
                </div>
            </div>
            {/* END Column2 */}
        </>
    )
}
// END Create Component for CntPromoAkhirPekanE3

// Export default for CntPromoAkhirPekanE3
export default CntPromoAkhirPekanE3
// END Export default for CntPromoAkhirPekanE3