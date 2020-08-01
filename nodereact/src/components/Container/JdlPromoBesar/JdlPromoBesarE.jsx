// Import to React
import React from 'react'
// END Import to React

// Import to CSS JdlPromoBesarE
import '../JdlPromoBesar/JdlPromoBesarE.css'
// END Import to CSS JdlPromoBesarE

// Create Component for JdlPromoBesarE
// Dan lakukan return dengan 
const JdlPromoBesarE = function (props) {
    return (
        <>
            <div className={props.wadah}>
                <a href="#" className="txt-jdl">
                    {props.txtJdl}
                </a>
            </div>
        </>
    )
}
// END Create Component for JdlPromoBesarE
export default JdlPromoBesarE
// Export default JdlpromoBesarE