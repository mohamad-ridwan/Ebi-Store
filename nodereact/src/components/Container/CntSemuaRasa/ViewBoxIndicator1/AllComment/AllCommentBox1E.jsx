import React from 'react'

import { NavLink } from 'react-router-dom'

import './AllCommentBox1E.css'
import AllCommentBox1E2 from './AllCommentBox1E2'

const AllCommentBox1E = function () {

    // Dummy data for AllCommentBox1E2
    const [allCmBox1E2, setAllCmBox1E2] = React.useState()
    // END Dummy data for AllCommentBox1E2

    // Create API for get data from JSON for AllCommentBox1E2
    React.useEffect(function () {
        fetch('http://localhost:3003/AllCommentBoxOneETwo', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datBox1E2 => datBox1E2.json())
            .then(dataE2 => {
                setAllCmBox1E2(dataE2)
            })
    }, [])
    // END Create API for get data from JSON for AllCommentBox1E2

    return (
        <>
            <div className="cont-all-comment-box1">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-all-comment">
                    <div className="btn-back">
                        <NavLink to='/vbox1semuarasa' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            Semua Komentar
                        </p>
                    </div>
                    <div className="col-swipe-up">
                        <a href="#" className="btn-swipe-up">
                            <i className="fas fa-arrow-circle-up"></i>
                            <p className="txt-swipe">
                                Swipe up
                            </p>
                        </a>
                    </div>
                </div>
                {/* END Bar */}
                {/* END Column1 */}

                {/* Column2 */}
                <div className="col2-all-comment">
                    {/* Isi dari semua komentar */}
                    {/* Get data from JSON yg telah di buat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan condition ? yaitu if true : if false */}
                    {
                        allCmBox1E2 ? allCmBox1E2.map(function (e) {
                            return (
                                <AllCommentBox1E2 id={e.id} imgProfile={e.imgProfile} namaProfile={e.namaProfile} imgCommentUser={e.imgCommentUser} bodyTxtUser={e.bodyTxtUser} timeCommentUser={e.timeCommentUser} btnLikeCommentUser={e.btnLikeCommentUser} txtJmLikeCommentUser={e.txtJmLikeCommentUser} btnDislikeCommentUser={e.btnDislikeCommentUser} txtJmDislikeCommentUser={e.txtJmDislikeCommentUser} btnDeleteCommentUser={e.btnDeleteCommentUser} txtDeleteCommentUser={e.txtDeleteCommentUser} />
                            )
                            // When Condition loading WORK
                        }) : (
                                <div className="load-all-comment">
                                    <p>MEMUAT ALL COMMENT</p>
                                </div>
                            )
                    }
                    {/* END Get data from JSON yg telah di buat API */}
                    {/* END Isi dari semua komentar */}
                </div>
                {/* END Column2 */}
            </div>
        </>
    )
}

export default AllCommentBox1E