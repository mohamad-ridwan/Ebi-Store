// Import to React
import React from 'react'
// END Import to React

// Import NavLink to React Router
import { NavLink } from 'react-router-dom'
// END Import NavLink to React Router

// Import to CSS for CntSerba15rbE4
import '../CntSerba15rb/CntSerba15rbE4.css'
// END Import to CSS for CntSerba15rbE4

// Create Component for CntSerba15rbE4
// Lakukan dengan return()
const CntSerba15rbE4 = function (get) {
    return (
        <>
            <div className="w-b-v-15rb-e4">
                <NavLink to="/serba15rb" className="btn-view">
                    {get.btnView}
                </NavLink>
            </div>
        </>
    )
}
// END Create Component for CntSerba15rbE4

// Export default for CntSerba15rbE4
export default CntSerba15rbE4
// END Export default for CntSerba15rbE4