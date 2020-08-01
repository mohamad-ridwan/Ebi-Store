// Import to React
import React from 'react'
// END Import to React

// Import NavLink to React Router
import { NavLink } from 'react-router-dom'
// END Import NavLink to React Router

// Import to CSS for CntSerba10rbE4
import '../CntSerba10rb/CntSerba10rbE4.css'
// END Import to CSS for CntSerba10rbE4

// Create Component for CntSerba10rbE4
// Lakukan dengan return()
const CntSerba10rbE4 = function (get) {
    return (
        <>
            <div className="w-b-v-10rb-e4">
                <NavLink className="btn-view" to="/serba10rb">
                    {get.btnView}
                </NavLink>
            </div>
        </>
    )
}
// END Create Component for CntSerba10rbE4

// Export default CntSerba10rbE4
export default CntSerba10rbE4
// END Export default CntSerba10rbE4