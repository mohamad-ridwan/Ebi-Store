// Import to React
import React from 'react'
// END Import to React

// Import NavLink to React Router
import { NavLink } from 'react-router-dom'
// END Import NavLink to React Router

// Import to CSS for BuyBoxIndicator1E
import '../BuyBoxIndicator1/BuyBoxIndicator1E.css'
// END Import to CSS for BuyBoxIndicator1E

// Create Component for BuyBoxIndicator1E
const BuyBoxIndicator1E = function () {
    return (
        <>
            <div className="cont-buy-box1-semuaHarga">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-semuaHarga">
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            Buy Food
                        </p>
                    </div>
                </div>
                {/* END Bar */}
                {/* END Column1 */}
                {/* Column2 */}
                <div className="col2-semuaHarga">
                    {/* Section1 */}
                    <div className="section1-col2">
                        <p className="txt-jdl-g-m">
                            Gambar Makanan
                        </p>
                        <div className="img-g-m">
                            <img src="" alt="Image Not Found!" className="img-m" />
                            <a href="#" className="btn-expand">
                                <i className="fas fa-expand"></i>
                            </a>
                        </div>
                    </div>
                    {/* END Section1 */}
                    {/* Section2 */}
                    <div className="section2-col2">
                        <p className="txt-jdl-nama-makanan">
                            Nama Makanan
                        </p>
                        <p className="txt-nama-makanan">
                            Makaroni Rasa Rumput Laut
                        </p>
                    </div>
                    {/* END Section2 */}
                    {/* Section3 */}
                    <div className="section3-col2">
                        <p className="txt-jdl-harga-makanan">
                            Harga Makanan
                        </p>
                        <p className="txt-harga-makanan">
                            Rp. 20.000, Diskon 50% dengan harga normal Rp. 10.000
                        </p>
                    </div>
                    {/* END Section3 */}
                    {/* Section4 */}
                    <div className="section4-col2">
                        <div className="box-note">
                            <div className="row1">
                                <i className="fas fa-exclamation-circle"></i>
                                <p className="txt-jdl-note">
                                    Note :
                                </p>
                            </div>
                            <div className="row2">
                                <p className="txt-desk-note">
                                    Pengiriman makanan ini hanya di antar dengan Kurir Online Shop EbiStore. Dan "Tidak" ada pembayaran lagi untuk Kurir, karna Kurir sudah menjadi tanggungan Kami. <br /> <br /> Namun apabila salah satu kurir dari pihak Kami yang menagih Ongkos Kirim, silahkan laporkan kepada Kami.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END Section4 */}
                </div>
                {/* END Column2 */}
            </div>
        </>
    )
}
// END Create Component for BuyBoxIndicator1E

// Export default for BuyBoxIndicator1E
// For bisa digunakan di Component mana saja
export default BuyBoxIndicator1E
// END Export default for BuyBoxIndicator1E