// Import to React
import React, { component } from 'react'
// END Import to React

// Import to CSS DescriptionWebE
import '../DescriptionWeb/DescriptionWebE.css'
// END Import to CSS DescriptionWebE

// Create Component for DescirptionWebE
// Lakukan dengan return()
const DescriptionWebE = function (props) {
    return (
        <>
            <div className={props.wadahButton}>
                {/* Button Description */}
                <button type="button" className="btn-dsk-w">
                    <div className="col1-dsk-w">
                        <p className="txt-btn-dsk">
                            Click to description Web
                        </p>
                    </div>
                    <div className="col2-dsk-w">
                        <i className="fas fa-caret-down"></i>
                    </div>
                </button>
                {/* END Button Description */}

                {/* Papan Description  */}
                <div className="p-dsk-w">
                    <p className="txt-p-dsk-w">
                        Suka dengan jajanan yang ringan dan murah seperti makaroni?,
                        <br></br><br />
                        Di EbiStore ini telah menyediakan berbagai macam aneka makaroni yang di buat EbiStore!,
                        <br></br><br />
                        Penasaran? Scroll aja.. 😊
                    </p>
                </div>
                {/* END Papan Description */}
            </div>
        </>
    )
}
// END Create Component for DescirptionWebE

// Export default for DescriptionWebE
export default DescriptionWebE
// END Export default for DescriptionWebE