import React from 'react'

import { NavLink } from 'react-router-dom'

import '../ViewBoxIndicator1/ViewBoxIndicator1E.css'
import ViewBoxIndicator1E2 from './ViewBoxIndicator1E2'
import ViewBoxIndicator1E3 from './ViewBoxIndicator1E3'

const ViewBoxIndicator1E = function (get) {

    // Dummy data fot ViewBoxIndicator1E2
    const [vBox1E2, setvBox1E2] = React.useState()
    // END Dummy data fot ViewBoxIndicator1E2

    // Create API for get data from JSON for ViewBoxIndicator1E2
    React.useEffect(function () {
        fetch('http://localhost:3003/ViewBoxIndicatorOneETwo', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datE2 => datE2.json())
            .then(dataE2 => {
                setvBox1E2(dataE2)
            })
    }, [])
    // END Create API for get data from JSON for ViewBoxIndicator1E2

    // Dummy data for ViewBoxIndicator1E3
    const [vBox1E3, setvBox1E3] = React.useState()
    // END Dummy data for ViewBoxIndicator1E3

    // Create API for get data from JSON for ViewBoxIndicator1E3
    React.useEffect(function () {
        fetch('http://localhost:3003/ViewBoxIndicatorOneEThree', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datE3 => datE3.json())
            .then(dataE3 => {
                setvBox1E3(dataE3)
            })
    }, [])
    // END Create API for get data from JSON for ViewBoxIndicator1E3

    return (
        <>
            {/* Container */}
            <div className="cont-v-box-i-1">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-v-box">
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            View Food
                        </p>
                    </div>
                    <div className="button-next">
                        <NavLink to='#' className="btn">
                            Lanjut Pembayaran
                            <div className="col-icon-next">
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>
                        </NavLink>
                    </div>
                </div>
                {/* END Bar */}
                {/* END Column1 */}

                {/* Column2 */}
                {/* Carousel */}
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        {/* Isinya Carousel Item */}

                        {/* Get data from JSON yg telah di buat API */}
                        {/* Lakukan ternary operation */}
                        {/* Dengan Condition ? if true : if false */}
                        {
                            vBox1E2 ? vBox1E2.map(function (e) {
                                return (
                                    <ViewBoxIndicator1E2 carouselItem={e.carouselItem} to={e.to} imgCarousel={e.imgCarousel} />
                                )
                                // When Condition loading WORK
                            }) : (
                                    <div className="load-img-c">
                                        <p>MEMUAT DLU YA HIHIHI</p>
                                    </div>
                                )
                        }
                        {/* END Get data from JSON yg telah di buat API */}

                        {/* END Isinya Carousel Item */}
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                {/* END Carousel */}
                {/* END Column2 */}

                {/* Column3 */}
                <div className="col3-v-box">
                    {/* Name Produk */}
                    {/* Kolom1 */}
                    <div className="kolumn1">
                        <p className="txt-jdl-name-p">
                            {get.txtJdlNamaMakanan}
                        </p>
                        <p className="txt-name-p">
                            {get.namaProduk}
                        </p>
                    </div>
                    {/* END Kolom1 */}
                    {/* END Name Produk */}


                    {/* Price Produk */}
                    {/* Kolom 2 */}
                    <div className="kolumn2">
                        {/* Section1 */}
                        <div className="section1">
                            <p className="txt-price-p">
                                {get.priceProduk}
                            </p>
                            <p className="txt-jdl-price-p">
                                {get.txtJdlHargaNormal}
                            </p>
                            <p className="txt-discount-p">
                                {get.priceDiscount}
                            </p>
                        </div>
                        {/* END Section1 */}
                        {/* Section2 */}
                        <div className="section2">
                            <p className="txt-jdl-t-p">
                                {get.txtJdlTerjualP}
                            </p>
                            <div className="grade-star">
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
                                    <p className="txt-jm-t-p">
                                        {get.txtJmP}
                                    </p>
                                    <p className="txt-t-p">
                                        {get.txtTerjual}
                                    </p>
                                </ul>
                            </div>
                            <p className="txt-jdl-jm-t-p">
                                {get.txtJdlJmTersediaP}
                            </p>
                            <p className="txt-stock">
                                {get.txtStock}
                            </p>
                        </div>
                        {/* END Section2 */}
                    </div>
                    {/* END Kolom2 */}
                    {/* END Price Produk */}
                </div>
                {/* END Column3 */}

                {/* Column4 */}
                <div className="col4-v-box">
                    <div className="section1">
                        <p className="txt-jm-like">
                            {get.txtJmLike}
                        </p>
                        <a href="#" className="btn-like">
                            <i className={get.btnLike}></i>
                        </a>
                        <p className="txt-like">
                            {get.txtLike}
                        </p>
                    </div>
                    <div className="section2">
                        <a href="#" className="btn-favorit">
                            <i className={get.btnFavorit}></i>
                        </a>
                        <p className="txt-favorit">
                            {get.txtFavorit}
                        </p>
                    </div>
                    <div className="section3">
                        <a href="#" className="btn-keranjang">
                            <i className={get.btnKeranjang}></i>
                        </a>
                        <p className="txt-keranjang">
                            {get.txtKeranjang}
                        </p>
                    </div>
                </div>
                {/* END Column4 */}

                {/* Column5 */}
                <div className="col5-v-box">
                    <p className="txt-jdl-desk-p">
                        {get.txtJdlDeskP}
                    </p>
                    <div className="kol-desk-p">
                        <p className="txt-desk-p">
                            {get.txtDeskP}
                        </p>
                    </div>
                    <div className="kol-btn-desk">
                        <NavLink to={get.toBtnLinkAllDesk} className="btn-desk">
                            {get.txtBtnLinkAllDesk}
                        </NavLink>
                    </div>
                </div>
                {/* END Column5 */}

                {/* Column6 */}
                <div className="col6-v-box">
                    {/* Section1 */}
                    <div className="section1">
                        <div className="jdl-koment">
                            <p className="txt-koment">
                                {get.txtKomentar}
                            </p>
                        </div>
                        <div className="jdl-t-koment">
                            <a href="#" className="kol-jdl">
                                <i className={get.iconKomentar}></i>
                                <p className="txt-t-koment">
                                    {get.txtTulisKomentar}
                                </p>
                            </a>
                        </div>
                    </div>
                    {/* END Section1 */}

                    {/* Section2 */}

                    {/* Get data from JSON yg telah di buat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan Condition ? yaitu if true : if false */}
                    {
                        vBox1E3 ? vBox1E3.map(function (i) {
                            return (
                                <ViewBoxIndicator1E3 id={i.id} imgProfile={i.imgProfile} namaProfile={i.namaProfile} bodyTxtUser={i.bodyTxtUser} timeCommentUser={i.timeCommentUser} btnLikeCommentUser={i.btnLikeCommentUser} txtJmLikeCommentUser={i.txtJmLikeCommentUser} btnDislikeCommentUser={i.btnDislikeCommentUser} txtJmDislikeCommentUser={i.txtJmDislikeCommentUser} btnDeleteCommentUser={i.btnDeleteCommentUser} txtDeleteCommentUser={i.txtDeleteCommentUser} />
                            )
                            // When Condition loading WORK
                        }) : (
                                <div className="load-v-b1-E3">
                                    <p>MEMUAT USER COMMENT</p>
                                </div>
                            )
                    }
                    {/* END Get data from JSON yg telah di buat API */}

                    {/* END Section2 */}

                    {/* Section3 */}
                    <div className="section3">
                        <div className="circle-jm-comment">
                            <p className="jm-comment">
                                99
                            </p>
                        </div>
                        <NavLink to="/allCommentBox1SemuaHarga" className="btn-collapse-all-comment">
                            Lihat Semua Komentar
                        </NavLink>
                    </div>
                    {/* END Section3 */}
                </div>
                {/* END Column6 */}
            </div>
            {/* END Container */}
        </>
    )
}

export default ViewBoxIndicator1E