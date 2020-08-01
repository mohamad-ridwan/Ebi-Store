// Import to React
import React from 'react'
// END Import to React

// Import to CSS for CntSerba10rbE3
import '../CntSerba10rb/CntSerba10rbE3.css'
// END Import to CSS for CntSerba10rbE3

// Create Component for CntSerba10rbE3
// Lakukan dengan return()
const CntSerba10rbE3 = function (get) {
    return (
        <>
            <div className="box-10-e3" id2={get.id2}>
                <a className="cont-img-p">
                    <img src={get.img2} alt="Image not found!, check your network!" />
                    <div className="cont-new">
                        <p className="txt-new">
                            {get.txtNew2}
                        </p>
                    </div>
                </a>
                <div className="cont-desk-p">
                    <div className="tit-name-p">
                        <p className="name-p">
                            {get.name2}
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
                                    {get.txtGrade2}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="tit-stock">
                        <p className="txt-stock">
                            {get.txtStock2}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
// END Create Component for CntSerba10rbE3

// Export default for CntSerba10rbE3
export default CntSerba10rbE3
// END Export default for CntSerba10rbE3