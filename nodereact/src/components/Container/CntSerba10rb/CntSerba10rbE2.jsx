// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntSerba10rbE2
import '../CntSerba10rb/CntSerba10rbE2.css'
// END Import to CSS for CntSerba10rbE2

// Create Component for CntSerba10rbE2
// Lakukan dengan return()
const CntSerba10rbE2 = function (get) {
    return (
        <>
            <div className="box-10-e2" id1={get.id1}>
                <a className="cont-img-p">
                    <img src={get.img1} alt="Image not found!, check your network!" />
                    <div className="cont-new">
                        <p className="txt-new">
                            {get.txtNew1}
                        </p>
                    </div>
                </a>
                <div className="cont-desk-p">
                    <div className="tit-name-p">
                        <p className="name-p">
                            {get.name1}
                        </p>
                    </div>
                    <div className="tit-grade">
                        <ul className="grade">
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <p className="txt-grade">
                                    {get.txtGrade1}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="tit-stock">
                        <p className="txt-stock">
                            {get.txtStock1}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
// END Create Component for CntSerba10rbE2

// Export default for CntSerba10rbE2
export default CntSerba10rbE2
// END Export default for CntSerba10rbE2