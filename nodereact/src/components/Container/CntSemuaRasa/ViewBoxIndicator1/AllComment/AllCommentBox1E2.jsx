import React from 'react'

import { Link } from 'react-router-dom'

import './AllCommentBox1E2.css'

const AllCommentBox1E2 = function (get) {
    return (
        <>
            <div className="section-all-comment" id={get.id}>
                {/* Kolom Name User */}
                <div className="kol-name-user">
                    {/* Picture User */}
                    <div className="circle-pic-u">
                        <img src={get.imgProfile} alt="" className="img-u" />
                    </div>
                    {/* END Picture User */}

                    {/* Name User */}
                    <div className="name-u">
                        <p className="txt-name-u">
                            {get.namaProfile}
                        </p>
                    </div>
                    {/* END Name User */}

                    {/* Rate User */}
                    <div className="rate-comment">
                        <ul>
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
                        </ul>
                    </div>
                    {/* END Rate User */}
                </div>
                {/* END Kolom Name User */}

                {/* Kolom Text User */}
                <div className="kol-txt-user">
                    <div className="body-txt-user">
                        <Link to='/' className="col-img-comment-user">
                            <img src={get.imgCommentUser} alt="" className="img-comment-user" />
                        </Link>
                        <p className="txt-user">
                            {get.bodyTxtUser}
                        </p>
                        <p className="time-comment-user">
                            {get.timeCommentUser}
                        </p>
                    </div>
                </div>
                {/* END Kolom Text User */}

                {/* Kolom button Text User */}
                <div className="kol-btn-comment-user">
                    {/* Like */}
                    <div className="w-btn-like">
                        <a href="#" className="btn-like">
                            <i className={get.btnLikeCommentUser}></i>
                        </a>
                        <p className="txt-jm-like">
                            {get.txtJmLikeCommentUser}
                        </p>
                    </div>
                    {/* END Like */}

                    {/* Dislike */}
                    <div className="w-btn-dislike">
                        <a href="#" className="btn-dislike">
                            <i className={get.btnDislikeCommentUser}></i>
                        </a>
                        <p className="txt-jm-dislike">
                            {get.txtJmDislikeCommentUser}
                        </p>
                    </div>
                    {/* END Dislike */}

                    {/* Delete */}
                    <div className="w-btn-delete">
                        <a href="#" className="btn-delete">
                            <i className={get.btnDeleteCommentUser}></i>
                        </a>
                        <p className="txt-delete">
                            {get.txtDeleteCommentUser}
                        </p>
                    </div>
                    {/* END Delete */}
                </div>
                {/* END Kolom button Text User */}
            </div>
        </>
    )
}

export default AllCommentBox1E2