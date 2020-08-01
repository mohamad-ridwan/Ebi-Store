// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntChallangeE2
import '../CntChallange/CntChallangeE2.css'
// END Import to CSS for CntChallangeE2

// Create Component for CntChallangeE2
// Lakukan dengan return()
const CntChallangeE2 = function (get) {
    return (
        <>
            <div className="col1-s1">
                <div className="col-box-s1">
                    <div className="box-s1">
                        <img src={get.img1} alt="Image Not Found!" className="img-s1" />
                    </div>
                </div>
                <div className="col-txt-s1">
                    <p className="txt-s1">
                        {get.txt1}
                    </p>
                </div>
            </div>
            <div className="col2-s1">
                <a href="#" className="btn-check-s1">
                    {get.btn1}
                </a>
            </div>
        </>
    )
}
// END Create Component for CntChallangeE2

// Export default for CntChallangeE2
export default CntChallangeE2
// END Export default for CntChallangeE2