// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntChallangeE3
import '../CntChallange/CntChallangeE3.css'
// END Import to CSS for CntChallangeE3

// Create Component for CntChallangeE3
// Lakukan dengan return()
const CntChallangeE3 = function (get) {
    return (
        <>
            <div className="col1-s2">
                <div className="col-box-s2">
                    <div className="box-s2">
                        <img src={get.img2} alt="Image Not Found!" className="img-s2" />
                    </div>
                </div>
                <div className="col-txt-s2">
                    <p className="txt-s2">
                        {get.txt2}
                    </p>
                </div>
            </div>
            <div className="col2-s2">
                <a href="#" className="btn-check-s2">
                    {get.btn2}
                </a>
            </div>
        </>
    )
}
// END Create Component for CntChallangeE3

// Export default for CntChallangeE3
export default CntChallangeE3
// END Export default for CntChallangeE3