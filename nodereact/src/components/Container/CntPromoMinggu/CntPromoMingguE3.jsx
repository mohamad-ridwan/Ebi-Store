import React from 'react'

import '../CntPromoMinggu/CntPromoMingguE3.css'

const CntPromoMingguE3 = function (get) {
    return (
        <>
            {/* Box */}
            <div className="box-p-c2" id={get.id2}>
                {/* Tools Box */}
                <div className="c-b-tools">
                    {/* Column1 Tools */}
                    <div className="c1-tools">
                        <div className="w-btn-t">
                            <a className="btn-t like"

                            >
                                <p className="txt-j-l">
                                    0.
                                            </p>
                                <i className="fas fa-thumbs-up"></i>
                            </a>
                            <a className="btn-t"

                            >
                                <i className="fas fa-heart"></i>
                            </a>
                            <a href="#" className="btn-t">
                                <i className="fas fa-cart-plus"></i>
                            </a>
                        </div>
                    </div>
                    {/* END Column1 Tools */}

                    {/* Column2 Tools */}
                    <div className="c2-tools">
                        <a href="#" className="btn-el">
                            <i className="fas fa-ellipsis-h"></i>
                        </a>
                    </div>
                    {/* END Column2 Tools */}
                </div>
                {/* END Tools Box */}

                {/* Image Box */}
                <div className="c-c-img">
                    <img src={get.img2} alt="unable to load image" className="c-img" />
                    <div className="c-percent">
                        <p className="txt-percent">
                            {get.percent2}
                        </p>
                    </div>
                </div>
                {/* END Image Box */}

                {/* Price box */}
                <div className="c-c-dsk-price">
                    <div className="name-p">
                        <p className="txt-n-p">
                            {get.name2}
                        </p>
                    </div>
                    <div className="price-p">
                        <p className="txt-price">
                            {get.price2}
                        </p>
                        <p className="txt-ket-h-n">
                            {get.hargaNormal2}
                        </p>
                        <p className="txt-discount">
                            {get.potongan2}
                        </p>
                    </div>
                    <div className="grade-p">
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
                            <p className="txt-grade-t">
                                {get.grade2}
                            </p>
                            <p className="txt-terjual">
                                {get.txtTerjual2}
                            </p>
                        </ul>
                    </div>
                    <div className="stock-p">
                        <p className="txt-sk">
                            {get.txtStock2}
                        </p>
                        <div className="txt-jm-sk">
                            {get.jmStock2}
                        </div>
                    </div>
                </div>
                {/* END Price Box */}

                {/* Button Box */}
                <div className="c-c-btn">
                    <div className="col1-btn-v">
                        <a href={get.hrefView2} className="btn-v">
                            {get.btnView2}
                        </a>
                    </div>
                    <div className="col2-btn-b">
                        <a href={get.hrefBuy2} className="btn-b">
                            {get.btnBuy2}
                        </a>
                    </div>
                </div>
                {/* END Button Box */}
            </div>
            {/* END Box */}
        </>
    )
}

export default CntPromoMingguE3